import DesignCodeBadge from "@/assets/layout/about/design-code-badge.svg"
import RehemaPortrait from "@/assets/layout/about/rehema-wachira.webp"

export const AboutSection = () => {
	return (
		<section
			id="about-section"
			aria-labelledby="about-heading"
			className="w-full bg-primary px-5 py-16 text-primary-foreground md:px-8 md:py-24 lg:px-16 lg:py-28"
		>
			<div className="mx-auto w-full max-w-7xl">
				<p className="font-sans text-base font-medium leading-6 text-accent">
					OUR STUDIO
				</p>

				<div className="mt-12 grid grid-cols-1 items-center gap-16 md:mt-16 lg:mt-20 lg:grid-cols-2 lg:gap-20">
					<div className="max-w-xl">
						<h2
							id="about-heading"
							className="text-[2rem] leading-[1.2] tracking-[-0.015em] md:text-[2.5rem]"
						>
							Hello 👋🏾 I’m Rehema
						</h2>

						<div className="mt-6 flex flex-col gap-6 text-base leading-6 md:text-lg md:leading-7">
							<p>I’m the founder and creative director at Sonado Studio.</p>
							<p>
								I started the studio with a simple belief: the best digital
								experiences happen when strategy, design, and technology work
								together and when the process feels collaborative, thoughtful, and
								genuinely human.
							</p>
							<p>
								With a background in software engineering, product design, and
								marketing, I work hands-on with clients to create distinctive
								brands, carefully crafted websites, and digital products that are
								designed with intention and built to last.
							</p>
						</div>
					</div>

					<div className="relative mx-auto w-full max-w-[430px] pb-4 pr-4 sm:pb-6 sm:pr-[30px]">
						<div className="aspect-square w-full max-w-100 overflow-hidden rounded-full">
							<img
								src={RehemaPortrait}
								alt="Rehema Wachira, founder and creative director of Sonado Studio"
								className="size-full object-cover object-center"
								loading="lazy"
								decoding="async"
							/>
						</div>

						<div className="absolute right-0 bottom-0 flex size-[clamp(6.5rem,30vw,9.375rem)] items-center justify-center">
							<img
								src={DesignCodeBadge}
								alt=""
								className="absolute inset-0 size-full"
							/>
							<p className="relative z-10 whitespace-nowrap font-sans text-xs font-medium leading-6 text-primary-foreground sm:text-base">
								Design &amp; Code
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
