export const StudioSection = () => {
	return (
		<section id="studio-section" className="px-[5%] py-16 md:py-24 lg:py-28">
			<div className="container">
				<div className="grid grid-cols-1 items-start justify-between gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
					<h2>
						A small studio
						<br />
						<span className="w-1 md:h-16 h-12 self-stretch bg-primary inline-block mt-4 aria-hidden" />
						<br />
						expanded by collaboration
					</h2>
					<div className="space-y-5 max-w-prose">
						<p>
							Sonado Studio is intentionally small, but never limited in
							ambition. When projects call for it, I collaborate with a trusted
							network of copywriters, developers, and illustrators to form a
							tailored creative team around your project.
						</p>
						<p>
							This studio-plus-partners model means that you still work closely
							with me and I can bring in the right expertise when it adds real
							value without the overhead or complexity of a large agency.{" "}
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
