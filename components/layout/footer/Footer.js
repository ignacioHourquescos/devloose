import React from "react";
import { Styled } from "./styles.js";
import { useEffect } from "react";
import { useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import Link from "next/link.js";

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
			<Styled.Image src="./logo_blanco.png" />
			<Styled.Punch>De la idea a la acción.</Styled.Punch>
			<Styled.Text>Bs. As. Argentina</Styled.Text>
			{/* <Styled.Text>hola@devloose.com</Styled.Text> */}

			<Link href="https://www.linkedin.com/company/devloose">
				<AiFillLinkedin size={35} />
			</Link>
		</Styled.Inner>
	);
};

export default Footer;
