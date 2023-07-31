import React from "react";
import Advertising from "../components/static_pages/advertising";
import { NextSeo } from "next-seo";

export default function AdvertiserInfo() {
	const seoOption = {
		title: "Advertising Opportunities -melt",
		description: "Advertising Opportunities"
	}
	return (
		<>
			<NextSeo {...seoOption} />
			<Advertising />
		</>
	);
}
