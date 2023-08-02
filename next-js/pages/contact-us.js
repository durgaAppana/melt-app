import React from 'react'
import ContactWrapper from '../components/contact_us/contactWrapper'
import { NextSeo } from 'next-seo'

export default function index() {
    const seoOption = {
		title:"Contact Us -melt",
		description:"Contact Us"
	}
    return (
        <>
        <NextSeo {...seoOption} />
            <ContactWrapper />
        </>
    )
}
