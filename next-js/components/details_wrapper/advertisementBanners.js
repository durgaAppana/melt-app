import Link from "next/link";
import React, { useEffect, useState } from "react";
import CustomImage from "../common/customImage";

import detailsStyle from "../../styles/detail.module.css";

export default function AdvertisementBanners({ bannersData }) {
	return (
		<div className="row">
			{bannersData.length > 0 &&
				bannersData.map((item, index) => (
					<div
						key={index}
						className={"col-lg-4 " + detailsStyle["banner-card"]}
					>
						<Link
							href={item.attributes.link}
							target="_blank"
							aria-label={item.attributes.link}
						>
							<CustomImage
								src={item.attributes?.image?.data?.attributes.url}
								alt={item.attributes.title}
								height={200}
								width={150}
								priority={true}
							/>
							<p className={detailsStyle["master-text"]}>{item.attributes.title}</p>
							<div className={"row " + detailsStyle["banner-div"]}>
								<div className="col-lg-6">
									<p className={detailsStyle["banner-title"]}>{item.attributes.brand}</p>
								</div>
								{item.attributes.button != null && (
									<div className="col-lg-6  d-flex justify-content-end">
										<button className={detailsStyle["small-button"]}>
											{item.attributes.button}
										</button>
									</div>
								)}
							</div>
						</Link>
					</div>
				))}
		</div>
	);
}
