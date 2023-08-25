import React from "react";
import searchStyle from "../../styles/search.module.css";
import CustomImage from "../common/customImage";
import listingStyle from "../../styles/default.module.scss";

export default function DefaultSearch() {
	const data = [];
	for (let i = 0; i < 3; i++) data.push(i);

	return (
		<>
			{data.map((x, i) => (
				<div
					key={i}
					className={
						searchStyle["gsc-webResult"] +
						" " +
						searchStyle["gsc-result"] +
						" " +
						listingStyle["loading-text"]
					}
				>
					<div className={searchStyle["gs-title"]}>
						<div className={listingStyle.left}></div>
					</div>
					<div className={"col-md-12 " + searchStyle["gsc-url-top"]}>
						<div className={listingStyle.left}></div>
					</div>
					<div className={searchStyle["gsc-table-result"]}>
						<div className="row">
							<div className={"col-2 " + searchStyle["image-sec"]}>
								<div className={searchStyle["default-img"]}></div>
							</div>
							<div className={"col-10 " + searchStyle["dec-sec"]}>
								<div className={listingStyle.left}></div>
								<div className={listingStyle.left}></div>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
}
