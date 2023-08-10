import React, { useState } from "react";
import Link from "next/link";
import moment from "moment";

import detailsStyle from "../../styles/detail.module.css";
import AlsoMeltSection from "./alsoMeltSection";
import { convertToSlug } from "../../utilities/utils";
import CustomImage from "../common/customImage";
import AddBanners from "./addBanners";

export default function DetailsSection({ categoryType = "", detailsData = {}, tagsList = [], meltAlso }) {
	const [showFullDescription, setFullDescription] = useState(false);

	const description = showFullDescription ? detailsData.attributes.content_details : detailsData.attributes?.content_details?.slice(0, 400);

	const showFullDescriptionHandler = () => {
		setFullDescription(!showFullDescription);
	};

	return (
		<div className="col-lg-9">
			<p className={detailsStyle["cat"]}>{categoryType != "" && categoryType + ":"}</p>
			<h2 className={detailsStyle["title"]}>{detailsData.attributes.title}</h2>
			<p>
				<span className={detailsStyle["author-text"]}>
					<span>
						<Link
							style={{ color: "#9e9e9e" }}
							href={"/author/" + convertToSlug(detailsData.attributes.author)}
							aria-label={detailsData.attributes.author}
						>
							{detailsData.attributes.author}
						</Link>
					</span>
					,&nbsp;
				</span>
				<span className={detailsStyle["date"]}>{moment.utc(detailsData.attributes.publishedAt).format("LL")}</span>
			</p>
			<p className={detailsStyle["sub-heading"]}>"{detailsData.attributes.description}"</p>
			<div className={detailsStyle["body-text"]}>
				<p className={detailsStyle["content"]}>
					{description}
					{detailsData.attributes?.content_details?.length > 400 && (
						<button
							className="btn bg-transparent"
							onClick={showFullDescriptionHandler}
						>
							...Read {showFullDescription ? "less" : "more"}
						</button>
					)}
				</p>
				{typeof detailsData.attributes.video_link != "undefined" && detailsData.attributes.video_link != null ? (
					<figure>
						<div className="wp-block-embed__wrapper">
							<iframe
								title={detailsData.attributes.title}
								width="640"
								height="360"
								src={detailsData.attributes.video_link}
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen=""
								loading="lazy"
							></iframe>
						</div>
					</figure>
				) : (
					<CustomImage
						height={400}
						width={800}
						src={detailsData.attributes?.image?.data?.attributes?.url}
						alt={detailsData.attributes.title}
					/>
				)}
			</div>
			{tagsList.length > 0 && (
				<div className={detailsStyle["tagsWrapper"]}>
					<div className={detailsStyle["tagTitle"]}>
						More about:</div>
					{tagsList.map((tag, index) => (
						<Link
							href={"/tag/" + convertToSlug(tag.attributes.tag_name)}
							key={index}
							aria-label={tag.attributes.tag_name}
						>
							{tag.attributes.tag_name}
						</Link>
					))}
				</div>
			)}
			<AlsoMeltSection meltAlso={meltAlso && meltAlso} />
			<AddBanners detailsData={detailsData} />
		</div>
	);
}
