import React from "react";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";

const SearchWrapper = dynamic(() => import("../components/search_landing/searchWrapper"));

export default function Search({ seoOptions }) {
	return (
		<>
			<NextSeo {...seoOptions} />
			<SearchWrapper title={seoOptions.title} />
		</>
	);
}

export async function getServerSideProps(context) {
	let seoOptions = {
		title: context.query.q,
		description: context.query.q,
	};

	return {
		props: {
			seoOptions: seoOptions,
		},
	};
}
