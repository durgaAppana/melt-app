import React from "react";
import { apiGetCall } from "../../utilities/apiServices";
import { apiList } from "../../utilities/constants";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
// import TagWrapper from "../../components/tags/tagWrapper"
const PageNotFound = dynamic(()=>import("../../components/common/pageNotFound"))
const TagWrapper = dynamic(() => import("../../components/tags/tagWrapper"))

export default function Tag({ tagList, tagName, title }) {
	const seoOption = {
		title: title,
		description: title
	}
	if (tagList.length <= 0) {
		return <PageNotFound />;
	}

	return (
		<div>
			<NextSeo {...seoOption} />
			<TagWrapper
				tagList={tagList}
				tagName={tagName}
			/>
		</div>
	);
}

export async function getServerSideProps(context) {
	const { tag } = context.params;
	const tagName = tag.split("-").join(" ").toLowerCase();
	const tagList = await apiGetCall(apiList.GET_tAGS_LIST + tagName + "&populate=*");

	return {
		props: {
			tagList: tagList.data,
			tagName: tagName,
			title: context.params.tag,
		},
	};
}
