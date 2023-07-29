import { useRouter } from "next/router";

import "../styles/globals.css";
import Footer from "../components/layout/footer";
import Header from "../components/layout/header";
import SocialMedia from "../components/common/socialMedia";
function MyApp({ Component, pageProps }) {
	const router = useRouter();

	return (
		<>
			<Header />
			<div className="container main-body">
				{router.pathname !== "/" && <SocialMedia />}
				<Component {...pageProps} />
			</div>
			<Footer />
		</>
	);
}

export default MyApp;
