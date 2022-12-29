import { useState } from "react";
import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import CardService from "../components/CardServices/CardServices";
import Container from "../styles/styles.js";
import Profile from "../components/Profile/Profile";
import Technologies from "../components/Technologies/Technologies";
import Intro from "../components/Intro/Intro";
import Footer from "../components/Footer/Footer";

const Home = () => {
	return (
		<Container.Master>
			<Header />
			<Container.Intro>
				<Intro />
			</Container.Intro>
			<Card />
			<Card />
			<Card />
			<Container.CardService>
				<CardService />
				<CardService />
				<CardService />
				<CardService />
			</Container.CardService>
			<Container.Profile>
				<Profile />
				<Profile />
				<Profile />
				<Profile />
			</Container.Profile>
			<Container.Technologies>
				<Technologies />
			</Container.Technologies>
			<Container.Footer>
				<Footer />
			</Container.Footer>
		</Container.Master>
	);
};

export default Home;
