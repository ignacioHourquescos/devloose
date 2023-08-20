import { useState } from "react";
import Styled from "../styles/styles.js";
import Head from "next/head";
import Hero from "./home/Hero/Hero";
import About from "./home/About/About";
import ServiceCatalog from "./home/ServiceCatalog/ServiceCatalog";
import Contact from "./home/contact/Contact.js";
import Universe from "./home/universe/Universe.js";

const Home = () => {
	const [displayUniverse, setDisplayUniverse] = useState(false);

	const toggleUniverse = () => {
		setDisplayUniverse((prev) => !prev);
	};
	return (
		<>
			<Head>{metaData}</Head>
			<>
				<Universe show={displayUniverse} />
				<Hero />
				<About />
				<ServiceCatalog />
				<Contact toggleUniverse={toggleUniverse} />
			</>
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
