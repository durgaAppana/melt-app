import Script from 'next/script'
import React from 'react'

export default function CommonLoadJquery() {
    return (
        <>
            <Script async src='../../js/jquery.min.js' strategy="beforeInteractive" />
        </>
    )
}
