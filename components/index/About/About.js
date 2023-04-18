import react from "react";
import { Styled } from "./styles.js";

// import Icon from "./components/Icon/Icon.js";

const About = () => {
	return (
		<Styled.Inner>
			<Styled.Title>
				We are <br />
				<Styled.Highlight>
					designers, developers & creators
				</Styled.Highlight>
				<br />
				helping startups and organizations
				<br />
				succed in the digital era.
			</Styled.Title>
		</Styled.Inner>
	);
};

export default About;
