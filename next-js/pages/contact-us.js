import React from 'react'
import ContactWrapper from '../components/contact_us/contactWrapper'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
// const ContactWrapper = dynamic(()=>import("../components/contact_us/contactWrapper"))
export default function ContactPage() {
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
