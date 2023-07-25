import Footer from "../components/layout/footer";
import Header from "../components/layout/header";
import Header2 from "../components/layout/header2";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<div className="body">
			<Header />
			<Header2 />
			<div className="container">
				<Component {...pageProps} />
			</div>
			<Footer />
		</div>
	);
}

export default MyApp;
