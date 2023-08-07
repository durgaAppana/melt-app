import React from 'react'
import SearchWrapper from '../components/search_landing/searchWrapper'
import { apiGetCall } from '../utilities/apiServices'
import { apiList } from '../utilities/constants'

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