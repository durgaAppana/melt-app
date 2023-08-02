import Head from "next/head";
import { DefaultSeo } from "next-seo";

export default function AppLayout({ children }) {
	const SEO = {
		titleTemplate: "%s | Titan Eye Plus",
		defaultTitle: "Titan Eye Plus",
		description:
			"Buy latest eyewear with best price from leading eyewear company in India. Explore the latest deals on eyewear like sunglasses, glasses and lenses.",
	};
	return (
		<>
			<DefaultSeo {...SEO} />
			<Head>
				<meta
					name="ready-to-melt"
					content="Melt - Marketing, media, advertising and technology"
					description="Melt - Marketing, media, advertising and technology"
				/>
				<link
					rel="icon"
					type="image/svg"
					href="/favicon.ico"
				/>
			</Head>
			{children}
		</>
	);
}
