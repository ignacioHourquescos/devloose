import { StyledCard } from "./styles.js";
import { FaReact } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { useRef, useEffect, useState } from "react";
import useViewPort from "../../../hooks/useViewPort.js";
import Button from "../../common/Button/Button.js";
import { useInView } from "react-intersection-observer";

const Card = () => {
	const [ref, inView] = useInView();

	return (
		<>
			<StyledCard.Inner>
				<div ref={ref} />
				<StyledCard.DataContainer />
				<StyledCard.ImageContainer animate={inView && "translateLeftToRight"} />
				<StyledCard.Data>
					<StyledCard.Title>Rebuilding software</StyledCard.Title>
					<StyledCard.Brief initial="hidden" animate={inView && "fadeIn"}>
						UI developemnt on a microfront end architecutre. Minimalist and
						differetn flow sin order to mantainr high quality usability
					</StyledCard.Brief>
					<StyledCard.Technologies
						initial="hidden"
						animate={inView && "fadeIn"}
					>
						<FaReact />
						<SiStyledcomponents />
					</StyledCard.Technologies>
					<StyledCard.Visit>
						<Button>VISIT</Button>
					</StyledCard.Visit>
				</StyledCard.Data>

				<StyledCard.Image>image</StyledCard.Image>
			</StyledCard.Inner>
		</>
	);
};

export default Card;
