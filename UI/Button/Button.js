import React from "react";
import { StyledButton } from "./styles";
import useHover from "../../hooks/useHover";
import { animated } from "@react-spring/web";
import { headerStyle } from "./zanimation";

const Button = ({ children }) => {
	const [hoverRef, isHovered] = useHover();

	return (
		<StyledButton.Primary
			as={animated.span}
			ref={hoverRef}
			style={headerStyle(isHovered)}
		>
			{children}
		</StyledButton.Primary>
	);
};

export default Button;
