import React from "react";
import Button from "../Button/Button.js";
import { StyledLogo } from "./styles.js";

const Logo = () => {
	return (
		<StyledLogo.Inner>
			<StyledLogo.Title>DEVLOOSE</StyledLogo.Title>
			<StyledLogo.Subtitle>DIGITAL FACTORY</StyledLogo.Subtitle>
		</StyledLogo.Inner>
	);
};

export default Logo;
