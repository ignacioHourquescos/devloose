import React from "react";
import { StyledCard } from "./styles.js";

const CardService = () => {
	return (
		<StyledCard.Inner>
			<StyledCard.Title>Mobile & Web Development</StyledCard.Title>
			<StyledCard.Description>
				Custom development, of scalable sites and applications, built with
				progressive frameworks (React, Vue) and a different set of backend
				technologies (Node, C#, Net) and database schema (MySql, mongoDB,
				Firebase).
			</StyledCard.Description>
		</StyledCard.Inner>
	);
};

export default CardService;
