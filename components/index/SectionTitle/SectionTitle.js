import React from "react";
import { Styled } from "./styles.js";

export default function SectionTitle({ children }) {
	return (
		<Styled.Inner>
			<Styled.Title>{children}</Styled.Title>
			<Styled.UnderlineBlock />
		</Styled.Inner>
	);
}
