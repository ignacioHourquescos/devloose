import { useState } from "react";
import Header from "../components/index/Header/Header";
import Card from "../components/index/Card/Card";
import CardService from "../components/index/CardServices/CardServices";
import Container from "../styles/styles.js";
import Profile from "../components/index/Profile/Profile";
import Technologies from "../components/index/Technologies/Technologies";
import Intro from "../components/index/Intro/Intro";
import Footer from "../components/index/Footer/Footer";

const Home = () => {
	const [displayHome, setDisplayHome] = useState(false);

	const displayHomeHandler = () => {
		setDisplayHome(true);
	};

	return (
		<Container.Master>
			<Header displayHomeHandler={displayHomeHandler} />
			{displayHome && (
				<>
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
				</>
			)}
		</Container.Master>
	);
};

export default Home;
