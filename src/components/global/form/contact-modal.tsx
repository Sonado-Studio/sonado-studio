/** biome-ignore-all lint/correctness/noChildrenProp: {children} is used for the field component */
"use client"
import { useForm } from "@tanstack/react-form"
import type { ComponentProps, ReactNode } from "react"
import type { z } from "zod"
import { FieldInfo } from "@/components/global/form/field-info"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
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
	service: "Brand Strategy Intensive",
	message: "",
	budget: null,
	referralSource: null,
	acceptTerms: false,
}

type ServiceOptionValue = z.infer<typeof contactFormSchema>["service"]
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
		value: "Custom Digital Product / Web App",
	},
]

const budgetOptions: { value: BudgetOptionValue; label: string }[] = [
	{ value: "<Ksh 30k-60k", label: "<Ksh 30k–60k" },
	{ value: "Ksh 60k-120k", label: "Ksh 60k–120k" },
	{ value: "Ksh 120k-250k", label: "Ksh 120k–250k" },
	{ value: "Ksh 250k-500k", label: "Ksh 250k–500k" },
	{ value: "Ksh 500k+", label: "Ksh 500k+" },
	{ value: "Not sure yet", label: "Not sure yet" },
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

type ContactModalProps = {
	triggerProps?: {
		label?: ReactNode
		variant?: ComponentProps<typeof Button>["variant"]
		size?: ComponentProps<typeof Button>["size"]
		className?: string
	}
}

export const ContactModal = ({ triggerProps }: ContactModalProps) => {
	const form = useForm({
		defaultValues,
		validators: {
			onSubmit: contactFormSchema,
		},
		onSubmit: (values) => {
			console.log(values)
		},
	})

	return (
		<aside id="contact">
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
						className="h-svh py-8 w-full border-none px-[5%] overflow-auto min-w-1/2"
					>
						<SheetClose />
						<div className="mx-auto w-full">
							<div className="mb-8 space-y-3 md:mb-10 lg:mb-8">
								<h2>Tell us about your project</h2>
								<p className="text-balance">
									Thank you for your interest in working with Sonado Studio.
									Share a few details about your project and we'll get back to
									you as soon as possible to discuss next steps.
								</p>
							</div>

							<form
								className="grid grid-cols-1 grid-rows-[auto_auto] gap-8"
								onSubmit={(e) => {
									e.preventDefault()
									e.stopPropagation()
									form.handleSubmit()
								}}
							>
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
											<div className="flex flex-col space-y-1">
												<Label>
													What can we help you with?
													<span className="text-accent -ml-1">*</span>
												</Label>
												<RadioGroup
													value={field.state.value}
													onValueChange={(value) => field.handleChange(value)}
													className="grid gap-2 md:grid-cols-2 lg:grid-cols-4"
												>
													{serviceOptions.map((option) => {
														const isSelected =
															field.state.value === option.value
														const id = `service-${option.value}`

														return (
															<div key={option.value}>
																<RadioGroupItem
																	value={option.value}
																	id={id}
																	className="sr-only"
																	aria-hidden="true"
																/>
																<Label
																	htmlFor={id}
																	className={cn(
																		"flex min-h-14 h-full cursor-pointer items-center justify-center rounded-md border px-2 py-2 text-center text-sm leading-tight transition-colors",
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
												</RadioGroup>
												<FieldInfo field={field} />
											</div>
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
													checked={field.state.value}
													required
													onCheckedChange={(checked) =>
														field.handleChange(Boolean(checked))
													}
													aria-invalid={!field.state.meta.isValid}
												/>
												<Label
													htmlFor={field.name}
													className="text-sm leading-none"
												>
													I understand this form is a project enquiry and not a
													confirmed booking. Sonado Studio will review my
													submission before arranging a discovery call.
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
										<div className="flex">
											<Button
												type="submit"
												disabled={!acceptTerms || isSubmitting}
											>
												{isSubmitting ? "Sending…" : "Send project enquiry"}
											</Button>
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
