import React from "react";
import { Styled } from "./styles.js";
import Image from "next/image.js";

const Hero = ({}) => {
	return (
		<Styled.Inner>
			<Styled.Title>Custom software & Web Design</Styled.Title>
			<Styled.SubTitle>
				Del concepto a la ejecución, convertimos desafíos en soluciones
				digitales.{" "}
			</Styled.SubTitle>
		</Styled.Inner>
	);
};

export default Hero;
