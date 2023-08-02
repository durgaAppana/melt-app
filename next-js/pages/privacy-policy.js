import React from "react";
import PrivacyPolicy from "../components/static_pages/privacyPolicy";
import { NextSeo } from "next-seo";

export default function PrivacyPage() {
	const seoOption = {
		title:"Privacy Policy -melt",
		description:"Privacy Policy"
	}
	return (
		<>
			<NextSeo {...seoOption} />
			<PrivacyPolicy />
		</>
	);
}
