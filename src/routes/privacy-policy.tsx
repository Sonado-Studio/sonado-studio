import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/privacy-policy")({
	component: PrivacyPolicyPage,
	head: () => ({
		meta: [
			{ title: "Privacy Policy | Sonado Studio" },
			{
				name: "description",
				content:
					"Learn how Sonado Studio collects, uses, and protects personal information submitted through this website.",
			},
		],
	}),
})

const sectionHeadingClassName =
	"font-display text-2xl font-semibold leading-tight tracking-[-0.025em] md:text-3xl"

function PrivacyPolicyPage() {
	return (
		<main className="w-full bg-background px-5 py-16 text-foreground md:px-8 md:py-24 lg:px-16 lg:py-28">
			<article className="mx-auto w-full max-w-4xl">
				<header className="border-b border-border pb-10 md:pb-14">
					<p className="font-sans text-sm font-medium uppercase tracking-[0.02em] text-accent">
						Legal
					</p>
					<h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-7xl">
						Privacy Policy
					</h1>
					<p className="mt-6 text-base text-muted-foreground">
						Last updated: August 2026
					</p>
				</header>

				<div className="space-y-10 pt-10 text-base leading-7 md:space-y-16 md:pt-14 md:text-lg md:leading-8">
					<p>
						Sonado Studio respects your privacy and is committed to handling
						personal information responsibly. This Privacy Policy explains what
						information we collect through this website and how we use it.
					</p>

					<section aria-labelledby="privacy-who-we-are" className="space-y-4">
						<h2 id="privacy-who-we-are" className={sectionHeadingClassName}>
							Who we are
						</h2>
						<p>
							This website is operated by Sonado Studio, a creative and
							technology studio based in Nairobi, Kenya.
						</p>
						<address className="flex flex-col not-italic">
							<a
								href="https://www.sonadostudio.com/"
								className="w-fit underline underline-offset-4"
							>
								www.sonadostudio.com
							</a>
							<a
								href="mailto:hello@sonadostudio.com"
								className="w-fit underline underline-offset-4"
							>
								hello@sonadostudio.com
							</a>
						</address>
					</section>

					<section
						aria-labelledby="privacy-information-we-collect"
						className="space-y-4"
					>
						<h2
							id="privacy-information-we-collect"
							className={sectionHeadingClassName}
						>
							Information we collect
						</h2>
						<p>
							We may collect information that you choose to provide when
							submitting a project enquiry, including your:
						</p>
						<ul className="list-disc space-y-1 pl-6 marker:text-accent">
							<li>Name</li>
							<li>Email address</li>
							<li>Selected services</li>
							<li>Estimated project investment</li>
							<li>Project details</li>
							<li>Referral source</li>
						</ul>
						<p>
							We use this information only to review and respond to your
							enquiry, communicate with you about a potential project, and
							manage any resulting client relationship.
						</p>
						<p>
							Our form provider or spam-protection tools may also process
							technical information such as your IP address for security and
							spam prevention.
						</p>
					</section>

					<section
						aria-labelledby="privacy-website-analytics"
						className="space-y-4"
					>
						<h2
							id="privacy-website-analytics"
							className={sectionHeadingClassName}
						>
							Website analytics
						</h2>
						<p>
							We use Google Analytics to understand how visitors use our
							website, such as which pages are viewed and how people navigate
							the site. Google Analytics may process information about your
							browser, device and activity on the website and may use cookies or
							similar technologies.
						</p>
						<p>
							Analytics cookies are managed through our CookieYes consent banner
							where consent is required.
						</p>
					</section>

					<section aria-labelledby="privacy-cookies" className="space-y-4">
						<h2 id="privacy-cookies" className={sectionHeadingClassName}>
							Cookies
						</h2>
						<p>
							Our website uses cookies and similar technologies for essential
							website functionality and, where you choose to allow them,
							analytics.
						</p>
						<p>
							You can accept, reject or manage non-essential cookies through the
							CookieYes banner and change your preferences later using the
							cookie settings available on the website.
						</p>
					</section>

					<section
						aria-labelledby="privacy-third-party-services"
						className="space-y-4"
					>
						<h2
							id="privacy-third-party-services"
							className={sectionHeadingClassName}
						>
							Third-party services
						</h2>
						<p>
							We use selected third-party services to operate and understand our
							website, including Google Analytics and CookieYes. These providers
							may process limited information in accordance with their own
							privacy policies and applicable data-protection requirements.
						</p>
						<p>We do not sell your personal information.</p>
					</section>

					<section aria-labelledby="privacy-retention" className="space-y-4">
						<h2 id="privacy-retention" className={sectionHeadingClassName}>
							How long we keep your information
						</h2>
						<p>
							Information submitted through our enquiry form is retained only
							for as long as reasonably necessary to respond to your enquiry,
							manage any resulting business relationship, or meet applicable
							administrative, legal or security requirements.
						</p>
					</section>

					<section aria-labelledby="privacy-rights" className="space-y-4">
						<h2 id="privacy-rights" className={sectionHeadingClassName}>
							Your rights
						</h2>
						<p>
							Depending on applicable law, you may have the right to request
							access to, correction of, or deletion of personal information we
							hold about you, or to object to certain uses of that information.
							Kenya&apos;s Data Protection Act provides rights to individuals
							regarding the use of their personal data.
						</p>
						<p>
							To make a request, email{" "}
							<a
								href="mailto:hello@sonadostudio.com"
								className="underline underline-offset-4"
							>
								hello@sonadostudio.com
							</a>
							.
						</p>
					</section>

					<section aria-labelledby="privacy-changes" className="space-y-4">
						<h2 id="privacy-changes" className={sectionHeadingClassName}>
							Changes to this policy
						</h2>
						<p>
							We may update this Privacy Policy from time to time. Any changes
							will be reflected on this page together with an updated “Last
							updated” date.
						</p>
					</section>
				</div>
			</article>
		</main>
	)
}
