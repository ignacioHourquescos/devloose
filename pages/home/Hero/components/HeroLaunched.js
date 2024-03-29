import React from "react";
import { Styled } from "./styles.js";
import Image from "next/image.js";

import { TbTriangleInverted } from "react-icons/tb";

const HeroLaunched = () => {
	const goToTop = () => {
		window.scrollTo({
			top: 200,
			behavior: "smooth",
		});
	};
	return (
		<Styled.Inner onClick={goToTop}>
			<Styled.LogoContainer>
				<Styled.Name>PROPULZ</Styled.Name>
			</Styled.LogoContainer>

			<Styled.Subtitle>ELEVA TUS IDEAS</Styled.Subtitle>
			<Styled.Bounce>
				<TbTriangleInverted size={35} />
			</Styled.Bounce>
		</Styled.Inner>
	);
};

export default HeroLaunched;
