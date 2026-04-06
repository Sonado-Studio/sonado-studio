import BuildIcon from "@/assets/layout/icons/build.svg"
import DesignIcon from "@/assets/layout/icons/design.svg"
import DiscoverIcon from "@/assets/layout/icons/discover.svg"
import LaunchIcon from "@/assets/layout/icons/launch.svg"

const sections = [
	{
		icon: {
			src: DiscoverIcon,
			alt: "Discover icon",
		},
		heading: "Discover",
		description:
			"Aligning on goals, audience, scope and direction so the work that follows is grounded and intentional.",
	},
	{
		icon: {
			src: DesignIcon,
			alt: "Design icon",
		},
		heading: "Design",
		description:
			"Shaping strategy into a clear and considered visual direction and user experience.",
	},
	{
		icon: {
			src: BuildIcon,
			alt: "Build icon",
		},
		heading: "Build",
		description:
			"Bringing the work to life with care and precision with a focus on quality, accessibility, and maintainability.",
	},
	{
		icon: {
			src: LaunchIcon,
			alt: "Launch icon",
		},
		heading: "Launch",
		description:
			"Final checks, handover, and launch support so you feel confident using and evolving what we’ve built together.",
	},
]

export const ProcessSection = () => {
	return (
		<section id="process-section" className="px-[5%] py-16 md:py-24 lg:py-28">
			<div className="container">
				<div className="mb-12 md:mb-18 lg:mb-20">
					<div className="max-w-2xl flex flex-col gap-5">
						<h2>Clear process, no guesswork</h2>
						<p>
							Our process is structured and transparent, with defined milestones
							and regular check-ins so you always know what’s happening and
							what’s coming next.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8">
					{sections.map((section) => (
						<div
							key={section.heading.toLowerCase()}
							className="shadow-sm rounded-2xl bg-muted p-6 md:p-8 lg:p-12 gap-5 flex flex-col items-start justify-center"
						>
							<div>
								<img
									src={section.icon.src}
									className="size-8"
									alt={section.icon.alt}
								/>
							</div>
							<h3 className="mb-5 text-2xl">{section.heading}</h3>
							<p>{section.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
