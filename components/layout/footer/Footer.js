import React from "react";
import { Styled } from "./styles.js";

const Footer = (props) => {
	return (
		<Styled.Inner>
			<Styled.Image src="./contactPunch.png" />
			<Styled.Text>Bs. As. Argentina</Styled.Text>
			<Styled.Text>hola@devloose.com</Styled.Text>
		</Styled.Inner>
	);
};

export default Footer;
