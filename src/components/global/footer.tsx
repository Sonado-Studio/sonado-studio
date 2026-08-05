import { Link } from "@tanstack/react-router"
import { ArrowUp } from "lucide-react"
import InstagramIcon from "@/assets/layout/footer/instagram.svg"
import LinkedInIcon from "@/assets/layout/footer/linkedin.svg"
import SonadoMark from "@/assets/layout/footer/sonado-mark.svg"
import { ContactModal } from "@/components/global/form/contact-modal"

const navigationLinks = [
	{ label: "Work", href: "#work-section" },
	{ label: "Services", href: "#services-section" },
	{ label: "About", href: "#about-section" },
]

const socialLinks = [
	{ label: "Instagram", href: "#footer", icon: InstagramIcon },
	{ label: "LinkedIn", href: "#footer", icon: LinkedInIcon },
]

const footerLinkClassName =
	"transition-opacity duration-200 hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-4 focus-visible:ring-offset-primary"

export const Footer = () => {
	return (
		<footer
			id="footer"
			className="bg-primary px-5 py-12 text-primary-foreground md:px-8 md:py-16 lg:px-16"
		>
			<div className="mx-auto max-w-7xl">
				<div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-12">
					<Link
						to="/"
						aria-label="Sonado Studio home"
						className={`justify-self-start rounded-full ${footerLinkClassName}`}
					>
						<img src={SonadoMark} alt="" className="size-14 md:size-18" />
					</Link>

					<nav aria-label="Footer navigation">
						<ul className="flex flex-wrap items-center gap-x-8 gap-y-4 lg:justify-center">
							{navigationLinks.map((link) => (
								<li key={link.label}>
									<a
										href={link.href}
										className={`text-base font-medium ${footerLinkClassName}`}
									>
										{link.label}
									</a>
								</li>
							))}
							<li>
								<ContactModal
									triggerProps={{
										label: "Contact",
										variant: "link",
										className:
											"h-auto p-0 text-base font-medium text-primary-foreground no-underline transition-opacity duration-200 hover:opacity-70 hover:no-underline",
									}}
								/>
							</li>
						</ul>
					</nav>

					<div className="flex flex-col gap-4 text-sm lg:items-end lg:text-right">
						<div className="space-y-1">
							<a
								href="mailto:hello@sonadostudio.com"
								className={footerLinkClassName}
							>
								hello@sonadostudio.com
							</a>
							<p>Based in Nairobi, creating globally</p>
						</div>
						<ul className="flex items-center gap-3" aria-label="Social links">
							{socialLinks.map((link) => (
								<li key={link.label}>
									<a
										href={link.href}
										aria-label={link.label}
										className={`flex size-8 items-center justify-center ${footerLinkClassName}`}
									>
										<img src={link.icon} alt="" className="size-4.5" />
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="mt-12 border-t border-primary-foreground/60 pt-8 lg:mt-5">
					<div className="flex flex-col items-center justify-center gap-4 text-center text-sm md:flex-row md:gap-6">
						<p>
							© {new Date().getFullYear()} Sonado Studio. All rights reserved.
						</p>
						<a
							href="#footer"
							className={`underline underline-offset-2 ${footerLinkClassName}`}
						>
							Privacy Policy
						</a>
						<a
							href="#footer"
							className={`underline underline-offset-2 ${footerLinkClassName}`}
						>
							Cookie Settings
						</a>
					</div>

					<a
						href="#navbar"
						className={`mx-auto mt-5 flex min-h-13 w-fit items-center justify-center gap-2 text-sm ${footerLinkClassName}`}
					>
						<span>Back to top</span>
						<span className="flex size-6 items-center justify-center rounded-full border border-primary-foreground">
							<ArrowUp
								aria-hidden="true"
								className="size-3"
								strokeWidth={1.5}
							/>
						</span>
					</a>
				</div>
			</div>
		</footer>
	)
}
