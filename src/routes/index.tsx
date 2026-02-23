import { createFileRoute } from "@tanstack/react-router"
import { HeaderSection } from "@/components/header-section"
import { WorkSection } from "@/components/work-section"

export const Route = createFileRoute("/")({ component: App })

function App() {
	return (
		<main className="flex flex-1 flex-col items-center justify-center text-lg">
			<HeaderSection />
			<WorkSection />
		</main>
	)
}
