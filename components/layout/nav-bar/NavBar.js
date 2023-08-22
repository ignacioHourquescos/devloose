import React, { useState } from "react";
import { Styled } from "./styles.js";
import Link from "next/link.js";
import Image from "next/image.js";

const NavBar = ({ rendererHandler, initialValueNavBarItem }) => {
	return (
		<Styled.Inner>
			<Styled.Logo>
				<Image src="/propulz/logo.png" width="100vw" height="40vh" />
			</Styled.Logo>
			<Styled.NavBarItem>
				<Link href="/">HOME</Link>
			</Styled.NavBarItem>
			<Styled.NavBarItem>
				<Link href="/projects">PORTFOLIO</Link>
			</Styled.NavBarItem>
			<Styled.NavBarItem>
				{" "}
				<Link href="/services">MAS</Link>
			</Styled.NavBarItem>
			<Styled.NavBarItem>
				{" "}
				<Link href="/contact">CONTACTO</Link>
			</Styled.NavBarItem>
		</Styled.Inner>
	);
};

export default NavBar;
