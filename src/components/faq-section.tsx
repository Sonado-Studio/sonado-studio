import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { useId, useState } from "react"
import { AccordionIcon } from "@/components/ui/accordion-icon"

const faqs = [
	{
		question: "What types of clients are the best fit for Sonado Studio?",
		answer:
			"We do our best work with founders, growing businesses, and established organisations that care deeply about the quality of their brand and digital presence. The best fit is usually a client looking for a thoughtful creative partner rather than a quick production vendor.",
	},
	{
		question: "Who will actually work on our project?",
		answer:
			"You’ll work directly with Rehema, founder and creative director of Sonado Studio. I lead strategy, design direction, and client communication on every project. When additional expertise is needed, I bring in trusted collaborators across copywriting, design, and software development, while remaining your primary point of contact throughout the engagement.",
	},
	{
		question: "What do you need to get started on a project?",
		answer:
			"Every project begins with a 30-minute discovery call to understand your goals, timeline, budget, and whether we’re the right fit for each other. If we decide to move forward, we’ll define the scope, milestones, and next steps before any work begins.",
	},
	{
		question: "Can you just build us a website?",
		answer:
			"Yes. However, we believe the strongest websites are built on clear business goals and a solid understanding of the audience. That’s why every website engagement includes a strategic alignment phase, so what we create is not only visually compelling, but also purposeful and effective.",
	},
	{
		question: "Do you build mobile apps?",
		answer:
			"Not at the moment. We design and build responsive websites and web applications that work across desktop, tablet, and mobile devices, but we do not currently develop native iOS or Android apps for the App Store or Google Play.",
	},
	{
		question:
			"Where are you based, and do you work with international clients?",
		answer:
			"Sonado Studio is based in Nairobi, Kenya, and works with clients locally and internationally. Most projects are managed remotely through video calls, shared documents, and regular check-ins, so location is rarely a limitation.",
	},
]

export const FaqSection = () => {
	return (
		<section
			id="faq-section"
			aria-labelledby="faq-heading"
			className="w-full bg-primary px-5 py-16 text-primary-foreground md:px-8 md:py-24 lg:px-16 lg:py-28"
		>
			<div className="mx-auto w-full max-w-7xl">
				<p className="font-sans text-base font-medium leading-6 text-accent">
					FAQs
				</p>
			</div>

			<div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-12 md:gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12 xl:grid-cols-[500px_minmax(0,1fr)] xl:gap-30 mt-12 md:mt-16 lg:mt-8">
				<div className="max-w-125">
					<h2
						id="faq-heading"
						className="text-[2rem] leading-[1.2] tracking-[-0.015em] md:text-5xl"
					>
						Frequently asked questions
					</h2>
					<p className="mt-6 text-base leading-6 md:text-lg md:leading-7">
						Good work starts with a good fit. Here are a few things to know
						before partnering with Sonado Studio.
					</p>
				</div>

				<div className="flex min-w-0 flex-col gap-0">
					{faqs.map((faq) => (
						<FaqItem key={faq.question} {...faq} />
					))}
				</div>
			</div>
		</section>
	)
}

const FaqItem = ({ question, answer }: (typeof faqs)[number]) => {
	const [isOpen, setIsOpen] = useState(false)
	const prefersReducedMotion = useReducedMotion()
	const id = useId()
	const triggerId = `faq-trigger-${id}`
	const contentId = `faq-content-${id}`

	return (
		<div className="w-full rounded-sm">
			<button
				id={triggerId}
				type="button"
				aria-expanded={isOpen}
				aria-controls={contentId}
				onClick={() => setIsOpen((open) => !open)}
				className="group/summary flex min-h-16 w-full cursor-pointer items-center gap-6 overflow-clip border-t border-primary-foreground py-6 text-left font-semibold transition-[padding,color,background-color] duration-200 ease-out-quad hover:bg-secondary hover:px-4 hover:text-primary focus-visible:bg-secondary focus-visible:px-4 focus-visible:text-primary focus-visible:outline-none aria-expanded:bg-secondary aria-expanded:px-4 aria-expanded:text-primary"
			>
				<span className="min-w-0 flex-1 text-base leading-6 md:text-lg md:leading-7">
					{question}
				</span>
				<span className="relative flex size-6 shrink-0 items-center justify-center">
					<AccordionIcon className="size-2.5 rotate-45 transition-transform duration-200 ease-out-quad group-aria-expanded/summary:rotate-0 motion-reduce:transition-none" />
				</span>
			</button>

			<AnimatePresence initial={false}>
				{isOpen ? (
					<motion.div
						id={contentId}
						role="region"
						aria-labelledby={triggerId}
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{
							duration: prefersReducedMotion ? 0 : 0.2,
							ease: [0.25, 0.46, 0.45, 0.94],
						}}
						className="overflow-hidden"
					>
						<div className="py-6 text-base leading-6 text-primary-foreground">
							<p>{answer}</p>
						</div>
					</motion.div>
				) : null}
			</AnimatePresence>
		</div>
	)
}
