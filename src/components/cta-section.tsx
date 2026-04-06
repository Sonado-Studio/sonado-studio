import { ContactModal } from "@/components/global/form/contact-modal"

export const CtaSection = () => {
	return (
		<section
			id="cta-section"
			className="px-[5%] py-16 md:py-24 lg:py-28 bg-muted w-full"
		>
			<div className="container max-w-lg text-center flex gap-5 flex-col">
				<h2>Got a project in mind?</h2>
				<p>
					We partner closely with each client to deliver thoughtful,
					high-quality work. Let's collaborate.
				</p>
				<div className="mt-2">
					<ContactModal
						triggerProps={{
							label: "Contact Us",
							variant: "default",
						}}
					/>
				</div>
			</div>
		</section>
	)
}
