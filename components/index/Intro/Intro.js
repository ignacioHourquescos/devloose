import react from "react";
import { StyledIntro } from "./styles.js";
// import Icon from "./components/Icon/Icon.js";

const Intro = () => {
	return (
		<StyledIntro.Inner>
			<StyledIntro.Title>
				We are a <u>design and development partner</u>, seeking to help startups
				and organizations succced in the digital era.
			</StyledIntro.Title>
		</StyledIntro.Inner>
	);
};

export default Intro;
