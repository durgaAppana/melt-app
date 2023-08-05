import React, { useEffect } from "react";
// import DetailsWrapper from "../components/details_wrapper/detailsWrapper";
import { apiGetCall } from "../utilities/apiServices";
import { apiList } from "../utilities/constants";
import PageNotFound from "../components/common/pageNotFound";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

const DetailsWrapper = dynamic(() => import("../components/details_wrapper/detailsWrapper"), { ssr: true })
export default function Details({ detailsData, allDataDetails, title }) {

	if (typeof detailsData == "undefined" || detailsData == null) {
		return <PageNotFound />;
	}
	const seoOption = {
		title: title,
		description: title
	}

	return (
		<>
			<NextSeo {...seoOption} />
			<DetailsWrapper
				detailsData={detailsData?.attributes}
			/>
		</>
	);
}

export async function getServerSideProps(context) {
	const {id} = context.query
	const detailsData = await apiGetCall(apiList.GET_ARTICLE_DATA + "/" + id + "?populate=image,category,tags");

	return {
		props: {
			detailsData: detailsData.data,
			title: context.query.details[0],
		},
	};
}
