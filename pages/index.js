import { useState } from "react";
import Header from "../components/index/Hero/Header";
import Container from "../styles/styles.js";
import Intro from "../components/index/Intro/Intro";
import Footer from "../components/Navegation/Footer/Footer";
import Ingredients from "../components/index/Ingredients/Ingredients";
import Head from "next/head";
import SectionTitle from "../components/common/SectionTitle/SectionTitle";
import ServiceCatalog from "../components/ServiceCatalog/ServiceCatalog";
import Capabilities from "../components/Capabilities/Capabilities";
import OurWork from "../components/index/OurWorkCard/OurWork";
import Menu from "../components/Navegation/Menu/Menu";
import Contact from "../components/common/Contact/Contact";
const { Client } = require("@notionhq/client");

const Home = () => {
	const [displayHome, setDisplayHome] = useState(false);
	const [rendererReference, setRendererReference] = useState(false);

	const displayHomeHandler = () => {
		setDisplayHome(true);
	};

	const rendererHandler = (selectedMenuItem) => {
		setRendererReference(selectedMenuItem);
	};

	const SwitchRenderer = (reference) => {
		switch (reference) {
			case "Home":
				return <>Logo</>;
			case "About":
				return <Intro />;
			case "Intro":
				return <Intro />;
			case "OurWork":
				return <OurWork />;
			case "Services":
				return <ServiceCatalog />;
			case "Capabilities":
				return <Capabilities />;
		}
	};

	return (
		<>
			<Head>
				<title>Devloose</title>
				<meta
					name="description"
					content="Devloose - Design and development partner"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta name="theme-color" content="#0B1115"></meta>
			</Head>
			<Container.Master>
				{rendererReference ? (
					""
				) : (
					<Header displayHomeHandler={displayHomeHandler} />
				)}
				{displayHome && (
					<>
						<Menu
							rendererHandler={(element) =>
								rendererHandler(element)
							}
						/>
						<Container.CardService>
							{SwitchRenderer(rendererReference)}
						</Container.CardService>
					</>
				)}
			</Container.Master>
			<Contact />
		</>
	);
};

export default Home;
