import React from "react";
import DetailsWrapper from "../components/details_wrapper/detailsWrapper";
import { apiGetCall } from "../utilities/apiServices";
import { apiList } from "../utilities/constants";

export default function Details({ detailsData, allDataDetails }) {
	return (
		<DetailsWrapper
			detailsData={detailsData?.attributes}
			allDataDetails={allDataDetails}
		/>
	);
}

export async function getServerSideProps(context) {
	const { id } = context.query;
	const detailsData = await apiGetCall(apiList.GET_ARTICLE_DATA + "/" + id + "?populate=image,category,tags");
	const allData = await apiGetCall(apiList.GET_ARTICLES_LIST);

	return {
		props: {
			detailsData: detailsData.data,
			allDataDetails: allData.data,
		},
	};
}
