import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type SelectedProject = {
	title: string
	description: string
	tags: string[]
	imagePosition: "left" | "right"
}

const selectedProjects: SelectedProject[] = [
	{
		title: "The Garden",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
		tags: ["Brand Identity", "Website", "CMS"],
		imagePosition: "left",
	},
	{
		title: "Awalo",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
		tags: ["Brand Identity", "Product Design", "Website"],
		imagePosition: "right",
	},
	{
		title: "Opportunity Music Project",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
		tags: ["Website", "CMS"],
		imagePosition: "left",
	},
]

const SelectedWorkCard = ({ project }: { project: SelectedProject }) => {
	const isImageRight = project.imagePosition === "right"

	return (
		<article
			className={cn(
				"grid grid-cols-1 items-center gap-10 lg:gap-20",
				isImageRight
					? "lg:grid-cols-[minmax(0,436fr)_minmax(0,764fr)]"
					: "lg:grid-cols-[minmax(0,764fr)_minmax(0,436fr)]",
			)}
		>
			<div
				aria-hidden="true"
				className={cn(
					"aspect-[763.885/587.287] w-full rounded-sm bg-muted",
					isImageRight && "lg:order-2",
				)}
			/>

			<div
				className={cn(
					"flex flex-col items-start",
					isImageRight && "lg:order-1",
				)}
			>
				<div className="flex w-full flex-col gap-6">
					<h3 className="text-[2rem] leading-[1.2] tracking-[-0.015em] lg:text-5xl">
						{project.title}
					</h3>
					<p className="text-base leading-6 text-foreground">
						{project.description}
					</p>
				</div>

				<ul className="mt-6 flex flex-wrap items-center gap-4" aria-label="Project services">
					{project.tags.map((tag) => (
						<li key={tag}>
							<Badge className="h-auto border-secondary/20 bg-muted px-2 py-1 text-sm leading-[1.5] tracking-normal">
								{tag}
							</Badge>
						</li>
					))}
				</ul>

				<p className="mt-8 text-base leading-6 text-foreground">
					Case Study Coming Soon
				</p>
			</div>
		</article>
	)
}

export const WorkSection = () => {
	return (
		<section
			id="work-section"
			aria-labelledby="selected-work-heading"
			className="w-full bg-background px-5 py-16 md:px-8 md:py-24 lg:px-16 lg:py-28"
		>
			<div className="mx-auto w-full max-w-7xl">
				<h2
					id="selected-work-heading"
					className="font-sans text-base font-medium leading-6 tracking-normal text-accent"
				>
					SELECTED WORK
				</h2>

				<div className="mt-12 flex flex-col gap-24 md:mt-16 md:gap-32 lg:mt-20 lg:gap-56">
					{selectedProjects.map((project) => (
						<SelectedWorkCard key={project.title} project={project} />
					))}
				</div>
			</div>
		</section>
	)
}
