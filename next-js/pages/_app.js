import { useRouter } from "next/router";

import "../styles/globals.css";
import Footer from "../components/layout/footer";
import Header from "../components/layout/header";
import SocialMedia from "../components/common/socialMedia";
import { SessionProvider } from "next-auth/react";
function MyApp({ Component, pageProps }) {
	const router = useRouter();

	return (
		<>
			<Header />
			<div className="container main-body">
				{router.pathname !== "/" && <SocialMedia />}
				<SessionProvider session={pageProps.session}>
					<Component {...pageProps} />
				</SessionProvider>
			</div>
			<Footer />
		</>
	);
}

export default MyApp;
