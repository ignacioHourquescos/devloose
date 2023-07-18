import { useState } from "react";
import Styled from "../styles/styles.js";
import Intro from "../components/index/About/About.js";
import Head from "next/head";
import ServiceCatalog from "../components/ServiceCatalog/ServiceCatalog";
import OurWork from "../components/index/OurWorkCard/OurWork";
import Hero from "../components/index/Hero/Hero";

import HeroStatic from "../components/index/HeroStatic/HeroStatic.js";

const Home = () => {
	const [displayHome, setDisplayHome] = useState(false);
	const [rendererReference, setRendererReference] = useState(false);

	const displayHomeHandler = () => {
		setDisplayHome(true);
	};

	const rendererHandler = (selectedMenuItem) => {
		setRendererReference(selectedMenuItem);
	};

	return (
		<>
			{/* prettier-ignore */}
			<Head>
        {metaData}
			</Head>
			{rendererReference ? (
				""
			) : (
				<>
					<Hero
						rendererHandler={(element) => rendererHandler(element)}
						displayHomeHandler={displayHomeHandler}
					/>
					{displayHome && (
						<Styled.Container>
							<Intro />
							<ServiceCatalog />
						</Styled.Container>
					)}
				</>
			)}

			{displayHome && <>HOME</>}
		</>
	);
};

export default Home;

const metaData = (
	<>
		<title>Devloose</title>
		<meta
			name="description"
			content="Devloose - Design and development partner"
		/>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta name="theme-color" content="#0B1115"></meta>
		<meta property="og:image" content="https://www.devloose.com/firulete.png" />
		<meta
			name="twitter:image"
			content="https://www.devloose.com/firulete.png"
		/>
	</>
);
