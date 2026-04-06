/** biome-ignore-all lint/correctness/noChildrenProp: {children} is used for the field component */
"use client"
import { useForm } from "@tanstack/react-form"
import type { ComponentProps } from "react"
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
	service: "Brand-to-Launch",
	message: "",
	budget: "$1000-$3000",
	referralSource: null,
	acceptTerms: false,
}

type ServiceOptionValue = z.infer<typeof contactFormSchema>["service"]

const serviceOptions: {
	value: ServiceOptionValue
	description: string
}[] = [
	{
		value: "Brand Identity",
		description: "Logo, visual system, & brand foundations.",
	},
	{
		value: "Brand-to-Launch",
		description: "Brand identity & marketing website.",
	},
	{
		value: "Marketing Website",
		description: "Website design & build focused on conversion.",
	},
]

type ReferralOptionValue = Exclude<
	z.infer<typeof contactFormSchema>["referralSource"],
	null
>

const referralOptions: { value: ReferralOptionValue; label: string }[] = [
	{ value: "referral", label: "Referral" },
	{ value: "linkedin", label: "LinkedIn" },
	{ value: "seenWork", label: "Saw our work" },
	{ value: "other", label: "Other" },
]

type ContactModalProps = {
	triggerProps?: {
		label?: string
		variant?: ComponentProps<typeof Button>["variant"]
		size?: ComponentProps<typeof Button>["size"]
		className?: string
	}
}

export const ContactModal = ({
	triggerProps,
}: ContactModalProps) => {
	// const [acceptTerms, setAcceptTerms] = useState<boolean | "indeterminate">(
	// 	false,
	// )

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
							<div className="mb-8 space-y-3  md:mb-10 lg:mb-12">
								<h2>Get in touch</h2>
								<p className="text-balance">
									Thank you for your interest in working with Sonado Studio!
									Share a few details about your project and we'll get back to
									you as soon as possible.
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
										<div className="flex flex-col space-y-3">
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
												placeholder="Enter your name"
											/>
											<FieldInfo field={field} />
										</div>
									)}
								/>

								<form.Field
									name="email"
									children={(field) => (
										<div className="flex flex-col space-y-3">
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
												placeholder="you@mail.com"
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
													What can we help with?
													<span className="text-accent -ml-1">*</span>
												</Label>
												<RadioGroup
													value={field.state.value}
													onValueChange={(value) => field.handleChange(value)}
													className="grid gap-3 md:grid-cols-3"
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
																		"flex cursor-pointer flex-col rounded-md border p-4 text-left transition-colors",
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
																	<span
																		className={cn(
																			"mt-1 text-sm text-muted-foreground text-center text-balance",
																			isSelected &&
																				"text-primary-foreground/80",
																		)}
																	>
																		{option.description}
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
										<div className="flex flex-col space-y-3">
											<Label htmlFor={field.name}>Message</Label>
											<Textarea
												id={field.name}
												value={field.state.value}
												onBlur={field.handleBlur}
												onChange={(e) => field.handleChange(e.target.value)}
												aria-invalid={!field.state.meta.isValid}
												placeholder="Briefly tell us about your project"
											/>
											<FieldInfo field={field} />
										</div>
									)}
								/>

								<form.Field
									name="budget"
									children={(field) => (
										<div className="flex flex-col space-y-3">
											<Label htmlFor={field.name}>
												Estimated Budget
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
													<SelectValue placeholder="Select your budget range" />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="<$1000">&lt;$1,000</SelectItem>
													<SelectItem value="$1000-$3000">
														$1,000–$3,000
													</SelectItem>
													<SelectItem value="$3000-$5000">
														$3,000–$5,000
													</SelectItem>
													<SelectItem value="$5000+">$5,000+</SelectItem>
												</SelectContent>
											</Select>
											<FieldInfo field={field} />
										</div>
									)}
								/>

								<form.Field
									name="referralSource"
									children={(field) => (
										<div className="flex flex-col space-y-1">
											<Label>How did you hear about us?</Label>
											<RadioGroup
												value={field.state.value ?? ""}
												onValueChange={(value) =>
													field.handleChange(value as ReferralOptionValue)
												}
												className="grid gap-2 md:grid-cols-3"
											>
												{referralOptions.map((option) => {
													const isSelected = field.state.value === option.value
													const id = `referral-${option.value}`

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
																	"flex cursor-pointer flex-col rounded-md border p-4 text-left transition-colors text-sm",
																	isSelected
																		? "border-secondary bg-primary text-primary-foreground"
																		: "border-border hover:border-primary/60",
																)}
															>
																<span
																	className={cn(isSelected && "font-semibold")}
																>
																	{option.label}
																</span>
															</Label>
														</div>
													)
												})}
											</RadioGroup>
											<FieldInfo field={field} />
										</div>
									)}
								/>

								<form.Field
									name="acceptTerms"
									children={(field) => (
										<div className="flex flex-col space-y-3">
											<div className="flex items-start gap-3">
												<Checkbox
													id={field.name}
													checked={field.state.value}
													onCheckedChange={(checked) =>
														field.handleChange(Boolean(checked))
													}
													aria-invalid={!field.state.meta.isValid}
												/>
												<Label
													htmlFor={field.name}
													className="text-sm leading-snug"
												>
													I agree to the terms and conditions
													<span className="text-accent -ml-1">*</span>
												</Label>
											</div>
											<FieldInfo field={field} />
										</div>
									)}
								/>

								<div className="flex pt-2">
									<Button type="submit">Send message</Button>
								</div>
							</form>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</aside>
	)
}
