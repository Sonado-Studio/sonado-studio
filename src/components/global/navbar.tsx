"use client"

import { Link } from "@tanstack/react-router"
import { MenuIcon, XIcon } from "lucide-react"
import { useEffect, useState } from "react"
import LogoIcon from "@/assets/logos/sonado-studio-icon.svg"
import LogoLight from "@/assets/logos/sonado-studio-logo.svg"
import { ContactModal } from "@/components/global/form/contact-modal"
import {
	FacebookIcon,
	InstagramIcon,
	LinkedInIcon,
	XIcon as XSocialIcon,
	YouTubeIcon,
} from "@/components/global/social-icons"
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
	{ label: "Facebook", icon: FacebookIcon },
	{ label: "Instagram", icon: InstagramIcon },
	{ label: "X", icon: XSocialIcon },
	{ label: "LinkedIn", icon: LinkedInIcon },
	{ label: "YouTube", icon: YouTubeIcon },
]

export const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [isHeroInView, setIsHeroInView] = useState(true)

	useEffect(() => {
		const hero = document.getElementById("header-section")

		if (!hero) {
			setIsHeroInView(false)
			return
		}

		const observer = new IntersectionObserver(
			([entry]) => setIsHeroInView(entry.isIntersecting),
			{ threshold: 0 },
		)

		observer.observe(hero)
		return () => observer.disconnect()
	}, [])

	const closeMobileMenu = () => setIsMobileMenuOpen(false)

	return (
		<nav
			id="navbar"
			aria-label="Main navigation"
			className="sticky inset-x-0 top-0 z-40 w-full bg-primary/95 text-primary-foreground backdrop-blur-sm"
		>
			<div className="flex h-16 w-full items-center justify-between pl-5 pr-3 lg:h-18 lg:px-16">
				<Link
					to="/"
					aria-label="Sonado Studio home"
					className="shrink-0 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 lg:hidden"
				>
					<img src={LogoLight} alt="Sonado Studio" className="h-5 w-45.5" />
				</Link>

				<Link
					to="/"
					aria-label="Sonado Studio home"
					className="relative hidden h-10 w-45.5 shrink-0 transition-opacity duration-300 motion-reduce:transition-none focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 lg:block"
				>
					<img
						src={LogoIcon}
						alt=""
						className={`absolute top-1/2 left-0 size-10 -translate-y-1/2 transition-opacity duration-300 motion-reduce:transition-none ${
							isHeroInView ? "opacity-100" : "opacity-0"
						}`}
					/>
					<img
						src={LogoLight}
						alt=""
						className={`absolute top-1/2 left-0 h-5 w-45.5 -translate-y-1/2 transition-opacity duration-300 motion-reduce:transition-none ${
							isHeroInView ? "opacity-0" : "opacity-100"
						}`}
					/>
				</Link>

				<div className="hidden items-center gap-4 lg:flex">
					<ul className="flex items-center gap-8 text-base font-medium leading-6 text-primary-foreground">
						{navLinks.map((navLink) => (
							<li key={navLink.title}>
								<a
									href={navLink.url}
									className="rounded-sm bg-transparent px-2.5 py-1 transition-colors duration-300 ease-out hover:bg-primary-foreground/15 focus-visible:bg-primary-foreground/15 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
								>
									{navLink.title}
								</a>
							</li>
						))}
					</ul>
					<ContactModal
						triggerProps={{
							label: "Contact",
							variant: "link",
							className:
								"h-auto rounded-sm bg-transparent px-2.5 py-1 text-base font-medium text-primary-foreground no-underline transition-colors duration-300 ease-out hover:bg-primary-foreground/15 hover:no-underline focus-visible:bg-primary-foreground/15 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary",
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
						className="inset-0 size-full w-screen border-none bg-primary p-0 text-primary-foreground shadow-none sm:w-screen data-[side=right]:w-screen"
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
									src={LogoLight}
									alt="Sonado Studio"
									className="h-5 w-45.5"
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
								<ul className="flex w-full flex-col gap-8 font-display text-[2.5rem] font-semibold leading-[1.2] tracking-[-0.015em] text-primary-foreground">
									{navLinks.map((navLink) => (
										<li key={navLink.title}>
											<a
												href={navLink.url}
												onClick={closeMobileMenu}
												className="block w-fit rounded-sm bg-transparent px-2.5 py-1 transition-colors duration-300 ease-out hover:bg-primary-foreground/15 focus-visible:bg-primary-foreground/15 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
													"h-auto justify-start rounded-sm bg-transparent px-2.5 py-1 font-display text-[2.5rem] font-semibold leading-[1.2] tracking-[-0.015em] text-primary-foreground no-underline transition-colors duration-300 ease-out hover:bg-primary-foreground/15 hover:no-underline focus-visible:bg-primary-foreground/15 motion-reduce:transition-none",
											}}
										/>
									</li>
								</ul>

								<div className="flex w-full flex-col items-start gap-6 pt-12 text-sm leading-normal text-primary-foreground">
									<div className="flex flex-col gap-1">
										<a
											href="mailto:hello@sonadostudio.com"
											className="rounded-sm underline hover:underline-offset-2 focus-visible:bg-primary-foreground/15 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
										>
											hello@sonadostudio.com
										</a>
										<p>Based in Nairobi, Creating Globally.</p>
									</div>

									<ul
										aria-label="Sonado Studio social platforms"
										className="flex items-center gap-3"
									>
										{socialIcons.map(({ label, icon: Icon }) => (
											<li key={label}>
												<Icon
													aria-label={label}
													className="size-6 text-primary-foreground"
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
