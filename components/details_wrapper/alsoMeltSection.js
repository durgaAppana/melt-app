import moment from "moment";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import detailsStyle from "../../styles/detail.module.css";
import CustomCarousel from "../common/customCarousel";
import commonStyle from "../../styles/common.module.css";
import CustomImage from "../common/customImage";

export default function AlsoMeltSection({ meltAlso = [] }) {
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (meltAlso.length > 0) {
			setIsLoading(true);
		}
	}, [meltAlso]);

	return (
		<section>
			<div className="mt-5 mb-4">
				<b className={detailsStyle["also-text"]}>ALSO</b> <b>MELT</b>
			</div>
			{isLoading && (
				<div className={detailsStyle["also-melt"]}>
					<CustomCarousel>
						{meltAlso &&
							meltAlso.map((item, index) => (
								<div
									className={detailsStyle["recommend-post"]}
									key={index}
								>
									<div className={commonStyle["recommend-post-header"]}>
										<div className={"col-lg-12 " + commonStyle["recommend-image-wrapper"]}>
											<Link
												href={{
													pathname: "/" + item.attributes.slug,
													query: {
														id: item.id,
													},
												}}
											>
												<CustomImage
													height={130}
													width={150}
													src={item?.attributes?.image?.data?.attributes.url}
													alt={item.attributes?.title}
												/>
											</Link>
											<h3 className={detailsStyle["recommend-post-title"]}>
												<span>{item.attributes?.title}</span>
											</h3>
											<ul className={detailsStyle["meta"]}>
												<li className="time">
													{moment.utc(item.attributes.publishedAt).fromNow()}
												</li>
												<li className="comments">1 comment </li>
											</ul>
											<h2>
												<Link
													href={{
														pathname: "/" + item.attributes.slug,
														query: {
															id: item.id,
														},
													}}
												>
													{item.attributes?.description.slice(0, 55)}...
												</Link>
											</h2>
										</div>
									</div>
								</div>
							))}
					</CustomCarousel>
				</div>
			)}
		</section>
	);
}
