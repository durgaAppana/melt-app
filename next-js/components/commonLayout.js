import { useRouter } from "next/router";
import Header from "./layout/header";
import Footer from "./layout/footer";
import SocialMedia from "./common/socialMedia";

export default function CommonLayout({ Component, pageProps }) {
	// const router = useRouter();

	return (
		<>
			<Header />
			<div className="container">
				{/* {router.pathname !== "/" && <SocialMedia />} */}
				<Component {...pageProps} />
			</div>
			<Footer />
		</>
	);
}
