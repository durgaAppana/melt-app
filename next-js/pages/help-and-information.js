import React from "react";
import TermsConditions from "../components/static_pages/termsConditions";
import { NextSeo } from "next-seo";

export default function informationPage() {
	const seoOption = {
		title:"Help-And-Information -melt",
		description:"Help-And-Information"
	}
	return (
		<>
			<NextSeo {...seoOption} />
			<TermsConditions />
		</>

	);
}
