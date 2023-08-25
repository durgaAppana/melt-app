import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";

import styles from "../styles/Home.module.css";
// import LandingWrapper from "../components/landing_wrapper/landingWrapper";
import CommonLoadJquery from "../components/common/commonLoadJquery";
import { apiGetCall } from "../utilities/apiServices";
import { apiList } from "../utilities/constants";

const LandingWrapper = dynamic(() => import("../components/landing_wrapper/landingWrapper"), { ssr: true });

export default function Home({ landingData }) {
	const seoOption = {
		title: "Melt - Marketing, media, advertising and technology",
		description: "Melt - Marketing, media, advertising and technology",
	};

	return (
		<>
			<NextSeo {...seoOption} />
			<div className={styles.container}>
				<LandingWrapper landingData={landingData} />
				<CommonLoadJquery />
			</div>
		</>
	);
}

export async function getServerSideProps() {
	const response = await apiGetCall(apiList.GET_ARTICLES_LIST);
	return {
		props: {
			landingData: response.data,
		},
	};
}
