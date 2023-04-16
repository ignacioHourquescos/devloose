import react from "react";
import { Styled } from "./styles.js";
import Button from "../../../common/Button/Button.js";

// import Icon from "./components/Icon/Icon.js";

const ContactForm = ({ displayContactFormHandler }) => {
	return (
		<Styled.Inner onClick={() => displayContactFormHandler(false)}>
			<Styled.Image src="./contactPunch.png" />
			<Styled.Text>liftoff@devloose.com</Styled.Text>
			<Styled.Text>11 6510 6333</Styled.Text>
		</Styled.Inner>
	);
};

export default ContactForm;
