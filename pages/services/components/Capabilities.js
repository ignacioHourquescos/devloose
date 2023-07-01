import React from "react";
import { Styled } from "./styles.js";
import CardService from "./Capability/Capability.js";
import Capability from "./Capability/Capability.js";

const Capabilities = (props) => {
	return (
		<Styled.Inner>
			<Styled.BlockTitle>Capabilites</Styled.BlockTitle>
			<Capability
				title="Development"
				capabilityList={developmentCapabilities}
			/>
			<Capability title="Design" capabilityList={designCapabilities} />
			<Capability title="Product" capabilityList={productCapabilities} />

			<Styled.BlockTitle>Technologies</Styled.BlockTitle>
			<Capability title="Tech Stack" capabilityList={techStack} />
			{/* <Styled.BlockTitle>who we are</Styled.BlockTitle>
			<Capability title="Us" capabilityList={us} /> */}
		</Styled.Inner>
	);
};

export default Capabilities;

const productCapabilities = [
	{
		title: "Product Roadmap",
		description:
			"Immersive discovery, brief creation, functionality prioritization, MVP design. Solutions aligned with business and client needs for impactful outcomes",
	},
	{
		title: "Story Mapping",
		description:
			"Visually organize and prioritize user stories, aligning them with your business goals and user needs. Streamline your product development with our expert assistance.",
	},
	{
		title: "Product Discovery",
		description:
			"A comprehensive process to uncover business and user needs, prioritize functionalities, and design a strategic MVP for successful product development.",
	},
	{
		title: "User research",
		description:
			"Methodologies to gather insights and feedback from target users, informing product development decisions and enhancing use experience.",
	},
];

const designCapabilities = [
	{
		title: "Design sprint",
		description:
			"accelerates product design with a time-boxed, collaborative approach. Ideate, prototype, and validate ideas in just a few days for rapid innovation.",
	},
	{
		title: "UI (User Interface)",
		description:
			"Creation of intuitive and visually appealing interfaces that enhance user engagement and drive positive experiences.",
	},
	{
		title: "user-centered design",
		description:
			"approach that prioritizes user needs, research, iteration, and testing for exceptional product experiences",
	},
	{
		title: "UX (user experience) ",
		description:
			" crafts seamless interactions and engaging experiences. Research, design, and test to create products that delight users and drive business success.",
	},
];

const developmentCapabilities = [
	{
		title: "Mobile/Web development",
		description:
			"Our mobile & PWA app development service builds native & web-based apps. Using popular tech stacks for seamless cross-platform experiences.",
	},
	{
		title: "Web scrapping",
		description:
			"Our web scraping service extracts valuable data from websites. Customized solutions using advanced techniques for data collection and analysis to drive insights and decision-making.",
	},
];

const techStack = [
	{
		title: "Front end development",
		description:
			"HTML/CSS, JavaScript, React.js, Next.js, Vue.js, Ember.js, Backbone.js, Bootstrap, Material-UI, Foundation, Sass, Less, Redux, GraphQL, and Webpack.",
	},
	{
		title: "back end development",
		description:
			"Node.js, Express.js, Django, Flask, Ruby on Rails, ASP.NET, Laravel, Spring, Express.js, Flask, Ruby on Rails, ASP.NET, Laravel, and Spring.",
	},
	{
		title: "Design",
		description:
			" Figma, Sketch, InVision Studio, Canva, Zeplin, SketchUp, Marvel.",
	},
];

const us = [
	{
		title: "Ignacio Tata",
		description:
			"Software Engineering +15 years experience in both large scale projects and end to end smaller ones",
	},
	{
		title: "Ignacio Hourquescos",
		description: "Product Designer, with notion in design and development",
	},
];
