import React, { useEffect, useState } from "react";

import detailsStyle from "../../styles/detail.module.css";
import ReadsSection from "./readsSection";
import DetailsSection from "./detailsSection";
import AddBanners from "./addBanners";

export default function DetailsWrapper({ detailsData = {}, allDataDetails = {} }) {
	const categoryType = detailsData.category?.data?.attributes?.type;

	const [article, setArticle] = useState([]);
	const [meltAlso, setMeltAlso] = useState([]);

	useEffect(() => {
		detailArticleData();
	}, []);

	const detailArticleData = async () => {
		let arr = [];
		let tempArr = [];
		allDataDetails.map((element) => {
			const articleType = element?.attributes?.category?.data?.attributes?.type.toLowerCase();
			if (categoryType?.toLowerCase() === articleType) {
				arr.push(element);
			}
			if (element.attributes?.also_melt) {
				tempArr.push(element);
			}
		});
		setArticle(arr);
		setMeltAlso(tempArr);
	};

	return (
		<section className={detailsStyle["section-articles"] + " " + detailsStyle["cat-section"] + " article"}>
			<div className="row">
				<DetailsSection
					categoryType={categoryType}
					detailsData={detailsData}
					tagsList={detailsData?.tags?.data}
					meltAlso={meltAlso}
				/>
				<ReadsSection
					article={article}
					articleType={categoryType}
				/>
			</div>
			<AddBanners />
		</section>
	);
}
