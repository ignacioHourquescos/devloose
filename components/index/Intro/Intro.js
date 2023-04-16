import react from "react";
import { StyledIntro } from "./styles.js";
import Ingredients from "../Ingredients/Ingredients.js";
// import Icon from "./components/Icon/Icon.js";

const Intro = () => {
	return (
		<StyledIntro.Inner>
			<StyledIntro.Title>
				We are a <u>creative, design & development partner</u>, seeking
				to help startups and organizations succced in the digital era.
			</StyledIntro.Title>
			<StyledIntro.Brief>
				From ideation phase to launch time.
				<br />
				We innovate.
				<br />
				We keep it simple.
			</StyledIntro.Brief>
		</StyledIntro.Inner>
	);
};

export default Intro;
