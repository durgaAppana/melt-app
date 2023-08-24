import Link from "next/link";
import React, { useEffect, useState } from "react";

import listingStyle from "../../styles/listing.module.css";
import SuggestionsSection from "./suggestionsSection";
import RecommendedSection from "./recommendedSection";
import CustomImage from "../common/customImage";

export default function ArticleSection({ articleType = "", articleData = [], bannerData = [] }) {
	const showCaseArticle = articleData.length > 0 ? articleData.filter((item) => item.attributes.showcase)[0] : {};

	const displayArticles = { left_section: {}, right_article: [] };

	const recommendedArticles =
		articleData.length > 0 ? articleData.filter((item) => item.attributes.recommended == true) : [];

	if (articleData.length > 0) {
		displayArticles.left_section = articleData.filter((item) => item.attributes.left_article)[0];
		displayArticles.right_article = articleData.filter((item) => item.attributes.right_article);
	}

	const [isLoading, setIsLoading] = useState(false);
	const [bannerArray, setBannerArray] = useState([]);

	useEffect(() => {
		if (bannerData.length > 0) {
			setBannerArray(bannerData);
		}
	}, [bannerData]);

	useEffect(() => {
		if (recommendedArticles.length > 0) {
			setIsLoading(true);
		}
	}, [articleData]);

	return (
		<section
			id={articleType.toLowerCase()}
			className={listingStyle["section-articles"] + " " + listingStyle["cat-section"]}
		>
			<p className={listingStyle["cat-heading"]}>{articleType}</p>
			<div className={"row " + listingStyle["cat_main_article"]}>
				<div className={"col-lg-7 " + listingStyle["cat_featured_img"]}>
					<Link
						href={{
							pathname: "/" + showCaseArticle.attributes?.slug,
							query: {
								id: showCaseArticle.id,
							},
						}}
						className={["relative"] + " " + listingStyle["block"]}
					>
						<CustomImage height={400} width={600}
							src={showCaseArticle.attributes?.image?.data?.attributes?.url}
							alt={showCaseArticle?.attributes?.title}
						/>
					</Link>
				</div>
				<div
					className={
						"col-lg-5 " +
						listingStyle["article-content"] +
						" " +
						listingStyle["flex-first"] +
						" " +
						listingStyle["dec"]
					}
				>
					<h2>
						<Link
							href={{
								pathname: "/" + showCaseArticle.attributes?.slug,
								query: {
									id: showCaseArticle.id,
								},
							}}
						>
							{showCaseArticle?.attributes?.title}
						</Link>
					</h2>
					<p className={listingStyle["short-desc"] + " " + listingStyle["hidden-sm-down"]}>
						"{showCaseArticle?.attributes?.description}"
					</p>
				</div>
			</div>
			<SuggestionsSection displayArticles={displayArticles} />
			<RecommendedSection
				articleType={articleType}
				recommendedArticles={recommendedArticles}
				isLoading={isLoading}
				bannerArray={bannerArray}
			/>
		</section>
	);
}
