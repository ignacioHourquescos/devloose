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
	};
	return (
		<Styled.Inner>
			<Styled.MenuItem
				active={isActive == "Home"}
				onClick={() => {
					onClickHandler("Home");
				}}
			>
				Home
			</Styled.MenuItem>
			<Styled.MenuItem
				active={isActive == "About"}
				onClick={() => {
					onClickHandler("About");
				}}
			>
				About
			</Styled.MenuItem>
			<Styled.MenuItem
				active={isActive == "OurWork"}
				onClick={() => {
					onClickHandler("OurWork");
				}}
			>
				OurWork
			</Styled.MenuItem>
			<Styled.MenuItem
				active={isActive == "Services"}
				onClick={() => {
					onClickHandler("Services");
				}}
			>
				Services
			</Styled.MenuItem>
			<Styled.MenuItem
				active={isActive == "Capabilities"}
				onClick={() => {
					onClickHandler("Capabilities");
				}}
			>
				Capabilities
			</Styled.MenuItem>
		</Styled.Inner>
	);
};

export default Menu;
