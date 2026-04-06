export const AboutSection = () => {
	const image = {
		src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
		alt: "Rehema Wachira",
	}

	return (
		<section id="about-section" className="px-[5%] py-16 md:py-24 lg:py-28">
			<div className="container">
				<div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
					<div className="order-2 md:order-1">
						<img
							src={image.src}
							className="w-full object-cover rounded-2xl"
							alt={image.alt}
						/>
					</div>
					<div className="order-1 md:order-2 space-y-5">
						<h2>Hello 👋🏾 I’m Rehema</h2>
						<div className="space-y-5 max-w-prose">
							<p>
								I’m a design engineer and the founder of Sonado Studio. I
								started Sonado Studio with the belief that the best work happens
								when creative thinking and technical execution are closely
								connected, and when the process feels collaborative, thoughtful,
								and human.
							</p>
							<p>
								My background spans software engineering, product design, and
								marketing, which allows me to work comfortably across strategy,
								design, and implementation.
							</p>
							<p>
								At Sonado, I work hands-on with clients to create distinctive
								brands, marketing websites, and digital products that are
								designed with intention and built to last.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
