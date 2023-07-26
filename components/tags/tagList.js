import React from "react";
import tagStyle from "../../styles/tagList.module.css";
import { baseUrl } from "../../utilities/constants";
import Link from "next/link";
import CustomImage from "../common/customImage";

export default function TagList({ tagList, tagName }) {
	const displayName = tagName.split(" ").map((item) => {
		const firstWord = item.charAt(0).toUpperCase();
		const restOfWord = item.slice(1);
		return firstWord + restOfWord;
	});

	return (
		<div className="col-lg-9">
			<h2 className={tagStyle["title"]}>{displayName.join(" ")}</h2>
			<div className={tagStyle["article-list"]}>
				<p className={tagStyle["author-text"]}>Articles in {displayName.join(" ")}</p>
				<div id="content">
					{tagList.length > 0 &&
						tagList.map((tagItem, index) => (
							<div
								className={"row " + tagStyle["author-article"]}
								key={index}
							>
								<div
									className={
										"col-lg-4 col-5 " + tagStyle["featured-img"] + " " + tagStyle["flex-last"]
									}
								>
									<Link
										href={{
											pathname: "/" + tagItem.attributes?.slug,
											query: {
												id: tagItem.id,
											},
										}}
									>
										<CustomImage
											height={150}
											width={200}
											src={tagItem.attributes?.image?.data?.attributes?.url}
											alt={tagItem.attributes?.title}
										/>
									</Link>
								</div>
								<div
									className={
										"col-md-1 " + tagStyle["author-article-date"] + " " + tagStyle["flex-start"]
									}
								>
									March 16, 2020
								</div>
								<div className={"col-lg-7 col-7 " + tagStyle["flex-start"]}>
									<p className={tagStyle["cat"]}>
										{tagItem.attributes.category?.data?.attributes?.type}
									</p>
									<h2>
										<Link
											href={{
												pathname: "/" + tagItem.attributes?.slug,
												query: {
													id: tagItem.id,
												},
											}}
										>
											{tagItem.attributes.title}
										</Link>
									</h2>
									<p className={tagStyle["sub-heading"]}>
										{tagItem.attributes?.description?.length > 150
											? tagItem.attributes?.description?.slice(0, 150) + "..."
											: tagItem.attributes?.description}
									</p>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
}
