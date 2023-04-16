import React, { useState } from "react";
import { Styled } from "./styles.js";
import { IoChatboxOutline } from "react-icons/io5";
import ContactForm from "./components/ContactForm.js";

const Contact = ({ displayContactFormHandler }) => {
	return (
		<Styled.Inner>
			<Styled.Container onClick={() => displayContactFormHandler(true)}>
				<IoChatboxOutline color="white" />
			</Styled.Container>
		</Styled.Inner>
	);
};

export default Contact;
