import { StyledCard } from "./styles.js";
import { FaReact } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { useRef, useEffect, useState } from "react";
import useViewPort from "../../../hooks/useViewPort.js";
import Button from "../../common/Button/Button.js";
import { useInView } from "react-intersection-observer";

const Card = (props) => {
	const [ref, inView] = useInView();

	return (
		<>
			<StyledCard.Inner>
				<div ref={ref} />
				{/* <StyledCard.DataContainer /> */}

				<StyledCard.Data>
					<StyledCard.ImageContainer
						animate={inView && "fadeIn"}
						// image={props.image}
					>
						<StyledCard.Image src={props.image}></StyledCard.Image>
					</StyledCard.ImageContainer>
					<StyledCard.Title content={props.title} />
					<StyledCard.Brief
						initial="hidden"
						animate={inView && "fadeIn"}
						content={props.brief}
					/>

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
			</StyledCard.Inner>
		</>
	);
};

export default Card;
