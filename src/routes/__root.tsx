import { TanStackDevtools } from "@tanstack/react-devtools"
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { Footer } from "@/components/global/footer"
import { Navbar } from "@/components/global/navbar"

import appCss from "../styles.css?url"

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				name: "description",
				content:
					"Sonado Studio is a digital design and development studio helping ambitious businesses build distinctive brands, websites, and digital products.",
			},
			{
				property: "og:type",
				content: "website",
			},
			{
				property: "og:title",
				content: "Sonado Studio",
			},
			{
				property: "og:description",
				content:
					"A founder-led creative and technology studio creating distinctive brands and carefully crafted websites.",
			},
			{
				title: "Sonado Studio",
			},
			{
				property: "og:image",
				content: "/open-graph.png",
			},
			{
				property: "og:image:width",
				content: "1200",
			},
			{
				property: "og:image:height",
				content: "668",
			},
			{
				property: "og:image:alt",
				content: "Sonado Studio — thoughtfully designed, beautifully built.",
			},
			{
				name: "twitter:card",
				content: "summary_large_image",
			},
			{
				name: "twitter:title",
				content: "Sonado Studio",
			},
			{
				name: "twitter:description",
				content:
					"A founder-led creative and technology studio creating distinctive brands and carefully crafted websites.",
			},
			{
				name: "twitter:image",
				content: "/open-graph.png",
			},
			{
				name: "apple-mobile-web-app-title",
				content: "Sonado Studio",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),

	shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			className="relative bg-primary text-foreground m-0 font-sans text-base antialiased"
		>
			<head>
				<HeadContent />
			</head>
			<body>
				<Navbar />
				{children}
				<Footer />
				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	)
}
