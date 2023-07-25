import React from "react";
import detailsStyle from "../../styles/detail.module.css";
import AlsoMeltSection from "./alsoMeltSection";
import Link from "next/link";
import { convertToSlug } from "../../utilities/utils";

export default function DetailsSection({ categoryType = "", detailsData = {}, tagsList = [], meltAlso }) {
	return (
		<div className="col-lg-9">
			<p className={detailsStyle["cat"]}>{categoryType}:</p>
			<h2 className={detailsStyle["title"]}>{detailsData.title}</h2>
			<p>
				<span className={detailsStyle["author-text"]}>
					<span>
						<a
							style={{ color: "#9e9e9e" }}
							href="https://www.readytomelt.com/author/melt/"
						>
							{detailsData.author}
						</a>
					</span>
					,&nbsp;
				</span>
				<span className={detailsStyle["date"]}>June 23, 2023</span>
			</p>
			<p className={detailsStyle["sub-heading"]}>"{detailsData.description}"</p>
			<div className={detailsStyle["body-text"]}>
				<p className={detailsStyle["content"]}>{detailsData.content_details}</p>
				<figure>
					<div className="wp-block-embed__wrapper">
						<iframe
							title={detailsData.title}
							width="640"
							height="360"
							src={detailsData.video_link}
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen=""
						></iframe>
					</div>
				</figure>
			</div>
			<div className={detailsStyle["article-tags"]}>
				More about:
				{tagsList.length > 0 &&
					tagsList.map((tag, index) => (
						<Link
							href={"/tag/" + convertToSlug(tag.attributes.tag_name)}
							className={detailsStyle["badge"]}
							key={index}
						>
							{tag.attributes.tag_name}
						</Link>
					))}
			</div>
			<AlsoMeltSection meltAlso={meltAlso && meltAlso} />
		</div>
	);
}
