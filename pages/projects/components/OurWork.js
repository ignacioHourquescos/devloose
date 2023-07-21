import React from "react";
import { Styled } from "./styles.js";
import Card from "./Card/Card.js";
import { BiLogoReact } from "react-icons/bi";

const OurWork = ({}) => {
	return (
		<Styled.Inner>
			{portfolio.map((element, idx) => (
				<>
					<Card
						key={idx}
						title={element.title}
						image={element.image}
						description={element.description}
					>
						{element.stack}
					</Card>
				</>
			))}
		</Styled.Inner>
	);
};

export default OurWork;

const portfolio = [
	// {
	// 	title: "Innovation Booster",
	// 	image: "/service1.png",
	// 	description:
	// 		"Propel your product ideas and business models to new heights with cutting-edge business experiments and design thinking methodologies,empowering your organization to soar with innovation.",
	// },
	{
		title: "Rediseño de Interfaz",
		image: "/portfolio1.png",
		description:
			"Trabajamos en diseñar y desarrolar el front end de un sistema de gestion de seguros. El mismo se construyo con Microfrontends y con un diseño minimalista",
		stack: ["react"],
	},

	{
		title: "MVP for Hydroponic farming",
		image: "/portfolio3.png",
		description:
			"Greenhab is a web application for handling plant orders from clients. It allows users to browse available vegetables and place orders. Greenhab's goal is to provide a seamless and enjoyable experience for clients to plant their own food.",
		stack: "js css html",
	},
	{
		title: "Tailored Logistics for autopart wholesaler",
		image: "/portfolio2.png",
		description:
			"The Logistics App is a web application designed to manage the state of client orders for an autoparts wholesaler. It allows clients to track the status of their orders, view order history, and receive notifications about updates to their orders.",
		stack: "js css html",
	},
];
