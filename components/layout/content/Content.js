import React from "react";
import { Styled } from "./styles";

const Content = ({ children }) => {
	return <Styled.Inner>{children}</Styled.Inner>;
};

export default Content;
