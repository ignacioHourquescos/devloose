import React from "react";
import { StyledCard } from "./styles.js";
import { Box } from "@mui/material";

const CardService = ({ title, description, doodle, number }) => {
	return (
		<StyledCard.Inner>
			<Box elevation={6}>
				<StyledCard.Title>{title}</StyledCard.Title>
				<StyledCard.Description>{description}</StyledCard.Description>
				<StyledCard.Button>Mas detalle</StyledCard.Button>
			</Box>
		</StyledCard.Inner>
	);
};

export default CardService;
