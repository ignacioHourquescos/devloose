import React from "react";
import { Inner, Logo, Title, Rocket, PulseButton } from "./styles";
import Image from "next/image";

const Hero = ({ children, ...restProps }) => {
	return <Inner {...restProps}>{children}</Inner>;
};

export default Hero;

Hero.Logo = ({ children, path, ...restProps }) => {
	return (
		<Image
			src="/logo.svg"
			alt="Picture of the author"
			width="200px"
			height="200px"
		/>
	);
};

Hero.Title = ({ children, path, ...restProps }) => {
	return <Title>{children}</Title>;
};

Hero.Animation = ({ children, path, ...restProps }) => {
	return <Title>{children}</Title>;
};

Hero.Rocket = ({ children, path, ...restProps }) => {
	return (
		<Rocket
			d={svgDrawings.rocket}
			fill="none"
			stroke="#232C3E"
			strokeWidth={4}
		/>
	);
};
