import { createFileRoute } from "@tanstack/react-router"
import { AboutSection } from "@/components/about-section"
import { CtaSection } from "@/components/cta-section"
import { FaqSection } from "@/components/faq-section"
import { HeaderSection } from "@/components/header-section"
import { IntroSection } from "@/components/intro-section"
import { ProcessSection } from "@/components/process-section"
import { ServicesSection } from "@/components/services-section"
import { StudioSection } from "@/components/studio-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { WorkSection } from "@/components/work-section"
// import { ComingSoon } from "@/components/coming-soon"

export const Route = createFileRoute("/")({ component: App })

function App() {
	return (
		// <main>
		// 	<ComingSoon />
		// </main>
		<main className="flex flex-1 flex-col items-center justify-center text-lg bg-background">
			<HeaderSection />
			<IntroSection />
			<WorkSection />
			<TestimonialSection />
			<ServicesSection />
			<ProcessSection />
			<AboutSection />
			<StudioSection />
			<FaqSection />
			<CtaSection />
		</main>
	)
}
