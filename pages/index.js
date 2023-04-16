import { useState } from "react";
import Styled from "../styles/styles.js";
import Intro from "../components/index/About/About.js";
import Head from "next/head";
import ServiceCatalog from "../components/ServiceCatalog/ServiceCatalog";
import Capabilities from "../components/Capabilities/Capabilities";
import OurWork from "../components/index/OurWorkCard/OurWork";
import Menu from "../components/Navegation/Menu/Menu";
import Contact from "../components/index/Contact/Contact.js";
import Hero from "../components/index/Hero/Hero";
import ContactForm from "../components/index/Contact/components/ContactForm.js";
import HeroStatic from "../components/index/HeroStatic/HeroStatic.js";

const Home = () => {
	const [displayHome, setDisplayHome] = useState(false);
	const [rendererReference, setRendererReference] = useState(false);
	const [initialValueMenuItem, setInitialValueMenuItem] = useState(false);
	const [displayContactForm, setDisplayContactForm] = useState(false);

	const displayHomeHandler = () => {
		setDisplayHome(true);
	};

	const rendererHandler = (selectedMenuItem) => {
		setRendererReference(selectedMenuItem);
	};

	const displayContactFormHandler = (value) => {
		setDisplayContactForm(value);
	};

	const SwitchRenderer = (reference) => {
		switch (reference) {
			case "Home":
				return <HeroStatic />;
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
			{/* prettier-ignore */}

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
			{rendererReference ? (
				""
			) : (
				<Hero
					rendererHandler={(element) => rendererHandler(element)}
					displayHomeHandler={displayHomeHandler}
				/>
			)}
			<Menu
				rendererHandler={(element) => rendererHandler(element)}
				initalValueMenuItem={initialValueMenuItem}
			/>
			{displayContactForm ? (
				<ContactForm
					displayContactFormHandler={(element) =>
						displayContactFormHandler(element)
					}
				/>
			) : (
				""
			)}
			<Styled.Container>
				{displayHome && <>{SwitchRenderer(rendererReference)}</>}
				<Contact
					displayContactFormHandler={(element) =>
						displayContactFormHandler(element)
					}
				/>
			</Styled.Container>
		</>
	);
};

export default Home;
