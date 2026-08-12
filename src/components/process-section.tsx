/** biome-ignore-all lint/a11y/noRedundantRoles lint/a11y/useSemanticElements: Explicit list roles preserve semantics when CSS changes presentation. */
const processSteps = [
	{
		number: "01",
		heading: "Strategy",
		description:
			"We align on your goals, audience, scope, and priorities so the work that follows is focused, strategic, and intentional.",
	},
	{
		number: "02",
		heading: "Design",
		description:
			"We translate strategy into a clear visual direction and a thoughtful user experience that feels both distinctive and intuitive.",
	},
	{
		number: "03",
		heading: "Build",
		description:
			"We bring the work to life with care and precision, with a focus on quality, accessibility, performance, and long-term maintainability.",
	},
	{
		number: "04",
		heading: "Launch",
		description:
			"We complete final checks, provide handover and launch support, and make sure you feel confident using and evolving what we’ve built together.",
	},
]

export const ProcessSection = () => {
	return (
		<section
			id="process-section"
			aria-labelledby="studio-experience-heading"
			className="w-full bg-background px-5 py-16 md:px-8 md:py-24 lg:px-16 lg:py-28"
		>
			<div className="mx-auto w-full max-w-7xl">
				<p className="font-sans text-base font-medium leading-6 text-accent">
					YOUR STUDIO EXPERIENCE
				</p>

				<div className="mt-12 max-w-3xl md:mt-16 lg:mt-14">
					<h2
						id="studio-experience-heading"
						className="text-3xl md:text-4xl lg:text-5xl"
					>
						Clear process, no guesswork
					</h2>
					<p className="mt-6 max-w-2xl text-base leading-6 md:text-lg md:leading-7">
						Our process is structured and transparent, with defined milestones
						and regular check-ins so you always know where the project stands
						and what comes next.
					</p>
				</div>

				<ol
					role="list"
					className="mt-12 grid grid-cols-1 items-start md:mt-16 md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:mt-20 lg:grid-cols-4 lg:gap-0"
				>
					{processSteps.map((step) => (
						<li
							key={step.number}
							className="relative py-8 first:pt-0 last:pb-0 before:absolute before:top-0 before:left-0 before:h-px before:w-full before:bg-border first:before:hidden md:py-0 md:before:hidden lg:px-10 lg:before:block lg:before:h-full lg:before:w-px first:lg:pl-0 first:lg:before:hidden last:lg:pr-0"
						>
							<div className="flex items-center gap-4">
								<span className="font-sans text-base font-medium leading-6 text-accent bg-muted px-2.5 py-1 rounded-sm">
									{step.number}
								</span>
								<h3 className="text-2xl font-normal leading-[1.4] tracking-[-0.03em]">
									{step.heading}
								</h3>
							</div>
							<p className="mt-4 text-base leading-6 text-pretty">
								{step.description}
							</p>
						</li>
					))}
				</ol>
			</div>
		</section>
	)
}
