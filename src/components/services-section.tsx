import { motion, useScroll, useSpring, useTransform } from "motion/react"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { useMediaQuery } from "@/hooks/use-media-query"

type Service = {
	number: string
	heading: string
	description: string
	features: string[]
	popularBadge: boolean
}

const services: Service[] = [
	{
		number: "01",
		heading: "Brand Identity",
		description:
			"We focus on how your brand shows up online across your website, product, and digital touch-points. We help you define a strategic and visual foundation that feels considered, credible, and adaptable.",
		features: [
			"Logo (primary + variations)",
			"Typography system",
			"Color palette",
			"Brand strategy",
			"Brand usage guidelines",
			"Social media templates (x5)",
		],
		popularBadge: false,
	},
	{
		number: "02",
		heading: "Brand-to-Launch",
		description:
			"Our Brand-to-Launch service is designed for businesses that need clarity, consistency, and a strong online presence all working together from day one. We develop your brand identity and translate it directly into a focused, conversion-driven marketing website that scales with you as you grow.",
		features: [
			"Complete brand identity",
			"Marketing website design & build",
			"Conversion-focused copywriting",
			"Webflow or custom code build",
			"Basic SEO & performance setup",
			"Launch support",
		],
		popularBadge: true,
	},
	{
		number: "03",
		heading: "Marketing Website",
		description:
			"We design and build streamlined websites that communicate your value, guide users, and support real business goals. Ideal for launches, campaigns, and growing businesses that need a cohesive online presence without the complexity of a full web app or backend system.",
		features: [
			"Website strategy & page structure",
			"Responsive website design",
			"Conversion-focused copywriting",
			"Website build using Webflow or custom code",
			"Basic on-page SEO & performance setup",
			"Launch support",
		],
		popularBadge: false,
	},
]

export const ServicesSection = () => {
	const ref = useRef<HTMLDivElement>(null)
	const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 991px)")

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	})

	const serviceCount = services.length
	const numbers = Array.from({ length: serviceCount }, (_, index) => index + 1)

	const y = useTransform(
		scrollYProgress,
		[0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
		isTablet
			? ["0%", "-25%", "-25%", "-50%", "-50%", "-75%"]
			: ["0%", "0%", "-25%", "-35%", "-50%", "-75%"],
	)

	return (
		<section
			id="services-section"
			ref={ref}
			className="px-[5%] py-16 md:py-24 lg:py-28 relative"
		>
			<div className="container">
				<h1 className="text-4xl lg:mb-28 md:mb-24">Our Expertise</h1>
				<div className="relative grid auto-cols-fr grid-cols-1 items-start gap-x-8 gap-y-12 md:grid-cols-[0.75fr_1fr] md:gap-y-16 lg:grid-cols-[max-content_1fr] lg:gap-x-20">
					<div className="top-[20%] hidden h-56 overflow-hidden md:sticky md:flex md:items-start">
						<h2 className="text-8xl leading-none md:text-[13rem] text-accent">
							0
						</h2>
						<motion.div className="text-center" style={{ y }}>
							{numbers.map((number) => (
								<h2
									key={number}
									className="text-8xl leading-none md:text-[13rem] text-accent"
								>
									{number}
								</h2>
							))}
						</motion.div>
					</div>
					<div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:gap-x-28 md:gap-y-28">
						{services.map((service) => (
							<ServiceCard key={service.number} {...service} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

const ServiceCard = ({ ...service }: Service) => {
	const ref = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start center", "end center"],
	})
	const animatedWidth = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 20,
	})
	const width = { width: useTransform(animatedWidth, [0, 1], ["0%", "100%"]) }

	const leftFeatures = service.features.slice(0, 3)
	const rightFeatures = service.features.slice(3)

	return (
		<div className="flex flex-col items-start justify-center">
			<div className="mt-10 flex text-3xl leading-none md:mt-0 md:hidden md:text-[13rem] text-accent">
				{service.number}
			</div>
			<div
				ref={ref}
				className="mb-8 mt-8 h-0.5 w-full bg-primary/10 md:mt-0 relative"
			>
				<motion.div className="h-0.5 w-8 bg-accent/50" style={width} />
			</div>
			{service.popularBadge && (
				<Badge variant="secondary" className="mb-5 md:text-sm">
					Most Popular!
				</Badge>
			)}
			<h3 className="mb-5 text-2xl md:mb-6 md:text-6xl">{service.heading}</h3>
			<div className="flex flex-col gap-5">
				<p>{service.description}</p>
				<p>What’s Included?</p>
				<div className="-mt-5 grid grid-cols-1 lg:grid-cols-2">
					<ul className="list-disc list-outside pl-5 space-y-1">
						{leftFeatures.map((feature) => (
							<li key={feature}>{feature}</li>
						))}
					</ul>
					{rightFeatures.length > 0 && (
						<ul className="list-disc list-outside pl-5 space-y-1">
							{rightFeatures.map((feature) => (
								<li key={feature}>{feature}</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</div>
	)
}
