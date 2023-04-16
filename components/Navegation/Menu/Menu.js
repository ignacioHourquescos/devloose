import React from "react";
import { Styled } from "./styles.js";

const Menu = ({ rendererHandler }) => {
	return (
		<Styled.Inner>
			<Styled.MenuItem onClick={() => rendererHandler("Home")}>
				Home
			</Styled.MenuItem>
			<Styled.MenuItem onClick={() => rendererHandler("About")}>
				About
			</Styled.MenuItem>
			<Styled.MenuItem onClick={() => rendererHandler("OurWork")}>
				OurWork
			</Styled.MenuItem>
			<Styled.MenuItem onClick={() => rendererHandler("Services")}>
				Services
			</Styled.MenuItem>
			<Styled.MenuItem onClick={() => rendererHandler("Capabilities")}>
				Capabilities
			</Styled.MenuItem>
		</Styled.Inner>
	);
};

export default Menu;
