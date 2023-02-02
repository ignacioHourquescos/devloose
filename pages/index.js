import { useState } from "react";
import Header from "../components/index/Header/Header";
import Card from "../components/index/Card/Card";
import CardService from "../components/index/CardServices/CardServices";
import Container from "../styles/styles.js";
import Profile from "../components/index/Profile/Profile";
import Technologies from "../components/index/Technologies/Technologies";
import Intro from "../components/index/Intro/Intro";
import Footer from "../components/index/Footer/Footer";
import Ingredients from "../components/index/Ingredients/Ingredients";
import Head from "next/head";

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
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<meta name="theme-color" content="#0B1115"></meta>
			</Head>
			<Container.Master>
				<Header displayHomeHandler={displayHomeHandler} />
				{displayHome && (
					<>
						<h1
							style={{
								marginLeft: "10%",
								padding: "0 5%",
								backgroundColor: "black",
								color: "white",
								display: "inline-block",
							}}
							color
						>
							ABOUT
						</h1>
						<Container.Intro>
							<Intro />
						</Container.Intro>
						<h1
							style={{
								marginLeft: "15%",
								padding: "0 5%",
								backgroundColor: "black",
								color: "white",
								display: "inline-block",
							}}
							color
						>
							PROJECTS
						</h1>
						{portfolioArray.map((element) => (
							<Card
								key={element.name}
								title={element.name}
								brief={element.brief}
								image={element.image}
							/>
						))}
						<Container.Ingredients>
							<h1
								style={{
									marginLeft: "10%",
									padding: "0 5%",
									backgroundColor: "black",
									color: "white",
									display: "inline-block",
								}}
								color
							>
								INGREDIENTS
							</h1>
							<Ingredients />
						</Container.Ingredients>

						<Container.CardService>
							<h1
								style={{
									marginLeft: "10%",
									padding: "0 5%",
									backgroundColor: "black",
									color: "white",
									display: "inline-block",
								}}
								color
							>
								SERVICES
							</h1>
							<CardService />
						</Container.CardService>
						<h1
							style={{
								marginLeft: "10%",
								padding: "0 5%",
								backgroundColor: "black",
								color: "white",
								display: "inline-block",
							}}
							color
						>
							WHO WE ARE
						</h1>
						<Container.Profile>
							<Profile />
							<Profile />
							<Profile />
							<Profile />
						</Container.Profile>
						<h1
							style={{
								marginLeft: "10%",
								padding: "0 5%",
								backgroundColor: "black",
								color: "white",
								display: "inline-block",
							}}
							color
						>
							TECHNOLOGIES
						</h1>
						<Container.Technologies>
							<Technologies />
						</Container.Technologies>
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
		image: "/sysone.png",
		brief:
			"Designing and devlopment of the Front End, for a legacy system, with an architecture of microfront ends in order to achieve scalability for the upcoming modules",
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
		brief:
			"From A SQL database plus firebase, we develop a logistics platform to handle daily orders, differing in status with different views for different users",
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
	// {
	// 	type: "webApp",
	// 	name: "Renova",
	// 	color: "#B7CFB7",
	// 	image: "/renovacel.png",
	// 	brief:
	// 		"A partir de un sistema de gestión en SQL, se generó una web app para mostrar precios y stock de manera dinámica",
	// 	icons: {
	// 		html: 1,
	// 		css: 1,
	// 		react: 0,
	// 		node: 1,
	// 		bootstrap: 1,
	// 		mysql: 1,
	// 		firebase: 0,
	// 		sass: 0,
	// 		js: 1,
	// 	},
	// 	link: "https://listasrenova.netlify.app/views/html/ofertas.html",
	// },

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
	// {
	// 	type: "webApp",
	// 	name: "GreenHab",
	// 	color: "#BEE5B0",
	// 	image: "/greenhab.png",
	// 	brief:
	// 		"Se desarollo un MVP, para planificar las cosechas de los usuarios asociados al proyecto",
	// 	icons: {
	// 		html: 1,
	// 		css: 0,
	// 		react: 1,
	// 		node: 0,
	// 		bootstrap: 0,
	// 		mysql: 0,
	// 		firebase: 1,
	// 		sass: 1,
	// 		js: 0,
	// 		google: 1,
	// 	},
	// 	link: "https://greenhab2.netlify.app",
	// },
	//   {
	//     type: "webApp",
	//     name: "Polo Sales",
	//     color: "#CCE2CB",
	//     image: "/polosalescel.png",
	//     brief: "pagina web muy linda e intersante",
	//     icons: { html: 1, css: 1, react: 0, node: 0, bootstrap: 1, mysql: 0, firebase: 0, sass: 0, js: 1 },
	//     link: "https://polosales.netlify.app"
	//   },
	// {
	// 	type: "E-Commerce",
	// 	name: "La Galera",
	// 	color: "#9AB7D3",
	// 	image: "/lagaleracel.png",
	// 	brief:
	// 		"Dely store online con diseño de interfaz dinámico para poder visualizar promociones de manera efectiva",
	// 	icons: {
	// 		html: 1,
	// 		css: 0,
	// 		react: 1,
	// 		node: 0,
	// 		bootstrap: 0,
	// 		mysql: 0,
	// 		firebase: 0,
	// 		sass: 1,
	// 		js: 0,
	// 		google: 1,
	// 		firebase: 1,
	// 	},
	// 	link: "https://lagalera.netlify.app",
	// },
	{
		type: "E-Commerce",
		name: "Taylored price list for food wholesaler",
		color: "#FFDAC1",
		image: "/elFuerte.png",
		brief:
			"Starting off from an ERP, we created an intetgration in order to show a web view of vital information",
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
