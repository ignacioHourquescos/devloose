import React from "react";
import { Styled } from "./styles.js";
import { useEffect } from "react";
import { useState } from "react";

const Footer = (props) => {
	const [color, setColor] = useState("red");
	useEffect(() => {
		const interval = setInterval(() => {
			setColor((prevColor) => (prevColor === "red" ? "blue" : "red"));
		}, 5000);

		return () => {
			clearInterval(interval);
		};
	}, []);
	return (
		<Styled.Inner>
			<Styled.Image src="./contactPunch.png" />
			<Styled.Text>Bs. As. Argentina</Styled.Text>
			<Styled.Text>hola@devloose.com</Styled.Text>
		</Styled.Inner>
	);
};

export default Footer;
