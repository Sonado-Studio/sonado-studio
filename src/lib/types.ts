import { z } from "zod"

export const contactFormSchema = z.object({
	fullName: z
		.string()
		.trim()
		.min(2, { message: "Please enter your name" })
		.max(50, { message: "Please enter a valid name less than 50 characters" }),
	email: z.email({ message: "Please enter a valid email address" }),
	service: z
		.enum([
			"Brand Strategy Intensive",
			"Brand Identity",
			"Marketing Website",
			"Custom Digital Product",
		])
		.refine((value) => value !== undefined, {
			message: "Please select a service",
		}),
	message: z
		.string()
		.max(500, { message: "Please enter a message less than 500 characters" })
		.optional(),
	budget: z
		.enum([
			"<Ksh 30k-60k",
			"Ksh 60k-120k",
			"Ksh 120k-250k",
			"Ksh 250k-500k",
			"Ksh 500k+",
			"Not sure yet",
		])
		.nullable()
		.refine((value): boolean => value !== null, {
			message: "Please select an estimated investment",
		}),
	referralSource: z
		.enum([
			"googleSearch",
			"instagram",
			"linkedin",
			"referral",
			"previousClient",
			"portfolio",
			"other",
		])
		.nullable(),
	acceptTerms: z.boolean().refine((data) => data === true, {
		message: "Please accept the terms and conditions to continue",
	}),
})
