import ArrowForwardIcon from "@/assets/layout/cta/arrow-forward.svg"
import { ContactModal } from "@/components/global/form/contact-modal"

export const CtaSection = () => {
	return (
		<section
			id="cta-section"
			aria-labelledby="cta-heading"
			className="w-full bg-muted px-5 py-16 md:px-8 md:py-24 lg:px-16 lg:py-28"
		>
			<div className="mx-auto w-full max-w-7xl">
				<div className="rounded-sm border border-primary bg-primary p-6 text-primary-foreground md:p-8 lg:p-12">
					<div className="flex flex-col gap-12 md:gap-16">
						<div>
							<h2
								id="cta-heading"
								className="text-2xl font-normal leading-[1.3] tracking-[-0.03em] md:text-[1.75rem] lg:text-[2rem]"
							>
								Start with a discovery call
							</h2>
							<div className="mt-4.5 text-base font-medium leading-6 md:text-lg md:leading-7 lg:max-w-2xl text-pretty">
								<p>
									Every project begins with a conversation to understand your
									goals, answer questions, and decide whether Sonado Studio is
									the right fit for your business.
								</p>
							</div>
						</div>

						<ContactModal
							triggerProps={{
								label: (
									<>
										<span className="block w-full font-display text-[clamp(2.25rem,5.3vw,4.75rem)] font-semibold leading-[1.2] tracking-[-0.015em] md:min-w-0">
											Tell us about your project
										</span>
										<span className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-primary-foreground sm:size-12 sm:border-3 md:size-14 lg:size-18 xl:size-20 lg:border-5 self-center">
											<img
												src={ArrowForwardIcon}
												alt=""
												className="size-5 md:size-7 lg:size-10"
											/>
										</span>
									</>
								),
								variant: "default",
								className:
									"flex h-auto w-full flex-col items-stretch gap-6 rounded-none border-0 bg-transparent px-0 py-0 md:text-left text-primary-foreground whitespace-normal shadow-none transition-[padding,transform] duration-250 hover:bg-transparent hover:px-4 focus-visible:px-4 active:scale-[0.99] md:flex-row md:items-end md:justify-between",
							}}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
