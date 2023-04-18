import React, { useState } from "react";
import { Styled } from "./styles.js";

const Menu = ({ rendererHandler, initialValueMenuItem }) => {
	const [isActive, setIsActive] = useState("Home");

	const setIsActiveHandler = (element) => {
		setIsActive(element);
	};

	const onClickHandler = (value) => {
		rendererHandler(value);
		setIsActiveHandler(value);
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};
	return (
		<Styled.Inner>
			<Styled.MenuItem
				active={isActive == "Home"}
				onClick={() => {
					onClickHandler("Home");
				}}
			>
				HOME
			</Styled.MenuItem>

			<Styled.MenuItem
				active={isActive == "OurWork"}
				onClick={() => {
					onClickHandler("OurWork");
				}}
			>
				PROJECTS
			</Styled.MenuItem>
			<Styled.MenuItem
				active={isActive == "Capabilities"}
				onClick={() => {
					onClickHandler("Capabilities");
				}}
			>
				MORE
			</Styled.MenuItem>
		</Styled.Inner>
	);
};

export default Menu;
