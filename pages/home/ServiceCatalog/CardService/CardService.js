import React from "react";
import { StyledCard } from "./styles.js";
import { Box } from "@mui/material";
import Link from "next/link.js";

const CardService = ({ title, description, doodle, number, slug }) => {
	return (
		<StyledCard.Inner>
			<Box elevation={6}>
				<StyledCard.Title>{title}</StyledCard.Title>
				<StyledCard.Description>{description}</StyledCard.Description>
				<StyledCard.Button>
					<Link href={slug}>Mas detalle</Link>
				</StyledCard.Button>
			</Box>
		</StyledCard.Inner>
	);
};

export default CardService;
