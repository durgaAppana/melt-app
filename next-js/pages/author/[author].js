import React from 'react'
import { apiList } from '../../utilities/constants';
import { apiGetCall } from '../../utilities/apiServices';
// import TagWrapper from '../../components/tags/tagWrapper';
import PageNotFound from '../../components/common/pageNotFound';
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
const TagWrapper = dynamic(() => import("../../components/tags/tagWrapper"))
export default function Author({ tagList, tagName, title }) {
    const seoOption = {
        title: title,
        description: title
    }
    if (tagList.length <= 0) {
        return <PageNotFound />;
    }
    return (
        <>
            <NextSeo {...seoOption} />
            <TagWrapper
                tagList={tagList}
                tagName={tagName}
            />
        </>
    )
}

export async function getServerSideProps(context) {
    const tag = context.params.author;
    const tagName = tag.split("-").join(" ").toLowerCase();
    const tagList = await apiGetCall(apiList.GET_AUTHOR_LIST + tagName + "&populate=*");
    return {
        props: {
            tagList: tagList.data,
            tagName: tagName,
            title: tag
        },
    };
}