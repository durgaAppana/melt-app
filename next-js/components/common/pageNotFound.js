import Link from "next/link";
import React from "react";

export default function PageNotFound() {
	return (
		<div className="container page-not-found">
			<h3>404 - Page Not Found</h3>
			<h6>
				Sorry, Nothing to show here. Please click <Link href="/"> here</Link> to explore our articles.
			</h6>
		</div>
	);
}
