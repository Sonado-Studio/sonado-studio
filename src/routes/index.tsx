import { createFileRoute } from "@tanstack/react-router"
// import { AboutSection } from "@/components/about-section"
// import { CtaSection } from "@/components/cta-section"
// import { HeaderSection } from "@/components/header-section"
// import { ProcessSection } from "@/components/process-section"
// import { ServicesSection } from "@/components/services-section"
// import { StudioSection } from "@/components/studio-section"
// import { TestimonialSection } from "@/components/testimonial-section"
// import { WorkSection } from "@/components/work-section"
import { ComingSoon } from "@/components/coming-soon"

export const Route = createFileRoute("/")({ component: App })

function App() {
	return (
		<main>
			<ComingSoon />
		</main>
		// <main className="flex flex-1 flex-col items-center justify-center text-lg">
		// 	<HeaderSection />
		// 	<WorkSection />
		// 	<TestimonialSection />
		// 	<ServicesSection />
		// 	<ProcessSection />
		// 	<AboutSection />
		// 	<StudioSection />
		// 	<CtaSection />
		// </main>
	)
}
