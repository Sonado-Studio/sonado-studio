import { z } from "zod"

export const contactFormSchema = z.object({
	fullName: z
		.string()
		.trim()
		.min(2, { message: "Please enter your name" })
		.max(50, { message: "Please enter a valid name less than 50 characters" }),
	email: z.email({ message: "Please enter a valid email address" }),
	service: z
		.enum(["Brand Identity", "Brand-to-Launch", "Marketing Website"])
		.refine((value) => value !== undefined, {
			message: "Please select a service",
		}),
	message: z
		.string()
		.max(500, { message: "Please enter a message less than 500 characters" })
		.optional(),
	budget: z.enum(["<$1000", "$1000-$3000", "$3000-$5000", "$5000+"]),
	referralSource: z
		.enum(["referral", "linkedin", "seenWork", "other"])
		.nullable(),
	acceptTerms: z.boolean().refine((data) => data === true, {
		message: "Please accept the terms and conditions to continue",
	}),
})
