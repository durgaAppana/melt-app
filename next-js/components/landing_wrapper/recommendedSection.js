import Link from "next/link";
import React, { useEffect, useState } from "react";

import CustomCarousel from "../common/customCarousel";
import listingStyle from "../../styles/listing.module.css";
import commonStyle from "../../styles/common.module.css";
import { baseUrl } from "../../utilities/constants";
import CustomImage from "../common/customImage";

export default function RecommendedSection({ articleType = "", recommendedArticles = [], isLoading, bannerArray }) {
	return (
		<div className="row">
			<div className={"col-lg-9 " + listingStyle["recommended_articles"]}>
				<span className={listingStyle["cat"] + " " + listingStyle["reco_text"]}>
					Recommended Reads in {articleType}
				</span>
				<div className={listingStyle["recommended_slider"]}>
					<div className={listingStyle["swiper-container"]}>
						<div className={listingStyle["small_promoted_article"]}>
							{isLoading && (
								<CustomCarousel>
									{recommendedArticles.map((item, index) => (
										<div
											className={commonStyle["recommend-post"]}
											key={index}
										>
											<div className={commonStyle["recommend-post-header"]}>
												<div className={"col-lg-12 " + commonStyle["recommend-image-wrapper"]}>
													<Link href={"/" + item.attributes?.slug + "/" + item.id}>
														<CustomImage
															height={100}
															width={150}
															src={item.attributes?.image?.data?.attributes?.url}
															alt={item.attributes?.title}
														/>
													</Link>
													<h2>
														<Link href={"/" + item.attributes?.slug + "/" + item.id}>
															{item.attributes?.title}
														</Link>
													</h2>
												</div>
											</div>
										</div>
									))}
								</CustomCarousel>
							)}
						</div>
					</div>
				</div>
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
									height={150}
									width={200}
									src={bannerItem.attributes?.image?.data?.attributes?.url}
									alt={bannerItem.attributes?.image?.data?.attributes?.name}
								/>
							</a>
						</div>
					))}
			</div>
		</div>
	);
}
