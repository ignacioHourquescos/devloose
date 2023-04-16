import React from "react";
import { Styled } from "./styles.js";
import CardService from "./Capability/Capability.js";
import Capability from "./Capability/Capability.js";

const Capabilities = (props) => {
	return (
		<Styled.Inner>
			<Styled.BlockTitle>Capabilites</Styled.BlockTitle>
			<Capability title="Product" capabilityList={productCapabilities} />
			<Capability title="Design" capabilityList={productCapabilities} />
			<Capability
				title="Development"
				capabilityList={productCapabilities}
			/>
			<Styled.BlockTitle>Technologies</Styled.BlockTitle>
			<Capability
				title="Development"
				capabilityList={productCapabilities}
			/>
			<Capability title="Tools" capabilityList={productCapabilities} />
			<Styled.BlockTitle>who we are</Styled.BlockTitle>
			<Capability title="Us" capabilityList={productCapabilities} />
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
