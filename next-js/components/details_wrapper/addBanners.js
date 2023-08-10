import Link from "next/link";
import React, { useEffect, useState } from "react";
import CustomImage from "../common/customImage";

import detailsStyle from "../../styles/detail.module.css";
import CommentsSection from "./commentsSection";
import { apiGetCall } from "../../utilities/apiServices";
import { apiList } from "../../utilities/constants";
import AdvertisementBanners from "./advertisementBanners";

export default function AddBanners({ detailsData }) {
	const [bannersData, setBannersData] = useState([]);

	useEffect(() => {
		getBanners();
	}, []);

	const getBanners = async () => {
		const response = await apiGetCall(apiList.GET_ADVERTISEMENT_BANNERS);
		setBannersData(response.data);
	};

	return (
		<div className={"row " + detailsStyle["add-banner"]}>
			<h1 className={detailsStyle["banner-title"]}>Sponsored</h1>
			<div className="col-lg-12">
				<div className="row">
					{bannersData.length > 0 &&
						bannersData.slice(0, 2).map((item, index) => (
							<div
								key={index}
								className={"col-lg-6 " + detailsStyle["banner-card"]}
							>
								<Link
									href={item.attributes.link}
									target="_blank"
									aria-label={item.attributes.link}
								>
									<CustomImage
										src={item.attributes.image.data.attributes.url}
										alt={item.attributes.title}
										height={200}
										width={150}
										priority={true}
									/>
									<p className={detailsStyle["master-text"]}>{item.attributes.title}</p>
									<div className="row">
										<div className="col-6">
											<p className={detailsStyle["banner-title"]}>{item.attributes.brand}</p>
										</div>
										{item.attributes.button != null && (
											<div className="col-6  d-flex justify-content-end">
												<button className={detailsStyle["banner-button"]}>
													{item.attributes.button}
												</button>
											</div>
										)}
									</div>
								</Link>
							</div>
						))}
				</div>
				<AdvertisementBanners bannersData={bannersData.slice(2, 5)} />
				<div className={"row mt-5"}>
					<CommentsSection detailsData={detailsData} />
				</div>
				<AdvertisementBanners bannersData={bannersData.slice(0, 6)} />
			</div>
		</div>
	);
}
