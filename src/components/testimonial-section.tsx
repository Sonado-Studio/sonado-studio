import theGardenLogo from "@/assets/layout/client-logos/the-garden-logo-colour.svg"

export const TestimonialSection = () => {
	return (
		<section className="px-[5%] py-16 md:py-24 lg:py-28 bg-muted w-full">
			<div className="container">
				<div className="mx-auto w-full max-w-3xl text-center flex flex-col gap-8">
					<blockquote className="text-lg md:text-xl text-left font-display">
						Rehema is a dream to work with! For our project, she combined her
						refined technical expertise and keen eye for aesthetics to create a
						clean, seamless and memorable end-user experience. Once she begins
						working with you, she is committed to your success and producing a
						product that you will be happy with.
					</blockquote>
					<div className="w-full h-px self-stretch bg-border" />
					<div className="flex w-full items-center justify-between gap-2 md:w-auto md:flex-row text-left">
						<div>
							<p className="font-semibold">Alisha</p>
							<p className="text-base">Founder, The Garden</p>
						</div>
						<div>
							<img
								src={theGardenLogo}
								alt="The Garden Logo"
								className="md:max-h-12 max-h-8"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
