import React from "react";
import { Styled } from "./styles";

const Footer = () => {
	return (
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
	);
};

export default Footer;
