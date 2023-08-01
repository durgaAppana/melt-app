import Head from "next/head";
import styles from "../styles/Home.module.css";
import LandingWrapper from "../components/landing_wrapper/landingWrapper";
import { NextSeo } from "next-seo";

export default function Home() {
	const seoOption = {
		title:"Melt - Marketing, media, advertising and technology",
		description:"Melt - Marketing, media, advertising and technology"
	}
	return (
		<>
		<NextSeo {...seoOption} />
			<div className={styles.container}>
				<LandingWrapper />
			</div>
		</>
	);
}
