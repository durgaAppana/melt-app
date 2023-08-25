import styles from "../styles/Home.module.css";
// import LandingWrapper from "../components/landing_wrapper/landingWrapper";
import { NextSeo } from "next-seo";
import CommonLoadJquery from "../components/common/commonLoadJquery";
import { apiGetCall } from "../utilities/apiServices";
import { apiList } from "../utilities/constants";
import dynamic from "next/dynamic";
const LandingWrapper = dynamic(()=>import("../components/landing_wrapper/landingWrapper"),{ssr:true});
export default function Home({langingData}) {
	const seoOption = {
		title: "Melt - Marketing, media, advertising and technology",
		description: "Melt - Marketing, media, advertising and technology"
	}
	return (
		<>
			<NextSeo {...seoOption} />
			<div className={styles.container}>
				<LandingWrapper langingData={langingData} />
				<CommonLoadJquery />
			</div>
		</>
	);
}

export async function getServerSideProps() {
	const response = await apiGetCall(apiList.GET_ARTICLES_LIST);
	return {
		props: {
			langingData: response.data
		}
	}
}