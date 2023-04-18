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
		title: "MVP Launchpad",
		number: "1",
		doodle: "/service2.png",
		description:
			"Launch Your Winning MVPs with Strategic Value Propositions. We Define Problems, Design Value Propositions, Create Visually Stunning Product Designs, and Develop MVPs Aligned with User Needs and Business Goals.",
	},
	{
		title: " Software Development",
		number: "2",
		doodle: "/service1.png",
		description:
			"Elevate Your Software's Development with Comprehensive UX/UI Audits, Strategic Redesigns, Agile Feature Development, Roadmapping, and Methodologies Training to Optimize Performance and Drive Business Success.",
	},

	{
		title: " Stellar Crew",
		number: "3",
		doodle: "/service4.png",
		description:
			"Unlock the Full Potential of Your Project Acceleration with Our Expert Staff Augmentation Solutions. Assemble Your Customized Crew of Highly Skilled and Experienced Professionals to Drive Your Business Goals to New Heights of Success.",
	},
];
