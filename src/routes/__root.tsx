import { TanStackDevtools } from "@tanstack/react-devtools"
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { GoogleAnalytics } from "tanstack-router-ga4"
import HeroScreen1 from "@/assets/layout/hero/screens/hero-screen-1.webp"
import { Footer } from "@/components/global/footer"
import { Navbar } from "@/components/global/navbar"

import appCss from "../styles.css?url"

const GA_MEASUREMENT_ID = "G-QNDXP5PPHK"

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
				content: "584",
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
			{
				rel: "preload",
				as: "image",
				href: HeroScreen1,
				fetchPriority: "high",
			},
		],
		scripts: [
			{
				id: "google-consent-defaults",
				children: `
          window.dataLayer = window.dataLayer || [];

          function gtag() {
            dataLayer.push(arguments);
          }

          gtag("consent", "default", {
            ad_storage: "denied",
            ad_user_data: "denied",
            ad_personalization: "denied",
            analytics_storage: "denied",
            functionality_storage: "denied",
            personalization_storage: "denied",
            security_storage: "granted",
            wait_for_update: 2000
          });

          gtag("set", "ads_data_redaction", true);
          gtag("set", "url_passthrough", true);
        `,
			},
			{
				id: "google-analytics",
				async: true,
				src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
			},
			{
				id: "cookieyes",
				src: "https://cdn-cookieyes.com/client_data/655147302848bc3446a599f58aa3c37c/script.js",
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
			<body id="page-top" tabIndex={-1}>
				<GoogleAnalytics measurementId={GA_MEASUREMENT_ID} deferred={false} />

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
