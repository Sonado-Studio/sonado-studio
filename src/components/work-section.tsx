import AtsBackground from "@/assets/layout/portfolio/ats/ats-bg.webp"
import AtsScreen1 from "@/assets/layout/portfolio/ats/ats-screen-1.webp"
import AtsScreen2 from "@/assets/layout/portfolio/ats/ats-screen-2.webp"
import AtsScreen3 from "@/assets/layout/portfolio/ats/ats-screen-3.webp"
import AtsScreen4 from "@/assets/layout/portfolio/ats/ats-screen-4.webp"
import AtsScreen5 from "@/assets/layout/portfolio/ats/ats-screen-5.webp"
import AwaloBackground from "@/assets/layout/portfolio/awalo/awalo-bg.webp"
import AwaloScreen1 from "@/assets/layout/portfolio/awalo/awalo-screen-1.webp"
import AwaloScreen2 from "@/assets/layout/portfolio/awalo/awalo-screen-2.webp"
import AwaloScreen3 from "@/assets/layout/portfolio/awalo/awalo-screen-3.webp"
import AwaloScreen4 from "@/assets/layout/portfolio/awalo/awalo-screen-4.webp"
import AwaloScreen5 from "@/assets/layout/portfolio/awalo/awalo-screen-5.webp"
import LinarcBackground from "@/assets/layout/portfolio/linarc/linarc-bg.webp"
import LinarcScreen1 from "@/assets/layout/portfolio/linarc/linarc-screen-1.webp"
import LinarcScreen2 from "@/assets/layout/portfolio/linarc/linarc-screen-2.webp"
import LinarcScreen3 from "@/assets/layout/portfolio/linarc/linarc-screen-3.webp"
import LinarcScreen4 from "@/assets/layout/portfolio/linarc/linarc-screen-4.webp"
import LinarcScreen5 from "@/assets/layout/portfolio/linarc/linarc-screen-5.webp"
import OmpBackground from "@/assets/layout/portfolio/omp/omp-bg.webp"
import OmpScreen1 from "@/assets/layout/portfolio/omp/omp-screen-1.webp"
import OmpScreen2 from "@/assets/layout/portfolio/omp/omp-screen-2.webp"
import OmpScreen3 from "@/assets/layout/portfolio/omp/omp-screen-3.webp"
import OmpScreen4 from "@/assets/layout/portfolio/omp/omp-screen-4.webp"
import OmpScreen5 from "@/assets/layout/portfolio/omp/omp-screen-5.webp"
import TheGardenBackground from "@/assets/layout/portfolio/the-garden/the-garden-bg.webp"
import TheGardenScreen1 from "@/assets/layout/portfolio/the-garden/the-garden-screen-1.webp"
import TheGardenScreen2 from "@/assets/layout/portfolio/the-garden/the-garden-screen-2.webp"
import TheGardenScreen3 from "@/assets/layout/portfolio/the-garden/the-garden-screen-3.webp"
import TheGardenScreen4 from "@/assets/layout/portfolio/the-garden/the-garden-screen-4.webp"
import TheGardenScreen5 from "@/assets/layout/portfolio/the-garden/the-garden-screen-5.webp"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type SelectedProject = {
	title: string
	url: string
	description: string
	tags: string[]
	imagePosition: "left" | "right"
	media?: {
		background: string
		screens: string[]
	}
}

const theGardenScreens = [
	TheGardenScreen1,
	TheGardenScreen2,
	TheGardenScreen3,
	TheGardenScreen4,
	TheGardenScreen5,
]

const awaloScreens = [
	AwaloScreen1,
	AwaloScreen2,
	AwaloScreen3,
	AwaloScreen4,
	AwaloScreen5,
]

const atsScreens = [AtsScreen1, AtsScreen2, AtsScreen3, AtsScreen4, AtsScreen5]

const linarcScreens = [
	LinarcScreen1,
	LinarcScreen2,
	LinarcScreen3,
	LinarcScreen4,
	LinarcScreen5,
]

const ompScreens = [OmpScreen1, OmpScreen2, OmpScreen3, OmpScreen4, OmpScreen5]

const portfolioScreenDelays = ["-0.5s", "-8.5s", "-6.5s", "-4.5s", "-2.5s"]

const selectedProjects: SelectedProject[] = [
	{
		title: "The Garden",
		url: "https://www.thegardenke.com/",
		description:
			"The Garden is a mental health and wellness platform helping people in Kenya find trusted information, events, and care providers. We created a warm, approachable yet empowering brand identity and Webflow website designed to make sensitive information feel clear, welcoming, and easy to navigate.",
		tags: ["Brand Identity", "Website Design", "Webflow Development"],
		imagePosition: "left",
		media: {
			background: TheGardenBackground,
			screens: theGardenScreens,
		},
	},
	{
		title: "Linarc Design Studio",
		url: "https://www.linarcdesignstudio.com/",
		description:
			"Linarc is an architecture and interior design studio shaping Africa’s built environment through innovative, functional, and sustainable work. We designed and built a refined Webflow website that reflects the studio’s next chapter and gives its team an easy way to showcase a growing portfolio of impressive projects.",
		tags: ["Website Design", "Webflow Development"],
		imagePosition: "right",
		media: {
			background: LinarcBackground,
			screens: linarcScreens,
		},
	},
	{
		title: "Opportunity Music Project",
		url: "https://www.opportunitymusicproject.org/",
		description:
			"Opportunity Music Project is a New York nonprofit helping young people pursue their passion for music, regardless of economic background. We created a warm and joyful Squarespace website that makes programmes, schedules, events, and ways to support the organisation easier to discover.",
		tags: ["Website Design", "Squarespace Development"],
		imagePosition: "left",
		media: {
			background: OmpBackground,
			screens: ompScreens,
		},
	},
	{
		title: "Awalo",
		url: "https://awalo.co/",
		description:
			"Awalo supports founders from the Global South building impactful and scalable ventures through strategic consulting, practical tools, and digital products. We created a bold, empowering brand and website, while also leading UI/UX design and frontend development for its internal platform.",
		tags: [
			"Brand Identity",
			"Website Design",
			"Product Design",
			"Frontend Development",
		],
		imagePosition: "right",
		media: {
			background: AwaloBackground,
			screens: awaloScreens,
		},
	},
	{
		title: "ATS Travel",
		url: "https://www.atstravel.co.ke/",
		description:
			"After 25 years in the travel industry, ATS Travel needed a more contemporary brand presence that could speak confidently to corporate clients. We designed and built a polished Webflow website that communicates the company’s experience, professionalism, and high-touch approach to travel.",
		tags: ["Website Design", "Webflow Development"],
		imagePosition: "left",
		media: {
			background: AtsBackground,
			screens: atsScreens,
		},
	},
]

const ProjectMedia = ({ project }: { project: SelectedProject }) => {
	if (!project.media) {
		return <div className="aspect-1522/1000 w-full rounded-sm bg-muted" />
	}

	return (
		<div className="relative aspect-1522/1000 w-full overflow-hidden rounded-sm bg-muted">
			<img
				src={project.media.background}
				alt=""
				className="absolute inset-0 size-full object-cover"
				loading="lazy"
				decoding="async"
			/>

			<div className="absolute top-1/2 left-1/2 aspect-2100/1282 w-[90%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-sm">
				{project.media.screens.map((screen, index) => (
					<img
						key={screen}
						src={screen}
						alt=""
						className="portfolio-screen-crossfade absolute inset-0 size-full object-cover"
						style={{ animationDelay: portfolioScreenDelays[index] }}
						loading="lazy"
						decoding="async"
					/>
				))}
			</div>
		</div>
	)
}

const SelectedWorkCard = ({ project }: { project: SelectedProject }) => {
	const isImageRight = project.imagePosition === "right"

	return (
		<article>
			<a
				href={project.url}
				target="_blank"
				rel="noopener"
				className={cn(
					"grid cursor-pointer grid-cols-1 items-center gap-10 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 lg:gap-20",
					isImageRight
						? "lg:grid-cols-[minmax(0,436fr)_minmax(0,764fr)]"
						: "lg:grid-cols-[minmax(0,764fr)_minmax(0,436fr)]",
				)}
			>
				<div
					aria-hidden="true"
					className={cn("w-full", isImageRight && "lg:order-2")}
				>
					<ProjectMedia project={project} />
				</div>

				<div
					className={cn(
						"flex flex-col items-start",
						isImageRight && "lg:order-1",
					)}
				>
					<div className="flex w-full flex-col gap-6">
						<h3 className="text-[2rem] leading-[1.2] tracking-[-0.015em] lg:text-5xl text-pretty">
							{project.title}
						</h3>
						<p className="text-base leading-6 text-foreground">
							{project.description}
						</p>
					</div>

					<ul
						className="mt-6 flex flex-wrap items-center gap-4"
						aria-label="Project services"
					>
						{project.tags.map((tag) => (
							<li key={tag}>
								<Badge className="h-auto border-secondary/20 bg-muted px-2 py-1 text-sm leading-normal tracking-normal text-accent">
									{tag}
								</Badge>
							</li>
						))}
					</ul>
				</div>
			</a>
		</article>
	)
}

export const WorkSection = () => {
	return (
		<section
			id="work-section"
			aria-labelledby="selected-work-heading"
			className="relative z-10 w-full scroll-mt-16 rounded-t-2xl bg-background px-5 py-16 md:rounded-t-3xl md:px-8 md:py-24 lg:scroll-mt-18 lg:px-16 lg:py-28"
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
