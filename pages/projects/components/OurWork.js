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
						client={element.client}
						video={element.video}
						link={element.link}
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
		client: "Sysone",
		image: "/portfolio1.png",
		video: "/SysoneCloudReady.mp4",
		description:
			"Trabajamos en diseñar y desarrolar el front end de un sistema de gestion de seguros. El mismo se construyo con Microfrontends y con un diseño minimalista",
		stack: ["react"],
		link: "https://www.sysone.com",
	},

	{
		title: "Plantando en Casa",
		client: "green.hab",
		image: "/portfolio3.png",
		video: "/greenhab.mp4",
		link: null,
		description:
			"La aplicación fue desarrollada para Greenhab, que ofrece dispositivos de cultivos hidropónicos para promover la autosuficiencia alimentaria. La app coordina y ayuda a los usuarios a planificar sus cultivos y obtener las verduras necesarias para su cosecha.",
		stack: "js css html",
	},
	{
		title: "Gestion Agil",
		client: "Renova",
		image: "/portfolio2.png",
		video: "/sistema de pedidos.mp4",
		link: "https://renovapp.vercel.app",
		description:
			"Diseñamos una app para gestionar el estado de los pedidos de los clientes para un mayorista de autopartes. Permite a los clientes rastrear el estado de sus pedidos, ver el historial de pedidos y recibir notificaciones sobre actualizaciones de sus pedidos.",
		stack: "js css html",
	},
	// {
	// 	title: "HR Portal",
	// 	client: "Tasa",
	// 	image: "/portfolio2.png",
	// 	video: "/HrPortal.mp4",
	// 	description:
	// 		"Prototipado rapido para sistema de gestión mobile para empleados",
	// 	stack: "js css html",
	// },
];
