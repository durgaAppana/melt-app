import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<title>Melt - Marketing, media, advertising and technology</title>
					<meta
						name="ready-to-melt"
						content="Melt - Marketing, media, advertising and technology"
						description="Melt - Marketing, media, advertising and technology"
					/>
					<script
						src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"
						async
						strategy="lazyOnload"
					></script>
					<link
						rel="preload"
						href="/favicon.ico"
						as="style"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
