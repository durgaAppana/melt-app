import React from 'react'
import { apiList } from '../../utilities/constants';
import { apiGetCall } from '../../utilities/apiServices';
import TagWrapper from '../../components/tags/tagWrapper';
import PageNotFound from '../../components/common/pageNotFound';

export default function Author({ tagList, tagName }) {
    console.log("0000000000000000",tagList);
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
    )
}

export async function getServerSideProps(context) {
    const tag = context.params.author;
    const tagName = tag.split("-").join(" ").toLowerCase();
    const tagList = await apiGetCall(apiList.GET_AUTHOR_LIST + tagName + "&populate=*");
    console.log("object",tagList);

    return {
        props: {
            tagList: tagList.data,
            tagName: tagName,
        },
    };
}