/** biome-ignore-all lint/a11y/noRedundantRoles lint/a11y/useSemanticElements: Explicit list roles preserve semantics when CSS changes presentation. */
import { motion, useReducedMotion } from "motion/react"
import AtsTravelLogo from "@/assets/layout/client-logos/ats-travel.png"
import AwaloLogo from "@/assets/layout/client-logos/awalo.svg"
import AwtcLogo from "@/assets/layout/client-logos/awtc.png"
import HotpointLogo from "@/assets/layout/client-logos/hotpoint.svg"
import LinarcLogo from "@/assets/layout/client-logos/linarc.svg"
import MheLogo from "@/assets/layout/client-logos/mhe.svg"
import OpportunityMusicProjectLogo from "@/assets/layout/client-logos/opportunity-music-project.png"
import ProperlyLogo from "@/assets/layout/client-logos/properly.svg"
import TheGardenLogo from "@/assets/layout/client-logos/the-garden.svg"

const clientLogos = [
	{ name: "Linarc Design Studio", src: LinarcLogo, width: "100%" },
	{ name: "The Garden", src: TheGardenLogo, width: "100%" },
	{ name: "AWTC", src: AwtcLogo, width: "85%" },
	{ name: "Happy Everything", src: MheLogo, width: "100%" },
	{ name: "Awalo", src: AwaloLogo, width: "100%" },
	{ name: "ATS Travel", src: AtsTravelLogo, width: "46%" },
	{ name: "Hotpoint", src: HotpointLogo, width: "100%" },
	{ name: "Properly", src: ProperlyLogo, width: "100%" },
	{
		name: "Opportunity Music Project",
		src: OpportunityMusicProjectLogo,
		width: "52%",
	},
]

export const IntroSection = () => {
	const prefersReducedMotion = useReducedMotion()

	return (
		<section
			id="intro-section"
			aria-labelledby="intro-heading"
			className="relative z-0 w-full bg-primary px-5 py-16 text-primary-foreground md:px-8 md:py-24 lg:sticky lg:top-18 lg:px-16 lg:py-28"
		>
			<h2 id="intro-heading" className="sr-only">
				About Sonado Studio and our clients
			</h2>
			<div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-[minmax(0,7fr)_minmax(0,8fr)] lg:gap-12 xl:grid-cols-[560px_minmax(0,1fr)] xl:gap-20">
				<div className="min-w-0">
					<p className="font-sans text-base font-medium leading-6 text-accent">
						OUR CLIENTS
					</p>

					<ul
						role="list"
						className="mt-6 grid grid-cols-2 items-center gap-x-4 gap-y-6 sm:grid-cols-3 sm:gap-x-8"
						aria-label="Selected clients"
					>
						{clientLogos.map((logo, index) => (
							<motion.li
								key={logo.name}
								className="flex h-8 items-center justify-center sm:h-10"
								initial={prefersReducedMotion ? false : { opacity: 0.25 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true, amount: 0.6 }}
								transition={{
									duration: prefersReducedMotion ? 0 : 0.65,
									delay: prefersReducedMotion ? 0 : index * 0.06,
									ease: [0.25, 0.46, 0.45, 0.94],
								}}
							>
								<img
									src={logo.src}
									alt={logo.name}
									className="max-h-full max-w-[clamp(5rem,22vw,8.10625rem)] object-contain"
									style={{ width: logo.width }}
									loading="lazy"
									decoding="async"
								/>
							</motion.li>
						))}
					</ul>
				</div>

				<motion.p
					className="font-display text-2xl font-normal leading-[1.3] tracking-[-0.03em] text-primary-foreground md:text-[1.75rem] lg:max-w-xl lg:justify-self-center xl:max-w-full xl:pl-25 lg:pl-10"
					initial={prefersReducedMotion ? false : { opacity: 0.25 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, amount: 0.6 }}
					transition={{
						duration: prefersReducedMotion ? 0 : 0.8,
						ease: [0.25, 0.46, 0.45, 0.94],
					}}
				>
					Sonado Studio is a founder-led creative and technology studio. We
					create distinctive brands and carefully crafted websites for
					businesses ready to elevate their next chapter. Every project is led
					with strategy, design craft, and technical expertise from start to
					launch.
				</motion.p>
			</div>
		</section>
	)
}
