import React from "react";
import detailsStyle from "../../styles/detail.module.css";
import Link from "next/link";
import SubscribeMail from "../common/subscribeMail";
import CustomImage from "../common/customImage";

export default function ReadsSection({ article = [], articleType = "" }) {
	return (
		<div className="col-lg-3">
			<SubscribeMail />
			<div className={detailsStyle["recommended"]}>
				<p className={detailsStyle["text-heading"]}>Recommended Reads in {articleType}</p>
				{article &&
					article.slice(0, 4).map((v, i) => (
						<div
							className={"row " + detailsStyle["small_promoted_article"]}
							key={i}
						>
							<div className="col-lg-12">
								<Link
									href={{
										pathname: "/" + v?.attributes.slug,
										query: {
											id: v.id,
										},
									}}
								>
									<CustomImage height={150} width={200}
										src={v?.attributes?.image?.data?.attributes?.url}
										alt={v?.attributes?.title}
									/>
								</Link>
								<h2 className={detailsStyle["mar-t-10"]}>
									<Link
										href={{
											pathname: "/" + v?.attributes.slug,
											query: {
												id: v.id,
											},
										}}
									>
										{v?.attributes?.title}
									</Link>
								</h2>
							</div>
						</div>
					))}
			</div>
		</div>
	);
}
