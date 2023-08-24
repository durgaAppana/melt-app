import styles from "../styles/Home.module.css";
import LandingWrapper from "../components/landing_wrapper/landingWrapper";
import { NextSeo } from "next-seo";
import CommonLoadJquery from "../components/common/commonLoadJquery";
// import dynamic from "next/dynamic";
// const LandingWrapper = dynamic(()=>import("../components/landing_wrapper/landingWrapper"));
export default function Home() {
	const seoOption = {
		title: "Melt - Marketing, media, advertising and technology",
		description: "Melt - Marketing, media, advertising and technology"
	}
	return (
		<>
			<NextSeo {...seoOption} />
			<div className={styles.container}>
				<LandingWrapper />
				<CommonLoadJquery />
			</div>
		</>
	);
}
