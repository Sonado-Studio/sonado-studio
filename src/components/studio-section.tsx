import StudioBackgroundDesktop from "@/assets/layout/studio/about-studio-background.webp"
import StudioBackgroundMobile from "@/assets/layout/studio/about-studio-background-mobile.webp"

export const StudioSection = () => {
	return (
		<section
			id="studio-section"
			aria-labelledby="studio-heading"
			className="relative w-full overflow-hidden px-5 py-16 md:px-8 md:py-24 lg:px-16 lg:py-28"
		>
			<picture className="absolute inset-0 block">
				<source media="(min-width: 768px)" srcSet={StudioBackgroundDesktop} />
				<img
					src={StudioBackgroundMobile}
					alt=""
					className="size-full object-cover object-center"
					loading="lazy"
					decoding="async"
				/>
			</picture>

			<div className="relative mx-auto w-full max-w-7xl">
				<div className="rounded-sm border border-primary bg-primary/90 p-6 text-primary-foreground backdrop-blur-[2px] md:p-8 lg:p-12">
					<div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-20">
						<h2
							id="studio-heading"
							className="text-[2rem] leading-[1.2] tracking-[-0.015em] md:text-[2.5rem]"
						>
							Small by design
						</h2>

						<div className="flex flex-col gap-6 text-base leading-6 md:text-lg md:leading-7">
							<p>
								Sonado Studio is intentionally boutique so every client receives
								direct collaboration and focused attention throughout the project.
							</p>
							<p>
								When a project calls for additional expertise, I bring in a trusted
								network of copywriters, developers, and other creative specialists
								to build the right team around your project while remaining your
								primary point of contact from start to launch.
							</p>
							<p>
								The goal is simple: exceptional work, clear communication, and a
								studio experience that feels as thoughtful as the final result.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
