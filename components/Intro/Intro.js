import react from "react";
import { StyledIntro } from "./styles.js";
import Icon from "./components/Icon/Icon.js";

const Intro = () => {
	return (
		<StyledIntro.Inner>
			<StyledIntro.Title>
				We combine 4 ingredients in order to obtain the specific recipe each
				project requires.
			</StyledIntro.Title>
			<Icon></Icon>
			<StyledIntro.Brief>
				We combine 4 ingredients in order to obtain the specific recipe each
				project requires.
			</StyledIntro.Brief>
		</StyledIntro.Inner>
	);
};

export default Intro;
