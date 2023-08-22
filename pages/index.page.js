import { useState } from "react";
import Styled from "../styles/styles.js";
import Head from "next/head";
import Hero from "./home/Hero/Hero";
import About from "./home/About/About";
import ServiceCatalog from "./home/ServiceCatalog/ServiceCatalog";
import Contact from "./home/contact/Contact.js";
import Universe from "./home/Hero/universe/Universe.js";
import { useRef } from "react";
import * as Scroll from "react-scroll";
import {
	Link,
	Button,
	Element,
	Events,
	animateScroll as scroll,
	scrollSpy,
	scroller,
} from "react-scroll";

const Home = () => {
	const [displayUniverse, setDisplayUniverse] = useState(false);
	const ref = useRef(null);

	const toggleUniverse = () => {
		setDisplayUniverse((prev) => !prev);
		scroll.scrollTo("containerElement", {
			duration: 1500,
			smooth: "easeInOutQuad",
		});
	};
	return (
		<>
			<Head>{metaData}</Head>
			<>
				<Hero show={displayUniverse} />
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
