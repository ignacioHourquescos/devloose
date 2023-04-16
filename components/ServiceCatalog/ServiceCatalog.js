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
		title: "MVP Launchpad",
		doodle: "/service2.png",
		description:
			"Launch your product into orbit with a strategic value proposition visually captivating product design, and a rapid MVP launch to validate your business model and capture market share.",
	},
	{
		title: "  Product Innovation",
		doodle: "/service1.png",
		description:
			"Catalyze Your Product's Growth with UX/UI Audits, Redesigns, Feature Development, Roadmapping, and Methodologies Training to Boost Conversion Rates and Drive Business Success.",
	},

	{
		title: " Stellar Crew",
		doodle: "/service4.png",
		description:
			"Assemble your own dream team of skilled professionals with our staff augmentation services, providing you with a dedicated crew of experts to accelerate  your projects and achieve your business goals.",
	},
];
