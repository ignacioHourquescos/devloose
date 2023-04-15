import { useState } from "react";
import Header from "../components/index/Header/Header";
import Card from "../components/index/Card/Card";
import Container from "../styles/styles.js";
import Profile from "../components/index/Profile/Profile";
import Technologies from "../components/index/Technologies/Technologies";
import Intro from "../components/index/Intro/Intro";
import Footer from "../components/index/Footer/Footer";
import Ingredients from "../components/index/Ingredients/Ingredients";
import Head from "next/head";
import SectionTitle from "../components/index/SectionTitle/SectionTitle";
import ServiceCatalog from "../components/ServiceCatalog/ServiceCatalog";
import Capabilities from "../components/Capabilities/Capabilities";
const { Client } = require("@notionhq/client");

const Home = () => {
	const [displayHome, setDisplayHome] = useState(false);

	const displayHomeHandler = () => {
		setDisplayHome(true);
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
				<Header displayHomeHandler={displayHomeHandler} />
				{displayHome && (
					<>
						{" "}
						<Container.CardService>
							<SectionTitle>ABOUT</SectionTitle>

							<Intro />
							<Ingredients />

							<SectionTitle>PROJECTS</SectionTitle>
							{portfolioArray.map((element) => (
								<Card
									key={element.name}
									title={element.name}
									brief={element.brief}
									image={element.image}
								/>
							))}

							<SectionTitle>SERVICES</SectionTitle>
							<ServiceCatalog />
							<SectionTitle>Capabilities</SectionTitle>
							<Capabilities />

							<SectionTitle>WHO WE ARE</SectionTitle>

							<Profile />
							<Profile />
							<Profile />
							<Profile />

							{/* <SectionTitle>TECHNOLOGIES</SectionTitle> */}
							{/* <Container.Technologies>
							<Technologies />
						</Container.Technologies> */}
						</Container.CardService>
						<Container.Footer>
							<Footer />
						</Container.Footer>
					</>
				)}
			</Container.Master>
		</>
	);
};

export default Home;

const portfolioArray = [
	{
		type: "Institucional",
		name: "Rebuilding UI for Assurance tech company",
		client: "Sysone",
		color: "#55CBCD",
		image: "/sysone5.png",
		brief: "Designing and devlopment of the Front End, for a legacy system, with an architecture of microfront ends in order to achieve scalability for the upcoming modules",
		icons: {
			html: 1,
			css: 0,
			react: 1,
			node: 0,
			bootstrap: 0,
			mysql: 0,
			firebase: 1,
			sass: 1,
			js: 0,
			google: 1,
		},
		link: "https://camaraquilmes.netlify.app",
	},

	{
		type: "webApp",
		name: "Custom logistics platform for SME",
		cliebt: "Renova",
		color: "#B7CFB7",
		image: "/renovapp.png",
		brief: "From A SQL database plus firebase, we develop a logistics platform to handle daily orders, differing in status with different views for different users",
		icons: {
			html: 1,
			css: 1,
			react: 0,
			node: 1,
			bootstrap: 1,
			mysql: 1,
			firebase: 0,
			sass: 0,
			js: 1,
		},
		link: "https://listasrenova.netlify.app/views/html/ofertas.html",
	},

	{
		type: "Institucional",
		name: "Institutional Web page for law firm",
		color: "#c7dbda",
		image: "/hsrAbogados.png",
		brief: "Custom made web site with CMS",
		icons: {
			html: 1,
			css: 1,
			react: 0,
			node: 0,
			bootstrap: 0,
			mysql: 0,
			firebase: 0,
			sass: 0,
			js: 1,
			next: 1,
		},
		link: "https://corominola-lyart.vercel.app/",
	},

	{
		type: "E-Commerce",
		name: "Taylored price list for food wholesaler",
		color: "#FFDAC1",
		image: "/ElFuerte.png",
		brief: "Starting off from an ERP, we created an intetgration in order to show a web view of vital information",
		icons: {
			html: 1,
			css: 1,
			react: 1,
			node: 0,
			bootstrap: 0,
			mysql: 0,
			firebase: 0,
			sass: 0,
			js: 0,
			google: 1,
			next: 0,
			firebase: 0,
		},
		link: "https://www.mayoristaelfuerte.com",
	},
];
