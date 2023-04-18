import React from "react";
import Button from "../Button/Button.js";
import { StyledLogo } from "./styles.js";
import { Styled } from "../../index/OurWorkCard/styles.js";
import Image from "next/image.js";

const Logo = () => {
	return (
		<StyledLogo.Inner>
			<StyledLogo.LogoContainer>
				<Image
					alt="Picture of the author"
					width={300}
					height={50}
					src="/logoFirstVersion.png"
				/>
			</StyledLogo.LogoContainer>

			<StyledLogo.Subtitle>YOUR DIGITAL PARTNER</StyledLogo.Subtitle>
		</StyledLogo.Inner>
	);
};

export default Logo;
