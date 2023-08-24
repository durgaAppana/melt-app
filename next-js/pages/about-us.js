import React from "react";
// import AboutUs from "../components/static_pages/aboutUs";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
const AboutUs = dynamic(()=>import("../components/static_pages/aboutUs"));
export default function AboutPage() {
	const seoOption = {
		title:"About Us - metlt",
		description:"About Us - metlt"
	}
	return (
		<>
			<NextSeo {...seoOption} />
			<AboutUs />
		</>
	);
}
