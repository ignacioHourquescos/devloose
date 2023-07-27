import react from "react";
import { Styled } from "./styles.js";

// import Icon from "./components/Icon/Icon.js";

const About = () => {
	return (
		<Styled.Inner>
			<Styled.Title>
				<Styled.Highlight>
					<br />
					Desarrollo & Diseño
				</Styled.Highlight>
				<Styled.TextLine>
					para la creación de soluciones digitales.
				</Styled.TextLine>

				<Styled.TextLine>Desde la idea hasta el lanzamiento.</Styled.TextLine>
			</Styled.Title>
		</Styled.Inner>
	);
};

export default About;

// ENG: "We are designers, developers & creators helping startups and organizations succed in the digital era."
