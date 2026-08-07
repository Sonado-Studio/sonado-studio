import MobileWordmark from "@/assets/layout/hero/sonado-studio-wordmark-mobile.svg"
import SonadoWordmark from "@/assets/layout/hero/sonado-wordmark.svg"
import StudioWordmark from "@/assets/layout/hero/studio-wordmark.svg"
import HeroScreen1 from "@/assets/layout/hero/screens/hero-screen-1.webp"
import HeroScreen2 from "@/assets/layout/hero/screens/hero-screen-2.webp"
import HeroScreen3 from "@/assets/layout/hero/screens/hero-screen-3.webp"
import HeroScreen4 from "@/assets/layout/hero/screens/hero-screen-4.webp"
import HeroScreen5 from "@/assets/layout/hero/screens/hero-screen-5.webp"
import HeroScreen6 from "@/assets/layout/hero/screens/hero-screen-6.webp"
import HeroScreen7 from "@/assets/layout/hero/screens/hero-screen-7.webp"
import HeroScreen8 from "@/assets/layout/hero/screens/hero-screen-8.webp"

const heroScreens = [
	HeroScreen1,
	HeroScreen2,
	HeroScreen3,
	HeroScreen4,
	HeroScreen5,
	HeroScreen6,
	HeroScreen7,
	HeroScreen8,
]

export const HeaderSection = () => {
	return (
		<section
			id="header-section"
			aria-labelledby="hero-heading"
			className="relative grid min-h-[calc(100svh-4rem)] w-full grid-rows-[minmax(12rem,27fr)_73fr] overflow-clip bg-primary lg:h-[min(900px,calc(100svh-4.5rem))] lg:min-h-175 lg:grid-cols-2 lg:grid-rows-1"
		>
			<div className="px-5 py-2 lg:px-16">
				<h1
					id="hero-heading"
					className="font-sans text-base font-semibold leading-6 tracking-normal text-primary-foreground lg:font-display lg:text-2xl lg:leading-[1.4] lg:tracking-[-0.03em] text-pretty"
				>
					Thoughtfully designed. Beautifully built.
				</h1>
			</div>

			<div
				aria-label="A rotating selection of Sonado Studio work"
				className="relative min-h-0 overflow-hidden bg-[#858585]"
				role="img"
			>
				<img
					src={HeroScreen1}
					alt=""
					className="absolute inset-0 size-full object-cover object-center"
					fetchPriority="high"
					decoding="async"
				/>

				{heroScreens.map((screen, index) => (
					<img
						key={screen}
						src={screen}
						alt=""
						className="hero-screen-crossfade absolute inset-0 size-full object-cover object-center"
						style={{ animationDelay: `${index * 2.5}s` }}
						loading={index === 0 ? "eager" : "lazy"}
						decoding="async"
					/>
				))}
			</div>

			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-x-0 bottom-0 lg:bottom-4.25"
			>
				<img src={MobileWordmark} alt="" className="h-auto w-full lg:hidden" />

				<div className="hidden grid-cols-2 lg:grid">
					<img src={SonadoWordmark} alt="" className="h-auto w-full" />
					<img src={StudioWordmark} alt="" className="h-auto w-full" />
				</div>
			</div>
		</section>
	)
}
