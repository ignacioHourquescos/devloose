import React from "react";
import { Styled } from "./styles.js";
import Image from "next/image.js";
import Universe from "./universe/Universe.js";

const Hero = ({ show }) => {
	return (
		<Styled.Inner>
			<Universe show={show} />
			<Styled.Title>Custom software & Web Design</Styled.Title>
			<Styled.SubTitle>
				Del concepto a la ejecución, convertimos desafíos en soluciones
				digitales.{" "}
			</Styled.SubTitle>
		</Styled.Inner>
	);
};

export default Hero;
