import React from "react";
import { Styled } from "./styles";

const SubHeader = (props) => {
	return (
		<Styled.Inner>
			<Styled.Title>{props.title}</Styled.Title>
			<Styled.SubTitle>{props.subtitle}</Styled.SubTitle>
		</Styled.Inner>
	);
};

export default SubHeader;
