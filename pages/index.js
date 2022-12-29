import { useState } from "react";
import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import { MasterContainer } from "./styles.js";

const Home = () => {
	return (
		<MasterContainer>
			<Header />
			<Card />
			<Card />
			<Card />
		</MasterContainer>
	);
};

export default Home;
