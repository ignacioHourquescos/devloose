import React from "react";
import { Styled } from "./styles";
import Image from "next/image";

const Universe = (props) => {
	const { show } = props;

	return (
		<>
			{" "}
			{show ? (
				<Styled.RocketContainer>
					<Image src="/rocketUnlaunched.svg" width="100px" height="100px" />
				</Styled.RocketContainer>
			) : null}
			{show ? (
				<Styled.Inner show={show} id="containerElement">
					<Styled.Universe></Styled.Universe>
					<Styled.Gradient></Styled.Gradient>
				</Styled.Inner>
			) : null}
		</>
	);
};

export default Universe;
