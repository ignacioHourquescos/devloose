import Document, { Html, Head, Main, NextScript } from "next/document";
import Hero from "./home/Hero/Hero";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Quattrocento&display=swap"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap"
						rel="stylesheet"
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
