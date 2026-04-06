import { Link } from "@tanstack/react-router"
import LogoIcon from "@/assets/logos/sonado-studio-icon.svg"
import { ContactModal } from "@/components/global/form/contact-modal"

export const columnLinks = [
	{
		links: [
			{ title: "Work", url: "#work-section" },
			{ title: "Services", url: "#services-section" },
			{ title: "About", url: "#about-section" },
			{ title: "Contact", url: "#contact-section" },
		],
	},
]

export const Footer = () => {
	return (
		<footer
			id="footer"
			className="px-[5%] py-12 md:py-18 lg:py-20 bg-primary text-primary-foreground"
		>
			<div className="container">
				<div className="grid grid-cols-1 items-center justify-center justify-items-center gap-x-[4vw] gap-y-12 pb-12 md:pb-18 lg:grid-cols-[0.5fr_1fr_0.5fr] lg:justify-between lg:gap-y-4 lg:pb-20">
					<Link to="/" className="lg:justify-self-start">
						<img
							src={LogoIcon}
							alt="Sonado Studio"
							className="inline-block w-12 h-12 object-cover"
						/>
					</Link>
					{columnLinks.map((column) => (
						<ul
							key={column.links[0].title}
							className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start"
						>
							{column.links.map((link) => (
								<li key={link.title} className="font-semibold">
									{link.title === "Contact" ? (
										<ContactModal
											triggerProps={{
												label: "Contact",
												variant: "link",
												className:
													"h-auto p-0 text-base font-semibold text-primary-foreground",
											}}
										/>
									) : (
										<Link to={link.url}>{link.title}</Link>
									)}
								</li>
							))}
						</ul>
					))}
					<div className="flex flex-col gap-1 text-center lg:text-right justify-items-center lg:justify-self-end">
						<p>Brand and Design Studio</p>
						<p>Based in Nairobi, Creating Globally</p>
					</div>
				</div>

				<div className="h-px w-full bg-primary-foreground" />
				<div className="flex flex-col-reverse items-center justify-center justify-items-center pb-4 pt-6 text-sm md:flex-row md:gap-x-6 md:pb-0 md:pt-8">
					<p className="mt-8 md:mt-0">
						© {new Date().getFullYear()} Sonado Studio. All rights reserved.
					</p>
					<ul className="grid grid-flow-row grid-cols-[max-content] items-center justify-center justify-items-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
						<li className="underline hover:underline-offset-2 ">
							<Link to="/">Privacy Policy</Link>
						</li>
						<li className="underline hover:underline-offset-2 ">
							<Link to="/">Cookie Settings</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}
