import React from "react"
import atsCard from "@/assets/projects/coming-soon/ats-card.png"
import awaloCard from "@/assets/projects/coming-soon/awalo-card.png"
import linarcCard from "@/assets/projects/coming-soon/linarc-card.png"
import mheCard from "@/assets/projects/coming-soon/mhe-card.png"
import ompCard from "@/assets/projects/coming-soon/omp-card.png"
import theGardenCard from "@/assets/projects/coming-soon/thegarden-card.png"
import { Button } from "@/components/ui/button"

type ImageProps = {
	src: string
	alt?: string
}

type ComingSoonProps = {
	images?: typeof Images
}

const imageColumns = [
	{ className: "-mt-[20%] animate-loop-vertically-top" },
	{ className: "-mt-[50%] animate-loop-vertically-bottom" },
	{ className: "animate-loop-vertically-top" },
	{ className: "mt-[-30%] animate-loop-vertically-bottom" },
	{ className: "mt-[-20%] animate-loop-vertically-top" },
]

export const ComingSoon = ({ images = Images }: ComingSoonProps) => {
	const { imagesPartOne, imagesPartTwo } = images

	return (
		<section id="coming-soon" className="relative px-[5%]">
			<div className="flex min-h-svh items-center">
				<div className="container py-16 md:py-24 lg:py-28">
					<div className="relative z-10 mx-auto text-center bg-secondary/60 backdrop-blur-md text-primary rounded-sm max-w-3xl py-12 px-4 backdrop-saturate-200 drop-shadow-3xl">
						<h1 className="mb-5 md:text-[6rem] tracking-tighter leading-none">
							sonado studio
						</h1>
						<p className="md:text-md max-w-xl mx-auto text-pretty leading-tight">
							A digital design and development studio helping ambitious
							businesses build distinctive brands, websites, and digital
							products.
						</p>
						<p className="md:text-md max-w-xl mx-auto text-pretty leading-tight mt-1">
							Portfolio coming soon.
						</p>
						<div className="mt-6 flex items-center justify-center">
							<Button>
								<a
									href={"mailto:hello@sonadostudio.com"}
									target="_blank"
									rel="noreferrer"
								>
									Get in Touch
								</a>
							</Button>
						</div>
					</div>
				</div>
				<div className="absolute inset-0 z-0 overflow-hidden">
					<div className="absolute inset-0 z-10 bg-primary/45" />
					<div className="grid w-full grid-cols-2 gap-x-4 px-4 lg:grid-cols-2">
						{imageColumns.map((column) => (
							<AnimatedImageColumn
								key={column.className}
								imagesPartOne={imagesPartOne}
								imagesPartTwo={imagesPartTwo}
								className={column.className}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

const ImageGrid = ({ images = [] }: { images?: ImageProps[] }) => (
	<React.Fragment>
		{images.map((image) => (
			<div key={image.src} className="grid size-full grid-cols-1 gap-4">
				<div className="relative w-full aspect-video">
					<img
						className="absolute inset-0 size-full object-fit"
						src={image.src}
						alt={image.alt}
					/>
				</div>
			</div>
		))}
	</React.Fragment>
)

const AnimatedImageColumn = ({
	imagesPartOne,
	imagesPartTwo,
	className,
}: {
	imagesPartOne: ImageProps[]
	imagesPartTwo: ImageProps[]
	className: string
}) => (
	<div
		className={`grid size-full columns-2 grid-cols-1 gap-4 self-center ${className}`}
	>
		<ImageGrid images={imagesPartOne} />
		<ImageGrid images={imagesPartTwo} />
	</div>
)

export const Images = {
	imagesPartOne: [
		{
			src: theGardenCard,
			alt: "The Garden",
		},
		{
			src: awaloCard,
			alt: "Awalo",
		},
		{
			src: ompCard,
			alt: "Opportunity Music Project",
		},
		{
			src: mheCard,
			alt: "Happy Everything",
		},
	],
	imagesPartTwo: [
		{
			src: linarcCard,
			alt: "Linarc Design Studio",
		},
		{
			src: atsCard,
			alt: "ATS Travel",
		},
		{
			src: mheCard,
			alt: "Happy Everything",
		},
		{
			src: awaloCard,
			alt: "Awalo",
		},
	],
}
