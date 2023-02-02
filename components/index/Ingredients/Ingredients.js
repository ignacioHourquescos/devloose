import React from "react";
import Icon from "./components/Icon/Icon.js";
import { Styled } from "./styles.js";

const Ingredients = (props) => {
	return (
		<Styled.Inner>
			<br />
			<Styled.Brief>
				We combine 4 ingredients in order to obtain the specific recipe each
				project requires.
			</Styled.Brief>
			<Icon />
			<Styled.Brief>
				From ideation phase to launch time.
				<br />
				We innovate.
				<br />
				We keep it simple.
			</Styled.Brief>
		</Styled.Inner>
	);
};

export default Ingredients;
