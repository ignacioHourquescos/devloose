import React from "react";
import { Styled } from "./styles.js";
import Image from "next/image.js";

const Logo = () => {
	return (
		<Styled.Inner>
			<Styled.LogoContainer>
				<Image
					alt="Picture of the author"
					width={300}
					height={50}
					src="/logoFirstVersion.png"
				/>
			</Styled.LogoContainer>
			<Styled.Subtitle>YOUR DIGITAL PARTNER</Styled.Subtitle>
		</Styled.Inner>
	);
};

export default Logo;
