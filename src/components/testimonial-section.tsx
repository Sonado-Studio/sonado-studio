import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { useState } from "react"
import LinarcLogo from "@/assets/layout/client-logos/testimonials/linarc-logo-colour.svg"
import TheGardenLogo from "@/assets/layout/client-logos/testimonials/the-garden-logo-colour.svg"
import ArrowForwardIcon from "@/assets/layout/cta/arrow-forward.svg"

const testimonials = [
	{
		quote:
			"Rehema is a dream to work with! For our project, she combined her refined technical expertise and keen eye for aesthetics to create a clean, seamless and memorable end-user experience. Once she begins working with you, she is committed to your success and producing a product that you will be happy with.",
		author: "Alisha Muchemi",
		company: "The Garden",
		logo: TheGardenLogo,
	},
	{
		quote:
			"Rehema was very professional and willing to accommodate what we envisioned for our brand. What felt so difficult for us was broken down into manageable tasks that made the process very seamless.",
		author: "Sharon Njiru",
		company: "Linarc Design Studio",
		logo: LinarcLogo,
	},
]

export const TestimonialSection = () => {
	const [activeIndex, setActiveIndex] = useState(0)
	const [direction, setDirection] = useState<1 | -1>(1)
	const prefersReducedMotion = useReducedMotion()
	const activeTestimonial = testimonials[activeIndex]

	const showTestimonial = (nextDirection: 1 | -1) => {
		setDirection(nextDirection)
		setActiveIndex(
			(currentIndex) =>
				(currentIndex + nextDirection + testimonials.length) %
				testimonials.length,
		)
	}

	const slideOffset = prefersReducedMotion ? 0 : direction * 32

	return (
		<section
			aria-labelledby="testimonial-heading"
			className="w-full bg-muted px-5 py-16 md:px-8 md:py-24 lg:px-16 lg:py-28"
		>
			<h2 id="testimonial-heading" className="sr-only">
				Client testimonials
			</h2>

			<div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 lg:min-h-100 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-20">
				<div className="relative order-2 flex items-center justify-start gap-8 lg:order-1 lg:flex-col lg:items-start lg:justify-end">
					<div className="absolute top-1/2 left-0 hidden -translate-y-1/2 items-center lg:flex">
						<AnimatePresence mode="wait" initial={false}>
							<motion.img
								key={activeTestimonial.company}
								src={activeTestimonial.logo}
								alt={`${activeTestimonial.company} logo`}
								className="max-h-18 w-auto max-w-78 object-contain object-left"
								initial={{ opacity: prefersReducedMotion ? 1 : 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: prefersReducedMotion ? 1 : 0 }}
								transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
							/>
						</AnimatePresence>
					</div>

					<div className="flex items-center gap-3">
						<button
							type="button"
							aria-label="Show previous testimonial"
							aria-controls="active-testimonial"
							onClick={() => showTestimonial(-1)}
							className="group flex size-7.5 items-center justify-center rounded-full bg-primary transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-muted active:scale-95 motion-reduce:transition-none md:size-9"
						>
							<img
								src={ArrowForwardIcon}
								alt=""
								className="size-2.5 rotate-180 transition-transform duration-200 group-hover:-translate-x-0.5 motion-reduce:transition-none md:size-3.5"
							/>
						</button>
						<button
							type="button"
							aria-label="Show next testimonial"
							aria-controls="active-testimonial"
							onClick={() => showTestimonial(1)}
							className="group flex size-7.5 items-center justify-center rounded-full bg-primary transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-muted active:scale-95 motion-reduce:transition-none md:size-9"
						>
							<img
								src={ArrowForwardIcon}
								alt=""
								className="size-2.5 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none md:size-3.5"
							/>
						</button>
					</div>
				</div>

				<div
					id="active-testimonial"
					aria-live="polite"
					aria-atomic="true"
					className="order-1 min-w-0 lg:order-2 lg:min-h-112"
				>
					<AnimatePresence mode="wait" initial={false} custom={direction}>
						<motion.figure
							key={activeTestimonial.author}
							className="flex h-full flex-col justify-center"
							initial={{
								opacity: prefersReducedMotion ? 1 : 0,
								x: slideOffset,
							}}
							animate={{ opacity: 1, x: 0 }}
							exit={{
								opacity: prefersReducedMotion ? 1 : 0,
								x: -slideOffset,
							}}
							transition={{
								duration: prefersReducedMotion ? 0 : 0.3,
								ease: "easeOut",
							}}
						>
							<blockquote className="font-display text-[clamp(1.4rem,2.6vw,2.3rem)] font-medium leading-[1.2] tracking-[-0.025em] text-foreground">
								&ldquo;{activeTestimonial.quote}&rdquo;
							</blockquote>
							<figcaption className="mt-8 font-sans text-base leading-6 text-muted-foreground md:mt-10 md:text-lg md:leading-7">
								<span className="text-foreground">
									{activeTestimonial.author}
								</span>
								<span aria-hidden="true"> · </span>
								<span>{activeTestimonial.company}</span>
							</figcaption>
						</motion.figure>
					</AnimatePresence>
				</div>
			</div>
		</section>
	)
}
