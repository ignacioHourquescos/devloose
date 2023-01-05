import { useState } from "react";
import Header from "../components/index/Header/Header";
import Card from "../components/index/Card/Card";
import CardService from "../components/index/CardServices/CardServices";
import Container from "../styles/styles.js";
import Profile from "../components/index/Profile/Profile";
import Technologies from "../components/index/Technologies/Technologies";
import Intro from "../components/index/Intro/Intro";
import Footer from "../components/index/Footer/Footer";

const Home = () => {
	const [displayHome, setDisplayHome] = useState(false);

	const displayHomeHandler = () => {
		setDisplayHome(true);
	};

	return (
		<Container.Master>
			<Header displayHomeHandler={displayHomeHandler} />
			{displayHome && (
				<>
					<Container.Intro>
						<Intro />
					</Container.Intro>
					{portfolioArray.map((element) => (
						<Card
							key={element.name}
							title={element.name}
							brief={element.brief}
						/>
					))}

					<Container.CardService>
						<CardService />
						<CardService />
						<CardService />
						<CardService />
					</Container.CardService>
					<Container.Profile>
						<Profile />
						<Profile />
						<Profile />
						<Profile />
					</Container.Profile>
					<Container.Technologies>
						<Technologies />
					</Container.Technologies>
					<Container.Footer>
						<Footer />
					</Container.Footer>
				</>
			)}
		</Container.Master>
	);
};

export default Home;

const portfolioArray = [
	{
		type: "Institucional",
		name: "SYSONE",
		color: "#55CBCD",
		image: "/camaracel.png",
		brief:
			"Primera etapa de proyecto que agrupa agentes gastronómicos con el fin de mejorar la competitividad del sector",
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
		name: "Logistics platform",
		color: "#B7CFB7",
		image: "/renovacel.png",
		brief:
			"A partir de un sistema de gestión en SQL, se generó una web app para mostrar precios y stock de manera dinámica",
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
		type: "webApp",
		name: "Renova",
		color: "#B7CFB7",
		image: "/renovacel.png",
		brief:
			"A partir de un sistema de gestión en SQL, se generó una web app para mostrar precios y stock de manera dinámica",
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
		name: "HSR abogados",
		color: "#c7dbda",
		image: "/corominolacel.png",
		brief:
			"Web institucional para estudio de abogados penalistas especializados en casos de alta complejidad",
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
		type: "webApp",
		name: "GreenHab",
		color: "#BEE5B0",
		image: "/greenhabcel.png",
		brief:
			"Se desarollo un MVP, para planificar las cosechas de los usuarios asociados al proyecto",
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
		link: "https://greenhab2.netlify.app",
	},
	//   {
	//     type: "webApp",
	//     name: "Polo Sales",
	//     color: "#CCE2CB",
	//     image: "/polosalescel.png",
	//     brief: "pagina web muy linda e intersante",
	//     icons: { html: 1, css: 1, react: 0, node: 0, bootstrap: 1, mysql: 0, firebase: 0, sass: 0, js: 1 },
	//     link: "https://polosales.netlify.app"
	//   },
	{
		type: "E-Commerce",
		name: "La Galera",
		color: "#9AB7D3",
		image: "/lagaleracel.png",
		brief:
			"Dely store online con diseño de interfaz dinámico para poder visualizar promociones de manera efectiva",
		icons: {
			html: 1,
			css: 0,
			react: 1,
			node: 0,
			bootstrap: 0,
			mysql: 0,
			firebase: 0,
			sass: 1,
			js: 0,
			google: 1,
			firebase: 1,
		},
		link: "https://lagalera.netlify.app",
	},
	{
		type: "E-Commerce",
		name: "El Fuerte",
		color: "#FFDAC1",
		image: "/elfuertecel.png",
		brief:
			"Web app para distribuidora mayorista. Se hizo foco en el diseño de un sistema de lista de precios ágiles",
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
