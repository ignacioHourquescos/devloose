import React from "react";
import Hero from "./components/index";
import { Container, LogoAnimationContainer } from "./styles";

const Header = () => {
	return (
		<Container>
			<Hero>
				<Hero.Title>Devloose</Hero.Title>
				<LogoAnimationContainer>
					<Hero.Logo />
					<Hero.Rocket />
					<Hero.OuterRocket />
					<Hero.Propulsion />
				</LogoAnimationContainer>
			</Hero>
		</Container>
	);
};

export default Header;
