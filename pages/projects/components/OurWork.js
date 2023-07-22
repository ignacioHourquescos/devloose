import React from "react";
import { Styled } from "./styles.js";
import Card from "./Card/Card.js";

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
		title: "Eficiencia asegurada",
		image: "/portfolio1.png",
		description:
			"Trabajamos en diseñar y desarrolar el front end de un sistema de gestion de seguros. El mismo se construyo con Microfrontends y con un diseño minimalista",
		stack: ["react"],
	},

	{
		title: "Plantando en Casa",
		image: "/portfolio3.png",
		description:
			"La aplicación fue desarrollada para Greenhab, que ofrece dispositivos de cultivos hidropónicos para promover la autosuficiencia alimentaria. La app coordina y ayuda a los usuarios a planificar sus cultivos y obtener las verduras necesarias para su cosecha.",
		stack: "js css html",
	},
	{
		title: "Gestion Agil",
		image: "/portfolio2.png",
		description:
			"The Logistics App is a web application designed to manage the state of client orders for an autoparts wholesaler. It allows clients to track the status of their orders, view order history, and receive notifications about updates to their orders.",
		stack: "js css html",
	},
];
