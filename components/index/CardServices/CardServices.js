import React from "react";
import { StyledCard } from "./styles.js";

const CardService = () => {
	return (
		<StyledCard.Inner>
			<StyledCard.Title>Product and service Design</StyledCard.Title>
			<StyledCard.Description>
				Creative widsom and technique in order to keep user satisfied. Easy to
				use products and services, maximizing funcionalities with simple to use
				{/* Interfaces Our creative a nd analytic teams deploy a design method that
				allows you to explore all of the ins, outs and features of your app
				before it’s built, maximizing functionality while minimizing risk and
				costs. When it’s time to start, we find the best design solution for
				your business. Our focus is to find the best User Experience and
				attractive User Interfaces, based on main functionalities and the
				principal architecture. In Chispa we design with the objective to
				achieving the best experience for users. For us everything is based on
				creating simple, easy-to-use products and services, so that users are
				delighted with the experience. We help you accelerate the building of
				new expertise and new ways to work in a user focused, digital-enabled
				environment. Custom development, of scalable sites and applications,
				built with progressive frameworks (React, Vue) and a different set of
				backend technologies (Node, C#, Net) and database schema (MySql,
				mongoDB, Firebase). */}
			</StyledCard.Description>
			<StyledCard.Title>Development</StyledCard.Title>
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
