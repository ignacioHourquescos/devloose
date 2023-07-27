import React from "react";
import { StyledCard } from "./styles.js";
import { Box } from "@mui/material";
import Link from "next/link.js";

const CardService = ({ title, description, doodle, slug }) => {
	return (
		<StyledCard.Inner>
			<Box elevation={6}>
				<StyledCard.Title>{title}</StyledCard.Title>
				<StyledCard.Description>{description}</StyledCard.Description>
				<Link href={slug}>
					<StyledCard.Button>Mas detalle</StyledCard.Button>
				</Link>
			</Box>
		</StyledCard.Inner>
	);
};

export default CardService;
