import {
	motion,
	useMotionValueEvent,
	useReducedMotion,
	useScroll,
	useSpring,
	useTransform,
} from "motion/react"
import { useCallback, useEffect, useRef, useState } from "react"
import BrandIdentityImage from "@/assets/layout/services/brand-identity.webp"
import BrandStrategyImage from "@/assets/layout/services/brand-strategy.webp"
import CustomDigitalProductsImage from "@/assets/layout/services/custom-digital-products.webp"
import MarketingWebsiteImage from "@/assets/layout/services/marketing-website.webp"
import { AccordionIcon } from "@/components/ui/accordion-icon"
import { Badge } from "@/components/ui/badge"
import { useMediaQuery } from "@/hooks/use-media-query"

type Service = {
	number: string
	eyebrow: string
	heading: string
	price: string
	summary: string
	image: string
	imageAlt: string
	imagePosition?: "center" | "top"
	listHeading: string
	features: string[]
	fit: string
	timeline: string
}

const services: Service[] = [
	{
		number: "01",
		eyebrow: "START WITH STRATEGY",
		heading: "Brand Strategy Intensive",
		price: "Starting from Ksh 30k",
		summary:
			"This is a focused strategy engagement designed for founders and teams who need clarity on what makes your business different, who you’re trying to reach, and how to communicate your value with confidence before investing in branding or a website.",
		image: BrandStrategyImage,
		imageAlt: "Brand Foundations strategy presentation",
		listHeading: "What’s included",
		features: [
			"Brand strategy questionnaire",
			"90-minute strategy workshop",
			"Brand Strategy Playbook",
		],
		fit: "New businesses, founders preparing for a rebrand, organisations launching a new initiative, or teams that feel their messaging is unclear or inconsistent.",
		timeline:
			"Questionnaire completed in advance, 90-minute workshop, and playbook delivered within 7–10 business days.",
	},
	{
		number: "02",
		eyebrow: "BUILD THE FOUNDATION",
		heading: "Brand Identity",
		price: "Starting from Ksh 90k",
		summary:
			"Rather than designing a logo in isolation, we develop cohesive visual identities that feel considered, professional, and easy to use as your business grows.",
		image: BrandIdentityImage,
		imageAlt:
			"Brand identity system showing pattern, typography, and colour palette",
		imagePosition: "top",
		listHeading: "What’s included",
		features: [
			"Logo suite (primary + variations)",
			"Typography system",
			"Colour palette",
			"Visual direction & brand assets",
			"Brand usage guidelines",
			"Social media templates",
		],
		fit: "Businesses launching for the first time, companies that have outgrown their current branding, or founders who want a more polished and professional market presence.",
		timeline:
			"Most brand identity projects are completed in 4–6 weeks, depending on feedback rounds and scope.",
	},
	{
		number: "03",
		eyebrow: "LAUNCH ONLINE",
		heading: "Marketing Website",
		price: "Starting from Ksh 150k",
		summary:
			"Focused marketing websites that help businesses show up confidently, communicate their value clearly, and guide visitors toward taking action.",
		image: MarketingWebsiteImage,
		imageAlt: "Opportunity Music Project marketing website",
		listHeading: "What’s included",
		features: [
			"Website strategy & page structure",
			"Responsive website design",
			"Conversion-focused copywriting",
			"CMS setup when needed",
			"Webflow or custom website build",
			"Basic SEO & launch support",
		],
		fit: "Service businesses, consultants, studios, NGOs, and growing companies that need a professional online presence without the complexity of a full custom web application.",
		timeline:
			"Most marketing websites are completed in 8–10 weeks, depending on content readiness and scope.",
	},
	{
		number: "04",
		eyebrow: "FOR MORE COMPLEX DIGITAL PRODUCTS",
		heading: "Custom Digital Products",
		price: "Custom quoted",
		summary: "Digital products designed around your business goals.",
		image: CustomDigitalProductsImage,
		imageAlt: "Built-in kitchen appliances visualiser interface",
		listHeading: "Typical projects",
		features: [
			"Shopify-powered websites",
			"Customer portals & member areas",
			"Internal tools & dashboards",
			"Web apps",
			"Proof-of-concept builds",
			"Custom integrations",
		],
		fit: "Businesses that need functionality beyond a standard marketing website, including e-commerce, subscriptions, user sign-ups, operational tools, or early-stage digital products.",
		timeline:
			"Timelines vary by scope, but most MVP and custom product projects are delivered in 8–16+ weeks following a dedicated scoping phase.",
	},
]

export const ServicesSection = () => {
	const cardRefs = useRef<(HTMLElement | null)[]>([])
	const [activeIndex, setActiveIndex] = useState(0)
	const prefersReducedMotion = useReducedMotion()
	const { scrollY } = useScroll()

	const setCardRef = useCallback(
		(element: HTMLElement | null, index: number) => {
			cardRefs.current[index] = element
		},
		[],
	)

	const updateActiveIndex = useCallback(() => {
		const triggerPoint = window.innerHeight * 0.3
		let nextIndex = 0

		for (const [index, element] of cardRefs.current.entries()) {
			if (!element) continue
			if (element.getBoundingClientRect().top <= triggerPoint) nextIndex = index
			else break
		}

		setActiveIndex(nextIndex)
	}, [])

	useMotionValueEvent(scrollY, "change", updateActiveIndex)

	useEffect(() => {
		updateActiveIndex()
		window.addEventListener("resize", updateActiveIndex)
		return () => window.removeEventListener("resize", updateActiveIndex)
	}, [updateActiveIndex])

	return (
		<section
			id="services-section"
			aria-labelledby="services-heading"
			className="w-full bg-background px-5 py-16 md:px-8 md:py-24 lg:px-16 lg:py-28"
		>
			<div className="mx-auto w-full max-w-7xl">
				<h2
					id="services-heading"
					className="font-sans text-base font-medium leading-6 tracking-normal text-accent"
				>
					OUR SERVICES
				</h2>
			</div>

			<div className="mx-auto mt-12 grid w-full max-w-7xl grid-cols-1 items-start gap-16 md:mt-16 lg:mt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-20">
				<ServiceVisual
					activeIndex={activeIndex}
					prefersReducedMotion={Boolean(prefersReducedMotion)}
				/>

				<div className="flex min-w-0 flex-col gap-24 md:gap-28">
					{services.map((service, index) => (
						<ServiceCard
							key={service.number}
							service={service}
							cardRef={(element) => setCardRef(element, index)}
							prefersReducedMotion={Boolean(prefersReducedMotion)}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

const ServiceVisual = ({
	activeIndex,
	prefersReducedMotion,
}: {
	activeIndex: number
	prefersReducedMotion: boolean
}) => (
	<div className="sticky top-[max(5rem,calc(50svh-269.5px))] hidden min-h-127.5 w-full flex-col items-center gap-20 lg:flex">
		<div className="h-39.75 overflow-hidden" aria-hidden="true">
			<motion.div
				animate={{ y: -(activeIndex * 159) }}
				transition={
					prefersReducedMotion
						? { duration: 0 }
						: { type: "spring", stiffness: 300, damping: 30 }
				}
			>
				{services.map((service) => (
					<p
						key={service.number}
						className="h-39.75 overflow-hidden font-sans text-[13rem] font-semibold leading-35 tracking-[-0.04em] text-accent"
					>
						{service.number}
					</p>
				))}
			</motion.div>
		</div>

		<ServiceImage
			service={services[activeIndex]}
			prefersReducedMotion={prefersReducedMotion}
		/>
	</div>
)

const ServiceImage = ({
	service,
	prefersReducedMotion = false,
}: {
	service: Service
	prefersReducedMotion?: boolean
}) => (
	<div className="aspect-[450/271.09] w-full rounded-sm bg-muted p-2.5 md:p-4">
		<div className="size-full overflow-hidden rounded-sm">
			<motion.img
				key={service.number}
				src={service.image}
				alt={service.imageAlt}
				loading="lazy"
				decoding="async"
				initial={prefersReducedMotion ? false : { opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
				className={`size-full object-cover ${
					service.imagePosition === "top" ? "object-top" : "object-center"
				}`}
			/>
		</div>
	</div>
)

const ServiceCard = ({
	service,
	cardRef,
	prefersReducedMotion,
}: {
	service: Service
	cardRef: (element: HTMLElement | null) => void
	prefersReducedMotion: boolean
}) => {
	const isMobile = useMediaQuery("(max-width: 767px)")
	const progressRef = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: progressRef,
		offset: isMobile
			? ["start center", "end center"]
			: ["start 30%", "end 30%"],
	})
	const springProgress = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 20,
	})
	const animatedProgress = prefersReducedMotion
		? scrollYProgress
		: springProgress
	const width = useTransform(animatedProgress, [0, 1], ["0%", "100%"])

	const splitIndex = Math.ceil(service.features.length / 2)
	const featureColumns =
		service.features.length > 3
			? [
					service.features.slice(0, splitIndex),
					service.features.slice(splitIndex),
				]
			: [service.features]

	return (
		<article
			ref={cardRef}
			aria-labelledby={`service-${service.number}-heading`}
			className="flex min-w-0 flex-col items-start"
		>
			<div className="mb-12 flex w-full flex-col lg:hidden">
				<p className="font-sans text-8xl font-semibold leading-none tracking-[-0.04em] text-accent">
					{service.number}
				</p>
			</div>

			<div
				ref={progressRef}
				className="h-0.5 w-full overflow-clip bg-primary/10"
			>
				<motion.div className="h-full min-w-8 bg-accent" style={{ width }} />
			</div>

			<div className="mt-8 flex w-full flex-col items-start gap-4 text-base leading-6 text-foreground md:text-lg md:leading-normal">
				<p className="font-sans text-xs font-medium leading-normal tracking-[0.02em] text-foreground">
					{service.eyebrow}
				</p>

				<div className="flex w-full flex-col gap-6">
					<div className="flex flex-col items-start gap-3">
						<h3
							id={`service-${service.number}-heading`}
							className="text-[2rem] leading-[1.2] tracking-[-0.015em] md:text-5xl"
						>
							{service.heading}
						</h3>
						<Badge className="h-auto border-secondary/20 bg-muted px-2.5 py-1 font-sans text-small font-medium leading-6 tracking-normal text-accent">
							{service.price}
						</Badge>
					</div>

					<p>{service.summary}</p>
				</div>

				<div className="flex w-full flex-col gap-2 pt-4">
					<ServiceAccordion label={service.listHeading}>
						<div
							className={
								featureColumns.length > 1
									? "grid grid-cols-1 sm:grid-cols-2"
									: "grid grid-cols-1"
							}
						>
							{featureColumns.map((features, index) =>
								features.length > 0 ? (
									<ul
										key={index === 0 ? "first-column" : "second-column"}
										className="list-outside list-disc pl-6.75"
									>
										{features.map((feature) => (
											<li key={feature}>{feature}</li>
										))}
									</ul>
								) : null,
							)}
						</div>
					</ServiceAccordion>

					<ServiceAccordion label="Perfect for">
						<p>{service.fit}</p>
					</ServiceAccordion>

					<ServiceAccordion label="Typical timeline">
						<p>{service.timeline}</p>
					</ServiceAccordion>
				</div>

				<div className="mt-6 w-full lg:hidden">
					<ServiceImage service={service} prefersReducedMotion />
				</div>
			</div>
		</article>
	)
}

const ServiceAccordion = ({
	label,
	children,
}: {
	label: string
	children: React.ReactNode
}) => (
	<details className="group w-full rounded-sm">
		<summary className="flex cursor-pointer list-none items-center gap-6 overflow-clip border-t border-foreground py-4 font-medium transition-[padding] duration-200 hover:px-4 focus-visible:px-4 focus-visible:outline-none [&::-webkit-details-marker]:hidden">
			<span className="min-w-0 flex-1">{label}</span>
			<span className="flex size-6 shrink-0 items-center justify-center">
				<AccordionIcon className="size-2.5 rotate-45 transition-transform duration-200 group-open:rotate-0 motion-reduce:transition-none" />
			</span>
		</summary>
		<div className="py-4">{children}</div>
	</details>
)
