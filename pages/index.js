import Head from "next/head";
import styles from "../styles/Home.module.css";
import LandingWrapper from "../components/landing_wrapper/landingWrapper";

export default function Home() {
	return (
		<div className={styles.container}>
			<LandingWrapper />
		</div>
	);
}
