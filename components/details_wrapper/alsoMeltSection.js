import React, { useEffect, useState } from "react";
import detailsStyle from "../../styles/detail.module.css";
import CustomCarousel from "../common/customCarousel";
import commonStyle from "../../styles/common.module.css";
import { baseUrl } from "../../utilities/constants";
import Link from "next/link";

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
									className={commonStyle["recommend-post"]}
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
												<img src={baseUrl + item?.attributes?.image?.data?.attributes.url} />
											</Link>
											<h2>
												<Link
													href={{
														pathname: "/" + item.attributes.slug,
														query: {
															id: item.id,
														},
													}}
												>
													{item.attributes?.title}
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
