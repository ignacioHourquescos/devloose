import React from "react";
import { Styled } from "./styles.js";
import CardService from "./CardService/CardService.js";

const ServiceCatalog = (props) => {
	return (
		<Styled.Inner>
			{services.map((element, idx) => (
				<>
					<CardService
						key={idx}
						title={element.title}
						description={element.description}
						doodle={element.doodle}
						number={element.number}
					></CardService>
				</>
			))}
		</Styled.Inner>
	);
};

export default ServiceCatalog;

const services = [
	// {
	// 	title: "Innovation Booster",
	// 	doodle: "/service1.png",
	// 	description:
	// 		"Propel your product ideas and business models to new heights with cutting-edge business experiments and design thinking methodologies,empowering your organization to soar with innovation.",
	// },
	{
		title: "Desarrollo web / Mobile",
		number: "1",
		doodle: "/service1_doodle.png",
		description:
			"Creamos aplicaciones web y moviles a medida para potenciar tu negocio y brindar una experiencia unica a tus usuarios",
	},
	{
		title: "Rapid Prototyping",
		number: "2",
		doodle: "/service2_doodle.png",
		description:
			"Con nuestro enfoque de prototipado rápido, transformamos ideas en solcuiones tangibles en poco tiempo, dando lugar a la validacion de conceptos",
	},
	{
		title: "lanzamiento de MVP",
		number: "2",
		doodle: "/service3_doodle.png",
		description:
			"Ayudamos a lanzar tu producto minimo viable al mercado de manera agil y eficiente, permitiendo tener una retroalimentacion temprana y reducir reisgos",
	},
	//   {
	//     title: "",
	//     number: "3",
	//     doodle: "/service4.png",
	//     description:
	//       "Unlock the Full Potential of Your Project Acceleration with Our Expert Staff Augmentation Solutions. Assemble Your Customized Crew of Highly Skilled and Experienced Professionals to Drive Your Business Goals to New Heights of Success.",
	//   },
];
