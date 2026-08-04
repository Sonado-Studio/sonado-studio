"use client"

import { Link } from "@tanstack/react-router"
import { MenuIcon, XIcon } from "lucide-react"
import { useState } from "react"
import FacebookIcon from "@/assets/layout/icons/facebook.svg"
import InstagramIcon from "@/assets/layout/icons/instagram.svg"
import LinkedInIcon from "@/assets/layout/icons/linkedin.svg"
import XSocialIcon from "@/assets/layout/icons/x.svg"
import YouTubeIcon from "@/assets/layout/icons/youtube.svg"
import LogoDark from "@/assets/logos/sonado-studio-logo-dark.svg"
import LogoLight from "@/assets/logos/sonado-studio-logo.svg"
import { ContactModal } from "@/components/global/form/contact-modal"
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
	{ url: "#work-section", title: "Work" },
	{ url: "#services-section", title: "Services" },
	{ url: "#about-section", title: "About" },
]

const socialIcons = [
	{ label: "Facebook", src: FacebookIcon },
	{ label: "Instagram", src: InstagramIcon },
	{ label: "X", src: XSocialIcon },
	{ label: "LinkedIn", src: LinkedInIcon },
	{ label: "YouTube", src: YouTubeIcon },
]

export const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	const closeMobileMenu = () => setIsMobileMenuOpen(false)

	return (
		<nav
			id="navbar"
			aria-label="Main navigation"
			className="relative z-40 w-screen bg-background lg:absolute lg:inset-x-0 lg:top-0 lg:bg-primary/20"
		>
			<div className="flex h-16 w-full items-center justify-between pl-5 pr-3 lg:h-18 lg:px-16">
				<Link
					to="/"
					aria-label="Sonado Studio home"
					className="shrink-0 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
				>
					<picture>
						<source media="(min-width: 1024px)" srcSet={LogoLight} />
						<img src={LogoDark} alt="Sonado Studio" className="h-5 w-[182px]" />
					</picture>
				</Link>

				<div className="hidden items-center gap-4 lg:flex">
					<ul className="flex items-center gap-8 text-base font-medium leading-6 text-primary-foreground">
						{navLinks.map((navLink) => (
							<li key={navLink.title}>
								<a
									href={navLink.url}
									className="rounded-sm transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
								>
									{navLink.title}
								</a>
							</li>
						))}
					</ul>
					<ContactModal
						triggerProps={{
							label: "Contact",
							variant: "default",
							className: "h-10 rounded-sm px-5 py-2",
						}}
					/>
				</div>

				<Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
					<SheetTrigger
						className="flex size-12 items-center justify-center lg:hidden"
						aria-label="Open navigation menu"
					>
						<MenuIcon aria-hidden="true" className="size-6" />
					</SheetTrigger>
					<SheetContent
						side="right"
						showCloseButton={false}
						className="inset-0 size-full w-screen border-none bg-background p-0 shadow-none sm:w-screen data-[side=right]:w-screen"
					>
						<SheetTitle className="sr-only">Navigation menu</SheetTitle>

						<div className="flex h-16 shrink-0 items-center justify-between pl-5 pr-3">
							<Link
								to="/"
								aria-label="Sonado Studio home"
								onClick={closeMobileMenu}
								className="focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
							>
								<img
									src={LogoDark}
									alt="Sonado Studio"
									className="h-5 w-[182px]"
								/>
							</Link>
							<button
								type="button"
								aria-label="Close navigation menu"
								className="flex size-12 items-center justify-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
								onClick={closeMobileMenu}
							>
								<XIcon aria-hidden="true" className="size-6" />
							</button>
						</div>

						<div className="flex min-h-0 flex-1 px-5 py-12">
							<div className="flex min-h-0 w-full flex-1 flex-col items-start justify-between overflow-y-auto">
								<ul className="flex w-full flex-col gap-8 font-display text-[2.5rem] font-semibold leading-[1.2] tracking-[-0.015em] text-foreground">
									{navLinks.map((navLink) => (
										<li key={navLink.title}>
											<a
												href={navLink.url}
												onClick={closeMobileMenu}
												className="block w-full rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
											>
												{navLink.title}
											</a>
										</li>
									))}
									<li>
										<ContactModal
											triggerProps={{
												label: "Contact",
												variant: "link",
												className:
													"h-auto justify-start p-0 font-display text-[2.5rem] font-semibold leading-[1.2] tracking-[-0.015em] text-foreground no-underline hover:no-underline",
											}}
										/>
									</li>
								</ul>

								<div className="flex w-full flex-col items-start gap-6 pt-12 text-sm leading-[1.5] text-foreground">
									<div className="flex flex-col gap-1">
										<a
											href="mailto:hello@sonadostudio.com"
											className="rounded-sm underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
										>
											hello@sonadostudio.com
										</a>
										<p>Based in Nairobi, Creating Globally.</p>
									</div>

									<ul
										aria-label="Sonado Studio social platforms"
										className="flex items-center gap-3"
									>
										{socialIcons.map((socialIcon) => (
											<li key={socialIcon.label}>
												<img
													src={socialIcon.src}
													alt={socialIcon.label}
													className="size-6"
												/>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	)
}
