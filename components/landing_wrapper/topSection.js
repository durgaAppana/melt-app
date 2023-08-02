import React, { useEffect, useState } from "react";
import listingStyle from "../../styles/listing.module.css";
import Link from "next/link";
import { baseUrl } from "../../utilities/constants";
import PromotedSection from "./promotedSection";
import CustomImage from "../common/customImage";

export default function TopSection({ topSectionData, bannerData = [] }) {
	const [bannerArray, setBannerArray] = useState([]);

	useEffect(() => {
		if (bannerData.length > 0) {
			setBannerArray(bannerData);
		}
	}, [bannerData]);

	return (
		<section
			id="home"
			className={listingStyle["section-articles"] + " " + listingStyle["cat-section"]}
		>
			<div className="row">
				<div className="col-lg-9">
					<div className="row">
						<div className={"col-lg-12 " + listingStyle["main_article"]}>
							<div className="row">
								<div className="col-lg-7">
									<Link
										href={
											"/" +
											topSectionData.topArticle?.attributes?.slug +
											"/" +
											topSectionData.topArticle?.id
										}
										className={["rel"] + " " + listingStyle["block"]}
									>
										<CustomImage
											height={300}
											width={500}
											src={topSectionData.topArticle?.attributes?.image?.data?.attributes?.url}
											alt={topSectionData.topArticle?.attributes?.title}
											priority={true}
										/>
									</Link>
								</div>
								<div className={"col-lg-5 " + listingStyle["flex-first"]}>
									<p className={listingStyle["cat"]}></p>
									<h2>
										<Link
											href={
												"/" +
												topSectionData.topArticle?.attributes?.slug +
												"/" +
												topSectionData.topArticle?.id
											}
										>
											{topSectionData.topArticle?.attributes?.title}
										</Link>
									</h2>
									{topSectionData.topArticle?.attributes && (
										<p className={listingStyle["short-desc"]}>
											{topSectionData.topArticle?.attributes?.description}
										</p>
									)}
								</div>
							</div>
						</div>
					</div>
					<PromotedSection articleData={topSectionData.topArticlesList} />
				</div>
				<div className="col-lg-3">
					{bannerArray?.length > 0 &&
						bannerArray.map((bannerItem, index) => (
							<div
								className={listingStyle["side-banner"] + (index != 0 ? " mt-4" : " ")}
								key={index}
							>
								<a
									target="_blank"
									href={bannerItem.attributes.link}
								>
									<CustomImage
										height={200}
										width={300}
										src={bannerItem.attributes?.image?.data?.attributes?.url}
										alt={bannerItem.attributes?.image?.data?.attributes?.name}
										
									/>
								</a>
							</div>
						))}
				</div>
			</div>
		</section>
	);
}
