/** biome-ignore-all lint/correctness/noChildrenProp: {children} is used for the field component */
"use client"
import { useForm } from "@tanstack/react-form"
import { Link } from "@tanstack/react-router"
import { XIcon } from "lucide-react"
import type { ComponentProps, ReactNode } from "react"
import { useEffect, useRef, useState } from "react"
import { useGoogleAnalytics } from "tanstack-router-ga4"
import type { z } from "zod"
import { FieldInfo } from "@/components/global/form/field-info"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"
import { contactFormSchema } from "@/lib/types"
import { cn } from "@/lib/utils"

const defaultValues: z.infer<typeof contactFormSchema> = {
	fullName: "",
	email: "",
	service: [],
	message: "",
	budget: null,
	referralSource: null,
	acceptTerms: false,
}

type ServiceOptionValue = z.infer<typeof contactFormSchema>["service"][number]
type BudgetOptionValue = Exclude<
	z.infer<typeof contactFormSchema>["budget"],
	null
>

const serviceOptions: {
	value: ServiceOptionValue
}[] = [
	{
		value: "Brand Strategy Intensive",
	},
	{
		value: "Brand Identity",
	},
	{
		value: "Marketing Website",
	},
	{
		value: "Custom Digital Product",
	},
]

const budgetOptions: {
	value: BudgetOptionValue
	label: string
	analyticsValue: number
}[] = [
	{
		value: "<Ksh 30k-60k",
		label: "<Ksh 30k–60k",
		analyticsValue: 30_000,
	},
	{
		value: "Ksh 60k-120k",
		label: "Ksh 60k–120k",
		analyticsValue: 60_000,
	},
	{
		value: "Ksh 120k-250k",
		label: "Ksh 120k–250k",
		analyticsValue: 120_000,
	},
	{
		value: "Ksh 250k-500k",
		label: "Ksh 250k–500k",
		analyticsValue: 250_000,
	},
	{ value: "Ksh 500k+", label: "Ksh 500k+", analyticsValue: 500_000 },
	{ value: "Not sure yet", label: "Not sure yet", analyticsValue: 0 },
]

type ReferralOptionValue = Exclude<
	z.infer<typeof contactFormSchema>["referralSource"],
	null
>

const referralOptions: { value: ReferralOptionValue; label: string }[] = [
	{ value: "googleSearch", label: "Google Search" },
	{ value: "instagram", label: "Instagram" },
	{ value: "linkedin", label: "LinkedIn" },
	{ value: "referral", label: "Referral / Word of Mouth" },
	{ value: "previousClient", label: "Previous Client" },
	{ value: "portfolio", label: "Portfolio / Case Study" },
	{ value: "other", label: "Other" },
]

const netlifyFormName = "sonado-project-enquiry"

type SubmissionStatus = "idle" | "success" | "error"

type ContactModalProps = {
	triggerProps?: {
		label?: ReactNode
		variant?: ComponentProps<typeof Button>["variant"]
		size?: ComponentProps<typeof Button>["size"]
		className?: string
	}
}

export const ContactModal = ({ triggerProps }: ContactModalProps) => {
	const ga = useGoogleAnalytics()
	const honeypotRef = useRef<HTMLInputElement>(null)
	const submissionMessageRef = useRef<HTMLElement>(null)
	const [submissionStatus, setSubmissionStatus] =
		useState<SubmissionStatus>("idle")

	useEffect(() => {
		if (submissionStatus === "idle") return

		const animationFrame = requestAnimationFrame(() => {
			const message = submissionMessageRef.current
			if (!message) return

			message.focus({ preventScroll: true })
			message.scrollIntoView({
				behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
					? "auto"
					: "smooth",
				block: "nearest",
			})
		})

		return () => cancelAnimationFrame(animationFrame)
	}, [submissionStatus])

	const form = useForm({
		defaultValues,
		validators: {
			onSubmit: contactFormSchema,
		},
		onSubmit: async ({ value }) => {
			setSubmissionStatus("idle")

			const selectedBudget = budgetOptions.find(
				(option) => option.value === value.budget,
			)
			const selectedReferral = referralOptions.find(
				(option) => option.value === value.referralSource,
			)
			const body = new URLSearchParams({
				"form-name": netlifyFormName,
				"bot-field": honeypotRef.current?.value ?? "",
				fullName: value.fullName,
				email: value.email,
				service: value.service.join(", "),
				message: value.message ?? "",
				budget: selectedBudget?.label ?? "",
				referralSource: selectedReferral?.label ?? "",
				acceptTerms: value.acceptTerms ? "Yes" : "No",
			})

			try {
				const response = await fetch("/netlify-form.html", {
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
					},
					body: body.toString(),
				})

				if (!response.ok) {
					throw new Error(`Oops! Something went wrong: ${response.status}`)
				}

				const leadValue = selectedBudget?.analyticsValue

				ga.event("generate_lead", {
					currency: "KES",
					value: leadValue,
					lead_source: "Contact Form",
					budget_range: selectedBudget?.value,
					items: value.service,
				})

				form.reset()
				setSubmissionStatus("success")
			} catch {
				setSubmissionStatus("error")
			}
		},
	})

	return (
		<aside>
			<div className="container">
				<Sheet>
					<SheetTrigger
						render={
							<Button
								variant={triggerProps?.variant ?? "default"}
								size={triggerProps?.size ?? "default"}
								className={triggerProps?.className}
							/>
						}
					>
						{triggerProps?.label ?? "Contact Us"}
					</SheetTrigger>
					<SheetContent
						side="right"
						showCloseButton={false}
						overlayClassName="duration-300 ease-out-quad"
						className="h-svh w-full min-w-full lg:min-w-1/2 overflow-auto px-[5%] py-8 duration-300 ease-out-quad"
					>
						<SheetClose
							render={
								<Button
									variant="ghost"
									size="icon"
									className="absolute top-3 right-3 z-10 size-12 md:top-4 md:right-4 md:size-10"
								/>
							}
						>
							<XIcon aria-hidden="true" className="size-6 md:size-5" />
							<span className="sr-only">Close contact form</span>
						</SheetClose>
						<div className="mx-auto w-full pt-4">
							<div className="mb-8 space-y-3 md:mb-10 lg:mb-8">
								<h2>Tell us about your project</h2>
								<p className="text-balance">
									Thank you for your interest in working with Sonado Studio.
									Share a few details about your project and we'll get back to
									you as soon as possible to discuss next steps.
								</p>
							</div>

							<form
								name={netlifyFormName}
								method="POST"
								data-netlify="true"
								data-netlify-honeypot="bot-field"
								className="grid grid-cols-1 grid-rows-[auto_auto] gap-8"
								onSubmit={(e) => {
									e.preventDefault()
									e.stopPropagation()
									form.handleSubmit()
								}}
							>
								<input type="hidden" name="form-name" value={netlifyFormName} />
								<p className="sr-only" aria-hidden="true">
									<label htmlFor="bot-field">
										Do not fill out this field if you are human
									</label>
									<input
										ref={honeypotRef}
										id="bot-field"
										name="bot-field"
										type="text"
										tabIndex={-1}
										autoComplete="off"
									/>
								</p>

								<form.Field
									name="fullName"
									children={(field) => (
										<div className="flex flex-col space-y-2">
											<Label htmlFor={field.name}>
												Name
												<span className="text-accent -ml-1">*</span>
											</Label>
											<Input
												id={field.name}
												name={field.name}
												type="text"
												value={field.state.value}
												onBlur={field.handleBlur}
												onChange={(e) => field.handleChange(e.target.value)}
												aria-invalid={!field.state.meta.isValid}
												placeholder="Your name"
											/>
											<FieldInfo field={field} />
										</div>
									)}
								/>

								<form.Field
									name="email"
									children={(field) => (
										<div className="flex flex-col space-y-2">
											<Label htmlFor={field.name}>
												Email
												<span className="text-accent -ml-1">*</span>
											</Label>
											<Input
												id={field.name}
												name={field.name}
												type="email"
												value={field.state.value}
												onBlur={field.handleBlur}
												onChange={(e) => field.handleChange(e.target.value)}
												aria-invalid={!field.state.meta.isValid}
												placeholder="you@example.com"
											/>
											<FieldInfo field={field} />
										</div>
									)}
								/>

								<form.Field
									name="service"
									children={(field) => {
										return (
											<fieldset className="flex flex-col space-y-2">
												<legend className="mb-0.5 text-base font-medium leading-none flex gap-2 items-center">
													What can we help you with?
													<span className="text-accent -ml-1">*</span>
												</legend>
												<div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4 pb-3">
													{serviceOptions.map((option) => {
														const isSelected = field.state.value.includes(
															option.value,
														)
														const id = `service-${option.value}`

														return (
															<div key={option.value} className="relative">
																<Checkbox
																	id={id}
																	name={field.name}
																	checked={isSelected}
																	onCheckedChange={(checked) => {
																		field.handleChange(
																			checked
																				? [...field.state.value, option.value]
																				: field.state.value.filter(
																						(value) => value !== option.value,
																					),
																		)
																	}}
																	onBlur={field.handleBlur}
																	className="peer sr-only"
																	aria-invalid={!field.state.meta.isValid}
																/>
																<Label
																	htmlFor={id}
																	className={cn(
																		"flex min-h-14 h-full cursor-pointer items-center justify-center rounded-sm border px-2 py-2 text-center text-sm leading-tight transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2",
																		isSelected
																			? "border-secondary bg-primary text-primary-foreground"
																			: "border-border hover:border-primary/60",
																	)}
																>
																	<span
																		className={cn(
																			isSelected && "font-semibold",
																		)}
																	>
																		{option.value}
																	</span>
																</Label>
															</div>
														)
													})}
												</div>
												<FieldInfo field={field} />
											</fieldset>
										)
									}}
								/>

								<form.Field
									name="message"
									children={(field) => (
										<div className="flex flex-col space-y-2">
											<Label htmlFor={field.name}>Message</Label>
											<Textarea
												id={field.name}
												name={field.name}
												value={field.state.value}
												onBlur={field.handleBlur}
												onChange={(e) => field.handleChange(e.target.value)}
												aria-invalid={!field.state.meta.isValid}
												placeholder="A short description of your business, goals, or project. No formal brief required."
											/>
											<FieldInfo field={field} />
										</div>
									)}
								/>

								<form.Field
									name="budget"
									children={(field) => (
										<div className="flex flex-col space-y-2">
											<Label htmlFor={field.name}>
												Estimated Investment
												<span className="text-accent -ml-1">*</span>
											</Label>
											<Select
												name={field.name}
												value={field.state.value}
												onValueChange={(value) =>
													field.handleChange(value as typeof field.state.value)
												}
											>
												<SelectTrigger
													className="w-full"
													id={field.name}
													aria-invalid={!field.state.meta.isValid}
												>
													<SelectValue placeholder="Select your budget range">
														{(value: BudgetOptionValue | null) =>
															budgetOptions.find(
																(option) => option.value === value,
															)?.label ?? "Select your budget range"
														}
													</SelectValue>
												</SelectTrigger>
												<SelectContent>
													{budgetOptions.map((option) => (
														<SelectItem key={option.value} value={option.value}>
															{option.label}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
											<FieldInfo field={field} />
										</div>
									)}
								/>

								<form.Field
									name="referralSource"
									children={(field) => (
										<div className="flex flex-col space-y-2">
											<Label htmlFor={field.name}>
												How did you hear about us?
											</Label>
											<Select
												name={field.name}
												value={field.state.value}
												onValueChange={(value) =>
													field.handleChange(
														value as ReferralOptionValue | null,
													)
												}
											>
												<SelectTrigger
													id={field.name}
													className="w-full"
													aria-invalid={!field.state.meta.isValid}
												>
													<SelectValue placeholder="Select a referral source">
														{(value: ReferralOptionValue | null) =>
															referralOptions.find(
																(option) => option.value === value,
															)?.label ?? "Select a referral source"
														}
													</SelectValue>
												</SelectTrigger>
												<SelectContent>
													{referralOptions.map((option) => (
														<SelectItem key={option.value} value={option.value}>
															{option.label}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
											<FieldInfo field={field} />
										</div>
									)}
								/>

								<form.Field
									name="acceptTerms"
									children={(field) => (
										<div className="flex flex-col space-y-2">
											<div className="flex items-start gap-3">
												<Checkbox
													id={field.name}
													name={field.name}
													checked={field.state.value}
													required
													onCheckedChange={(checked) =>
														field.handleChange(Boolean(checked))
													}
													aria-invalid={!field.state.meta.isValid}
												/>
												<Label
													htmlFor={field.name}
													className="block text-sm leading-4"
												>
													I have read and understand the{" "}
													<Link
														to="/privacy-policy"
														className="inline underline transition-[text-underline-offset] duration-200 hover:underline-offset-2 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
													>
														Privacy Policy
													</Link>{" "}
													and agree to Sonado Studio using my information to
													respond to this enquiry.
												</Label>
											</div>
											<FieldInfo field={field} />
										</div>
									)}
								/>

								<form.Subscribe
									selector={(state) =>
										[state.values.acceptTerms, state.isSubmitting] as const
									}
								>
									{([acceptTerms, isSubmitting]) => (
										<div className="flex flex-col items-start gap-3">
											{submissionStatus === "success" && (
												<output
													ref={(element) => {
														submissionMessageRef.current = element
													}}
													tabIndex={-1}
													className="text-sm bg-emerald-100 px-3 py-2 rounded-sm outline-none"
												>
													Thank you for your enquiry! We'll review your details
													and get back to you soon.
												</output>
											)}
											{submissionStatus === "error" && (
												<p
													ref={(element) => {
														submissionMessageRef.current = element
													}}
													tabIndex={-1}
													className="text-sm text-accent bg-red-100 px-3 py-2 rounded-sm outline-none"
													role="alert"
												>
													Oops something went wrong! Please try again.
												</p>
											)}
											<div className="flex pt-2">
												<Button
													type="submit"
													disabled={!acceptTerms || isSubmitting}
												>
													{isSubmitting ? "Sending…" : "Send project enquiry"}
												</Button>
											</div>
										</div>
									)}
								</form.Subscribe>
							</form>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</aside>
	)
}
