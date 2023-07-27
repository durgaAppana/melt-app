import Link from "next/link";
import React from "react";

export default function PageNotFound() {
	return (
		<div className="container page-not-found">
			<h1>404 - Page Not Found</h1>
			<h4>
				Sorry, Nothing to show here. Please click  <Link href="/"> here</Link> to go t0 homepage
			</h4>
		</div>
	);
}
