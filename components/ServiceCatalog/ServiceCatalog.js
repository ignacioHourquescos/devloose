import React from "react";
import { Styled } from "./styles.js";
import CardService from "./CardService/CardService.js";

const ServiceCatalog = (props) => {
	return (
		<Styled.Inner>
			{services.map((element) => (
				<>
					<CardService
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
	{
		title: "Innovation Booster",
		doodle: "/service1.png",
		description:
			"Propel your product ideas and business models to new heights with cutting-edge business experiments and design thinking methodologies,empowering your organization to soar with innovation.",
	},
	{
		title: "MVP Launchpad",
		doodle: "/service2.png",
		description:
			"Launch your product into orbit with a strategic value proposition visually captivating product design, and a rapid MVP launch to validate your business model and capture market share.",
	},
	{
		title: "Product Optimization Engine",
		doodle: "/service3.png",
		description:
			"Fine-tune your product performance with data-driven audits, streamlined UX/UI, and feature enhancements to optimize user engagement, retention, and conversion rates, keeping your product flying high.",
	},
	{
		title: " Stellar Crew",
		doodle: "/service4.png",
		description:
			"Assemble your own dream team of skilled professionals with our staff augmentation services, providing you with a dedicated crew of experts to accelerate  your projects and achieve your business goals.",
	},
];
