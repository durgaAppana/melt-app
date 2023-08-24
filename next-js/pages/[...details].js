import React, { useEffect } from "react";
import { apiGetCall } from "../utilities/apiServices";
import { apiList } from "../utilities/constants";
import PageNotFound from "../components/common/pageNotFound";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import CommonLoadJquery from "../components/common/commonLoadJquery";

const DetailsWrapper = dynamic(() => import("../components/details_wrapper/detailsWrapper"), { ssr: true })
export default function Details({ detailsData, title }) {

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
				detailsData={detailsData}
			/>
			<CommonLoadJquery />
		</>
	);
}

export async function getServerSideProps(context) {
	const { id } = context.query
	const detailsData = await apiGetCall(apiList.GET_ARTICLE_DATA + "/" + id + "?populate=image,category,tags");
	return {
		props: {
			detailsData: detailsData.data,
			title: context.query.details[0],
		},
	};
}
