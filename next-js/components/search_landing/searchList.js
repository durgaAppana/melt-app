import React from "react";
import searchStyle from "../../styles/search.module.css";
import CustomImage from "../common/customImage";
import moment from "moment";
import Link from "next/link";

export default function SearchList({ searchList }) {
	return (
		<div className={searchStyle["col-lg-10"]}>
			<h2 className={searchStyle["title"]}>Search Results</h2>

			<div className={searchStyle["body-text"]}>
				<div
					className={searchStyle["gsc-result-info"]}
					id="resInfo-1"
				>
					{`About ${searchList.length} results`}
				</div>
				{searchList.map((item, i) => (
					<div className={searchStyle["gsc-webResult"] + " " + searchStyle["gsc-result"]}>
						<div className={["gs-title"]}>
							<Link
								className="gs-title"
								href={{
									pathname: '/' + item.attributes.slug,
									query: {
										id: item.id
									}
								}}
							>
								{item.attributes.author.toUpperCase()} - <b>Update</b> {item.attributes.title.length > 50 ? `${item.attributes.title.slice(0, 50)}...` : item.attributes.title}
							</Link>
						</div>
						<div className={searchStyle["gsc-url-top"]}>
							<span>Melt</span>
							<span>› {item.attributes.title.length > 50 ? `${item.attributes.title.slice(0, 50)}...` : item.attributes.title}</span>
						</div>
						<div className={searchStyle["gsc-table-result"]}>
							<div className="row">
								<div className={"col-lg-2 " + searchStyle["image-sec"]}>
									<Link
										className="gs-image"
										href={{
											pathname: "/" + item.attributes.slug,
											query: {
												id: item.id
											}
										}}
									>
										<CustomImage
											className="gs-image"
											src={item.attributes.image.data.attributes.url}
											alt="Thumbnail image"
											width={100}
											height={100}
										/>
									</Link>
								</div>
								<div className="col-lg-10">
									<div className={searchStyle["article-content"]}>
										{moment.utc(item.attributes.publishedAt).format("LL")} {item.attributes.description.length > 150 ? `${item.attributes.description.slice(0, 150)} ...` : item.attributes.description}
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
