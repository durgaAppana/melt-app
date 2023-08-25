import Script from 'next/script'
import React from 'react'

export default function CommonLoadJquery() {
    return (
        <>
            <Script src='../../js/jquery.min.js' strategy="beforeInteractive" async />
        </>
    )
}
