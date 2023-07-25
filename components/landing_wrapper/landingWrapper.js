import React, { useEffect, useState } from "react";

import TopSection from "./topSection";
import ArticleSection from "./articleSection";
import { apiGetCall } from "../../utilities/apiServices";
import { apiList } from "../../utilities/constants";

export default function LandingWrapper() {
	const [isLoading, setIsLoading] = useState(false);
	const [topSectionData, setTopSectionData] = useState({
		topArticle: {},
		topArticlesList: [],
	});

	const [articleList, setArticleList] = useState({
		marketing: [],
		media: [],
		advertising: [],
		research: [],
	});

	const [bannerData, setBannerData] = useState({
		top_section: [],
		marketing: [],
		media: [],
		advertising: [],
		research: [],
	});

	useEffect(() => {
		getArticleList();
		getHomeBanners();
	}, []);

	const getArticleList = async () => {
		const articleObj = {
			marketing: [],
			media: [],
			advertising: [],
			research: [],
		};

		const topSectionData = {
			topArticle: {},
			topArticlesList: [],
		};

		setIsLoading(true);
		const response = await apiGetCall(apiList.GET_ARTICLES_LIST);
		setIsLoading(false);

		if (response.data.length > 0) {
			response.data.map((article) => {
				const articleType = article?.attributes?.category?.data?.attributes?.type.toLowerCase();
				if (Object.keys(articleObj).map((item) => item.toLowerCase() == articleType)) {
					articleObj[articleType]?.push(article);
				}
			});

			topSectionData.topArticle = response.data.filter((item) => item.attributes.top_section == true)[0];
			topSectionData.topArticlesList = response.data.filter((item) => item.attributes.top_article == true);
		}
		setTopSectionData(topSectionData);
		setArticleList(articleObj);
	};

	const getHomeBanners = async () => {
		const bannerData = {
			top_section: [],
			marketing: [],
			media: [],
			advertising: [],
			research: [],
		};

		setIsLoading(true);
		const response = await apiGetCall(apiList.GET_BANNERS_DATA);
		setIsLoading(false);

		if (response.data.length > 0) {
			response.data.map((banner) => {
				banner?.attributes?.categories?.data.map((item) => {
					if (Object.keys(bannerData).map((obj) => obj == item.attributes.type.toLowerCase())) {
						bannerData[item.attributes.type.toLowerCase()]?.push(banner);
					}
				});
			});
		}
		setBannerData(bannerData);
	};

	return (
		<>
			<TopSection
				topSectionData={topSectionData}
				bannerData={bannerData.top_section}
			/>
			{articleList.marketing.length > 0 && (
				<ArticleSection
					articleData={articleList.marketing}
					bannerData={bannerData.marketing}
					articleType="Marketing"
				/>
			)}
			{articleList.media.length > 0 && (
				<ArticleSection
					articleData={articleList.media}
					bannerData={bannerData.media}
					articleType="Media"
				/>
			)}
			{articleList.advertising.length > 0 && (
				<ArticleSection
					articleData={articleList.advertising}
					bannerData={bannerData.advertising}
					articleType="Advertising"
				/>
			)}
			{articleList.research.length > 0 && (
				<ArticleSection
					articleData={articleList.research}
					bannerData={bannerData.research}
					articleType="Research"
				/>
			)}
		</>
	);
}
