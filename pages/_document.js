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
					<link
						rel="icon"
						href="/favicon.ico"
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
