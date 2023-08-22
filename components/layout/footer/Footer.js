import React from "react";
import { Styled, Gradient } from "./styles";

import Image from "next/image";

const Footer = () => {
	return (
		<>
			<Styled.SvgContainer>{curvature}</Styled.SvgContainer>

			<Styled.FooterContainer>
				<Styled.LeftSection>
					<Styled.Link href="#">Contacto</Styled.Link>
					<Styled.Link href="#">Política de privacidad</Styled.Link>
				</Styled.LeftSection>
				<Styled.RightSection>
					<div>2023</div>
					<Styled.Copyright>Propulz©️</Styled.Copyright>
				</Styled.RightSection>
			</Styled.FooterContainer>
		</>
	);
};

export default Footer;

const curvature = (
	<svg
		width="100%"
		height="100%"
		viewBox="0 0 1996 147"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		preserveAspectRatio="none"
	>
		<path
			d="M1996 147H0C0 147 446.82 0 998 0C1549.18 0 1996 147 1996 147Z"
			fill="#241B17"
		/>
	</svg>
);
