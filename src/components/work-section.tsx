import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"

export const WorkSection = () => {
	const selectedWork = [
		{
			title: "The Garden",
			tags: ["Brand Identity", "Website", "CMS"],
			externalUrl: "https://www.thegardenke.com/",
			image:
				"https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
		},
		{
			title: "Awalo",
			tags: ["Brand Identity", "Product Design", "Website"],
			externalUrl: "https://awalo.co/",
			image:
				"https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
		},
		{
			title: "Opportunity Music Project",
			tags: ["Website", "CMS"],
			externalUrl: "https://www.opportunitymusicproject.org/",
			image:
				"https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
		},
		{
			title: "Happy Everything",
			tags: ["Product Design", "Website"],
			externalUrl: "https://www.myhappyeverything.com/",
			image:
				"https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
		},
		{
			title: "ATS Travel",
			tags: ["Website", "CMS"],
			externalUrl: "https://www.atstravel.co.ke/",
			image:
				"https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
		},
		{
			title: "Project 6",
			tags: ["Product Design", "Website"],
			externalUrl: "#",
			image:
				"https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
		},
	]

	return (
		<section
			id="work-section"
			className="px-[5%] pb-16 md:pb-24 lg:pb-28 w-full pt-16"
		>
			<div className="container">
				<div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3 w-full">
					{selectedWork.map((work) => (
						<a
							key={work.title}
							href={work.externalUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="block size-full [touch-action:pan-y] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-2xl"
						>
							<Card className="overflow-hidden bg-secondary/10 shadow-xs py-0 transition-colors hover:bg-secondary/10">
								<div className="relative w-full overflow-hidden aspect-video shrink-0">
									<img
										src={work.image}
										alt={work.title}
										className="absolute inset-0 size-full object-cover"
									/>
								</div>
								<CardContent className="flex flex-1 flex-col justify-between px-5 pb-6">
									<div className="mb-4 flex flex-wrap items-center gap-2">
										{work.tags.map((tag) => (
											<Badge key={tag}>{tag}</Badge>
										))}
									</div>
									<h2 className="text-lg font-normal md:text-xl">
										{work.title}
									</h2>
								</CardContent>
							</Card>
						</a>
					))}
				</div>
			</div>
		</section>
	)
}
