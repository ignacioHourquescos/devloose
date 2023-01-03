import { StyledCard } from "./styles.js";
import { FaReact } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { animated } from "@react-spring/web";
import { useRef, useEffect, useState } from "react";
import useViewPort from "../../../hooks/useViewPort.js";
import { HeaderStyle, BriefAnimation, Zanimation1 } from "./zanimations.js";
import Button from "../../common/Button/Button.js";

const Card = () => {
	const triggerRef = useRef();
	const dataRef = useViewPort(triggerRef, { freezeOnceVisible: true });

	return (
		<>
			<StyledCard.Inner>
				<StyledCard.DataContainer />
				<StyledCard.ImageContainer
					as={animated.div}
					style={Zanimation1(dataRef)}
				/>
				<StyledCard.Data>
					<StyledCard.Title>Rebuilding software</StyledCard.Title>
					<StyledCard.Brief style={BriefAnimation(dataRef)}>
						UI developemnt on a microfront end architecutre. Minimalist and
						differetn flow sin order to mantainr high quality usability
					</StyledCard.Brief>
					<StyledCard.Technologies style={HeaderStyle(dataRef)}>
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
