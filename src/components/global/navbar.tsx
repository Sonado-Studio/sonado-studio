import { Link } from "@tanstack/react-router"
import { motion } from "motion/react"
import { useEffect, useRef, useState } from "react"
import Logo from "@/assets/logos/sonado-studio-logo.svg"
import { Button } from "@/components/ui/button"

export const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const menuRef = useRef<HTMLDivElement>(null)
	const buttonRef = useRef<HTMLButtonElement>(null)

	const navLinks = [
		{
			url: "#work-section",
			title: "Work",
		},
		{
			url: "/",
			title: "Services",
		},
		{
			url: "/",
			title: "About",
		},
	]

	useEffect(() => {
		if (typeof window === "undefined") return

		const handleClickOutside = (event: MouseEvent) => {
			if (
				menuRef.current &&
				!menuRef.current.contains(event.target as Node) &&
				buttonRef.current &&
				!buttonRef.current.contains(event.target as Node)
			) {
				setIsMobileMenuOpen(false)
				buttonRef.current.focus()
			}
		}

		document.addEventListener("mousedown", handleClickOutside)
		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [])

	return (
		<nav
			id="navbar"
			className="relative z-999 mx-auto mt-5 flex w-full items-start justify-center px-[5%] md:mt-6 lg:mx-[5%] lg:w-auto lg:px-0"
		>
			<div className="flex min-h-16 w-full items-center justify-between gap-12 rounded-4xl bg-primary text-primary-foreground px-5 md:min-h-18 md:px-8 lg:w-auto">
				<Link to="/">
					<img src={Logo} alt="Sonado Studio" width={180} height={20} />
				</Link>
				<motion.div
					variants={{
						open: { height: "var(--height, 100vh)" },
						close: { height: "auto" },
					}}
					initial="close"
					exit="close"
					animate={isMobileMenuOpen ? "open" : "close"}
					className="absolute left-0 right-0 top-full w-full overflow-hidden lg:static lg:left-auto lg:right-auto lg:top-auto lg:w-auto lg:overflow-visible lg:[--height:auto]"
				>
					<motion.div
						variants={{
							open: { y: 0 },
							close: { y: "var(--translate-y, -100%)" },
						}}
						animate={isMobileMenuOpen ? "open" : "close"}
						initial="close"
						exit="close"
						transition={{ duration: 0.3 }}
						className="absolute left-0 right-0 top-0 mx-auto min-w-[200px] justify-self-center bg-primary px-[5%] text-center lg:static lg:inset-auto lg:mx-0 lg:px-0 lg:text-left lg:[--translate-y:0%] rounded-b-4xl"
					>
						<div
							ref={menuRef}
							id="main-nav-menu"
							className="flex w-full flex-col border border-t-0 p-5 md:p-8 lg:w-auto lg:flex-row lg:border-none lg:bg-none lg:p-0"
						>
							<ul className="flex w-full list-none flex-col gap-0 p-0 m-0 lg:flex-row">
								{navLinks.map((navLink) => (
									<li key={navLink.title}>
										<a
											href={navLink.url}
											className="relative block py-3 text-center text-md lg:px-4 lg:py-2 lg:text-left lg:text-base"
										>
											{navLink.title}
										</a>
									</li>
								))}
							</ul>
							<Button variant="secondary" className="block md:hidden">
								Contact
							</Button>
						</div>
					</motion.div>
				</motion.div>
				<div className="flex items-center justify-center gap-4">
					<Button variant="secondary" className="hidden md:block">
						Contact
					</Button>
					<button
						ref={buttonRef}
						type="button"
						aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
						aria-expanded={isMobileMenuOpen}
						aria-controls="main-nav-menu"
						className="-mr-2 flex size-12 flex-col items-center justify-center justify-self-end lg:hidden"
						onClick={() => setIsMobileMenuOpen((prev) => !prev)}
					>
						<motion.span
							className="my-[3px] h-0.5 w-6 bg-secondary"
							animate={isMobileMenuOpen ? "open" : "close"}
							variants={topLineVariants}
						/>
						<motion.span
							className="my-[3px] h-0.5 w-6 bg-secondary"
							animate={isMobileMenuOpen ? "open" : "close"}
							variants={middleLineVariants}
						/>
						<motion.span
							className="my-[3px] h-0.5 w-6 bg-secondary"
							animate={isMobileMenuOpen ? "open" : "close"}
							variants={bottomLineVariants}
						/>
					</button>
				</div>
			</div>
		</nav>
	)
}

const topLineVariants = {
	open: {
		translateY: 8,
		rotate: 45,
		transition: { duration: 0.3 },
	},
	close: {
		translateY: 0,
		rotate: 0,
		transition: { duration: 0.2 },
	},
}

const middleLineVariants = {
	open: {
		opacity: 0,
		transition: { duration: 0.2 },
	},
	close: {
		opacity: 1,
		transition: { duration: 0.2 },
	},
}

const bottomLineVariants = {
	open: {
		translateY: -8,
		rotate: -45,
		transition: { duration: 0.3 },
	},
	close: {
		translateY: 0,
		rotate: 0,
		transition: { duration: 0.2 },
	},
}
