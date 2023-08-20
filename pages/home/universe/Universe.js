import React from "react";
import { Styled } from "./styles";

const Universe = (props) => {
	const { show } = props;

	return show ? <Styled.Inner show={show}>Universe</Styled.Inner> : null;
};

export default Universe;
