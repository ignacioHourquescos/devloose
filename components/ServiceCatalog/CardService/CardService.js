import React from "react";
import { StyledCard } from "./styles.js";

const CardService = ({ title, description, doodle }) => {
	return (
		<StyledCard.Inner>
			{/* <StyledCard.Doodle src={doodle}></StyledCard.Doodle> */}
			<StyledCard.Title>{title}</StyledCard.Title>
			<StyledCard.Description>{description}</StyledCard.Description>
		</StyledCard.Inner>
	);
};

export default CardService;
