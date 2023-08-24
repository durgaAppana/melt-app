import React from "react";
import Link from "next/link";

import listingStyle from "../../styles/listing.module.css";
import CustomImage from "../common/customImage";
export default function SuggestionsSection({ displayArticles }) {
	return (
		<div className="row">
			<div className={"col-lg-6 " + listingStyle["cat_promoted_article"]}>
				<Link
					href={{
						pathname: "/" + displayArticles.left_section?.attributes?.slug,
						query: {
							id: displayArticles.left_section?.id,
						},
					}}
					className={["rel"] + " " + listingStyle["block"]}
				>
					<CustomImage
						height={300}
						width={500}
						src={displayArticles.left_section?.attributes?.image?.data?.attributes?.url}
						alt={displayArticles.left_section?.attributes?.title}
						loading="eager"
					/>
				</Link>
				<h2>
					<Link
						href={{
							pathname: "/" + displayArticles.left_section?.attributes?.slug,
							query: {
								id: displayArticles.left_section?.id,
							},
						}}
					>
						{displayArticles.left_section?.attributes?.title}
					</Link>
				</h2>
			</div>
			<div className="col-lg-6">
				<div className={"row " + listingStyle["small_promoted_article"]}>
					{displayArticles.right_article.length > 0 &&
						displayArticles.right_article.map((suggestion, index) => (
							<div
								className={"col-lg-6 " + listingStyle["mar-b-10"]}
								key={index}
							>
								<Link
									href={{
										pathname: "/" + suggestion.attributes?.slug,
										query: {
											id: suggestion.id,
										},
									}}
									className={["rel"] + " " + listingStyle["block"]}
								>
									<CustomImage
										height={150}
										width={200}
										src={suggestion.attributes?.image?.data?.attributes?.url}
										alt={suggestion.attributes?.title}
									/>
								</Link>
								<h2 className={listingStyle["mar-t-10"]}>
									<Link
										href={{
											pathname: "/" + suggestion.attributes?.slug,
											query: {
												id: suggestion.id,
											},
										}}
									>
										{suggestion.attributes?.title}
									</Link>
								</h2>
							</div>
						))}
				</div>
			</div>
		</div>
	);
}
