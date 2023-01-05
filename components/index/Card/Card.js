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
		// prettier-ignore
		<>
			<StyledCard.Inner>
				<div ref={ref} />
				<StyledCard.DataContainer />
				<StyledCard.ImageContainer 
          animate={inView && "fadeIn"} 
            
          />
				<StyledCard.Data>
					<StyledCard.Title 
            content={props.title} />
					<StyledCard.Brief 
            initial="hidden" 
            animate={inView && "fadeIn"}
             content={props.brief} />
			
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
        <Button>VISIT</Button>
				<StyledCard.Image>image</StyledCard.Image>
			</StyledCard.Inner>
		</>
	);
};

export default Card;
