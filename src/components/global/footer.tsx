import { Link } from "@tanstack/react-router"
import { ArrowUp } from "lucide-react"
import SonadoMark from "@/assets/logos/sonado-studio-icon.svg"
import { ContactModal } from "@/components/global/form/contact-modal"
import { socialLinks } from "@/data/social-profiles"

const navigationLinks = [
	{ label: "Work", href: "#work-section" },
	{ label: "Services", href: "#services-section" },
	{ label: "About", href: "#about-section" },
]

const footerFocusClassName =
	"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-4 focus-visible:ring-offset-primary"

const footerTextLinkClassName = `${footerFocusClassName} rounded-sm bg-transparent px-2.5 py-1 transition-colors duration-300 ease-out hover:bg-primary-foreground/15 focus-visible:bg-primary-foreground/15 motion-reduce:transition-none`

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
						className={`justify-self-start rounded-full ${footerFocusClassName}`}
					>
						<img src={SonadoMark} alt="" className="size-14 md:size-18" />
					</Link>

					<nav aria-label="Footer navigation">
						<ul className="flex flex-wrap items-center gap-x-2 md:gap-x-8 gap-y-4 lg:justify-center">
							{navigationLinks.map((link) => (
								<li key={link.label}>
									<a
										href={link.href}
										className={`text-base font-medium ${footerTextLinkClassName}`}
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
											"h-auto rounded-sm bg-transparent px-2.5 py-1 text-base font-medium text-primary-foreground no-underline transition-colors duration-300 ease-out hover:bg-primary-foreground/15 hover:no-underline focus-visible:bg-primary-foreground/15 motion-reduce:transition-none",
									}}
								/>
							</li>
						</ul>
					</nav>

					<div className="flex flex-col gap-4 text-sm lg:items-end lg:text-right">
						<div className="space-y-1">
							<a
								href="mailto:hello@sonadostudio.com"
								className="hover:underline hover:underline-offset-2"
							>
								hello@sonadostudio.com
							</a>
							<p>Based in Nairobi → Creating globally</p>
						</div>
						<ul className="flex items-center gap-3" aria-label="Social links">
							{socialLinks.map(({ label, href, icon: Icon }) => (
								<li key={label}>
									<a
										href={href}
										target="_blank"
										rel="noopener"
										className={`flex size-8 items-center justify-center ${footerFocusClassName}`}
									>
										<span className="sr-only">{label}</span>
										<Icon
											aria-hidden="true"
											className="size-4.5 text-primary-foreground"
										/>
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="mt-12 border-t border-primary-foreground/60 pt-8 lg:mt-5">
					<div className="flex flex-col items-center justify-between gap-4 text-center text-sm md:flex-row md:gap-2">
						<p>
							© {new Date().getFullYear()} Sonado Studio. All rights reserved.
						</p>
						<div>
							<Link to="/privacy-policy" className={footerTextLinkClassName}>
								Privacy Policy
							</Link>
							<a
								href="#footer"
								className={`cky-banner-element ${footerTextLinkClassName}`}
							>
								Cookie Settings
							</a>
						</div>
					</div>

					<a
						href="#page-top"
						className={`mx-auto mt-5 flex min-h-13 w-fit items-center justify-center gap-2 text-sm ${footerTextLinkClassName}`}
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
