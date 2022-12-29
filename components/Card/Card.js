import { StyledCard } from "./styles.js";
import { FaReact } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { useInView } from "react-intersection-observer";
import { InView } from "react-intersection-observer";
import { useEffect } from "react";
import {
	motion,
	useMotionValue,
	useAnimation,
	useTransform,
} from "framer-motion";

const Card = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	console.log("aca esta si se ve o no:", inView);
	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	return (
		<InView>
			<StyledCard.Inner>
				<StyledCard.DataContainer />
				<StyledCard.ImageContainer animate={inView} />
				<StyledCard.Data>
					<StyledCard.Title>Rebuilding software</StyledCard.Title>
					<StyledCard.Brief>
						UI developemnt on a microfront end architecutre. Minimalist and
						differetn flow sin order to mantainr high quality usability
					</StyledCard.Brief>
					<StyledCard.Technologies>
						<FaReact />
						<SiStyledcomponents />
					</StyledCard.Technologies>
					<StyledCard.Visit>VISIT</StyledCard.Visit>
				</StyledCard.Data>

				<StyledCard.Image>image</StyledCard.Image>
			</StyledCard.Inner>
		</InView>
	);
};

export default Card;
