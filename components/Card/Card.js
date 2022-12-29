import { StyledCard } from "./styles.js";
import { FaReact } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { animated } from "@react-spring/web";
import { useRef, useEffect, useState } from "react";
import onViewPort from "../../hooks/onViewPort.js";
import {
	headerStyle,
	BriefAnimation,
	ImageContainerAnimation,
} from "./Animations.js";

const Card = () => {
	const triggerRef = useRef();
	const dataRef = onViewPort(triggerRef, { freezeOnceVisible: true });

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
					<StyledCard.Visit>VISIT</StyledCard.Visit>
					<div ref={triggerRef} />
				</StyledCard.Data>

				<StyledCard.Image>image</StyledCard.Image>
			</StyledCard.Inner>
		</>
	);
};

export default Card;
