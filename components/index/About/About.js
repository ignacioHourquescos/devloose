import react from "react";
import { StyledIntro } from "./styles.js";

// import Icon from "./components/Icon/Icon.js";

const About = () => {
	return (
		<StyledIntro.Inner>
			<StyledIntro.Title>
				We are <u>creatives, designers & developers </u>, seeking to
				help startups and organizations succced in the digital era.
			</StyledIntro.Title>
		</StyledIntro.Inner>
	);
};

export default About;
