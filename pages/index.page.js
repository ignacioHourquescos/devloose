import { useState } from "react";
import Styled from "../styles/styles.js";
import Head from "next/head";
import Hero from "./home/Hero/Hero";
import About from "./home/About/About";
import ServiceCatalog from "./home/ServiceCatalog/ServiceCatalog";
import Wave from "react-wavify";
import Carrousel from "./home/carrousel/Carrousel.js";

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
					<Hero />
					{true && (
						<Styled.Container>
							{/* <div style={{ transform: "translateY(80px)" }}>
								<Wave
									fill="#190D2A"
									paused={false}
									options={{
										height: 30,
										amplitude: 30,
										speed: 0.1,
										points: 3,
									}}
								/>
							</div> */}
							<About />
							<Carrousel />
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
