import { StyledCard } from "./styles.js";
import { FaReact } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { animated } from "@react-spring/web";
import { useRef, useEffect, useState } from "react";
import useViewPort from "../../hooks/useViewPort.js";
import {
	headerStyle,
	BriefAnimation,
	ImageContainerAnimation,
} from "./zanimations.js";
import Button from "../../UI/Button/Button.js";

const Card = () => {
	const triggerRef = useRef();
	const dataRef = useViewPort(triggerRef, { freezeOnceVisible: true });

	return (
		<>
			<StyledCard.Inner>
				<StyledCard.DataContainer />
				<StyledCard.ImageContainer
					as={animated.div}
					style={ImageContainerAnimation(dataRef)}
				/>
				<StyledCard.Data>
					<StyledCard.Title>Rebuilding software</StyledCard.Title>
					<StyledCard.Brief as={animated.div} style={BriefAnimation(dataRef)}>
						UI developemnt on a microfront end architecutre. Minimalist and
						differetn flow sin order to mantainr high quality usability
					</StyledCard.Brief>
					<StyledCard.Technologies
						as={animated.div}
						style={headerStyle(dataRef)}
					>
						<FaReact />
						<SiStyledcomponents />
					</StyledCard.Technologies>
					<StyledCard.Visit>
						<Button>VISIT</Button>
					</StyledCard.Visit>
					<div ref={triggerRef} />
				</StyledCard.Data>

				<StyledCard.Image>image</StyledCard.Image>
			</StyledCard.Inner>
		</>
	);
};

export default Card;
