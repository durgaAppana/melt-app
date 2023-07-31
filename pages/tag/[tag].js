import React from "react";
import TagWrapper from "../../components/tags/tagWrapper";
import { apiGetCall } from "../../utilities/apiServices";
import { apiList } from "../../utilities/constants";
import PageNotFound from "../../components/common/pageNotFound";

export default function Tag({ tagList, tagName }) {
	if (tagList.length <= 0) {
		return <PageNotFound />;
	}

	return (
		<div>
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
		},
	};
}
