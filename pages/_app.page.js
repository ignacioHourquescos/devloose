import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Script
				src="https://www.googletagmanager.com/gtag/js?id=G-BWRQB8V3S4"
				strategy="afterInteractive"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-BWRQB8V3S4');
        `}
			</Script>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
