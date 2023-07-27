import Footer from "../components/layout/footer";
import Header from "../components/layout/header";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header />
			<div className="container">
				<Component {...pageProps} />
			</div>
			<Footer />
		</>
	);
}

export default MyApp;
