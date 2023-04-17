import React, { useState } from "react";
import { Styled } from "./styles.js";
import { TbBrandTelegram } from "react-icons/tb";
import ContactForm from "./components/ContactForm.js";

const Contact = ({ displayContactFormHandler }) => {
	return (
		<Styled.Inner>
			<Styled.Container onClick={() => displayContactFormHandler(true)}>
				<TbBrandTelegram color="white" />
			</Styled.Container>
		</Styled.Inner>
	);
};

export default Contact;
