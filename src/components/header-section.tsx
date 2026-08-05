import MobileWordmark from "@/assets/layout/hero/sonado-studio-wordmark-mobile.svg"
import SonadoWordmark from "@/assets/layout/hero/sonado-wordmark.svg"
import StudioWordmark from "@/assets/layout/hero/studio-wordmark.svg"

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
				aria-label="Video coming soon"
				className="min-h-0 bg-[#858585]"
				role="img"
			/>

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
