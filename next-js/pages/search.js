import React from 'react'
import dynamic from 'next/dynamic'
const SearchWrapper = dynamic(() => import('../components/search_landing/searchWrapper'))
export default function Search({ title }) {
    return (
        <>
            <SearchWrapper title={title} />
        </>
    )
}

export async function getServerSideProps(context) {
    let title = context.query.q
    return {
        props: {
            title: title
        }
    };
}