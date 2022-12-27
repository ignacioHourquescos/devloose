import React from "react";
import Hero from "./components/index";
import { Container } from "./styles";

const Header = () => {
	return (
		<Container>
			<Hero>
				<Hero.Title>Devloose</Hero.Title>
				<Hero.Logo />
			</Hero>
		</Container>
	);
};

export default Header;
