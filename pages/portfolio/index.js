import { useState } from "react";
import Styled from "../../styles/styles.js";
import Menu from "../../components/Navegation/Menu/Menu.js";
import ContactForm from "../../components/index/Contact/components/ContactForm.js";
import OurWork from "../../components/index/OurWorkCard/OurWork.js";
import Contact from "../../components/index/Contact/Contact.js";

const Home = () => {
	const [displayHome, setDisplayHome] = useState(false);
	const [rendererReference, setRendererReference] = useState(false);
	const [initialValueMenuItem, setInitialValueMenuItem] = useState(false);
	const [displayContactForm, setDisplayContactForm] = useState(false);

	const displayHomeHandler = () => {
		setDisplayHome(true);
	};

	const rendererHandler = (selectedMenuItem) => {
		setRendererReference(selectedMenuItem);
	};

	const displayContactFormHandler = (value) => {
		setDisplayContactForm(value);
	};

	return (
		<>
			<Menu
				rendererHandler={(element) => rendererHandler(element)}
				initalValueMenuItem={initialValueMenuItem}
			/>

			{displayContactForm && (
				<ContactForm
					displayContactFormHandler={(element) =>
						displayContactFormHandler(element)
					}
				/>
			)}
			<Styled.Container>
				<OurWork />
				<Contact
					displayContactFormHandler={(element) =>
						displayContactFormHandler(element)
					}
				/>
			</Styled.Container>
		</>
	);
};

export default Home;
