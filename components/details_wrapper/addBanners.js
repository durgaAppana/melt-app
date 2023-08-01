import React, { useEffect, useState } from "react";
import detailsStyle from "../../styles/detail.module.css";
import CommentsSection from "./commentsSection";
import { apiGetCall } from "../../utilities/apiServices";
import { apiList } from "../../utilities/constants";
import CustomImage from "../common/customImage";

export default function AddBanners() {
	const [bannersData, setBannersData] = useState([]);
	useEffect(() => {
		getBanners();
	}, []);

	const getBanners = async () => {
		const response = await apiGetCall(apiList.GET_ADVERTISEMENT_BANNERS);
		console.log("response", response);
		setBannersData(response.data);
	};

	return (
		<div className={"row " + detailsStyle["add-banner"]}>
			<h6 className={detailsStyle["banner-title"]}>Sponsored</h6>
			<div className="col-lg-9">
				<div className="row">
					{bannersData.length > 0 &&
						bannersData.slice(0, 2).map((item, index) => (
							<div className={"col-lg-6 " + detailsStyle["banner-card"]}>
								<a
									href={item.attributes.link}
									target="_blank"
								>
									<CustomImage
										src={item.attributes.image.data.attributes.url}
										alt={item.attributes.title}
										height={200}
										width={150}
									/>
									<p className={detailsStyle["master-text"]}>{item.attributes.title}</p>
									<div className="row">
										<div className="col-lg-6">
											<p className={detailsStyle["banner-title"]}>{item.attributes.brand}</p>
										</div>
										<div className="col-lg-6  d-flex justify-content-end">
											<button className={detailsStyle["banner-button"]}>book now</button>
										</div>
									</div>
								</a>
							</div>
						))}
				</div>
				<div className="row">
					{bannersData.length > 0 &&
						bannersData.slice(2, 5).map((item, index) => (
							<div className={"col-lg-4 " + detailsStyle["banner-card"]}>
								<a
									href={item.attributes.link}
									target="_blank"
								>
									<CustomImage
										src={item.attributes?.image?.data?.attributes.url}
										alt={item.attributes.title}
										height={200}
										width={150}
									/>
									<p className={detailsStyle["master-text"]}>{item.attributes.title}</p>
									<div className="row">
										<div className="col-lg-8">
											<p className={detailsStyle["banner-title"]}>{item.attributes.brand}</p>
										</div>
										<div className="col-lg-4  d-flex justify-content-end">
											<button className={detailsStyle["small-button"]}>book now</button>
										</div>
									</div>
								</a>
							</div>
						))}
				</div>
				{/* <div className={"row mt-5"}>
					<div className={detailsStyle["comments-section"]}>
						<div className={detailsStyle["comments-count"]}>Comments</div>
						<div className={detailsStyle["comments-count"]}>Login</div>
					</div>
					<CommentsSection />
				</div> */}
			</div>
		</div>
	);
}
