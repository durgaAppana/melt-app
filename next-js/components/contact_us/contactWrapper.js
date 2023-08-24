import React from 'react'
import TopSection from './topSection'
import styleContact from "../../styles/contact.module.scss";

export default function ContactWrapper() {
    return (
        <>
            <div className={styleContact.contentWrapper}>
            <TopSection />
            </div>
        </>
    )
}
