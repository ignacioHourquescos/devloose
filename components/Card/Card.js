import { StyledCard } from "./styles.js";
import { FaReact } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { animated, useSpring } from "@react-spring/web";
import { useRef, useEffect, useState } from "react";
import onViewPort from "../../hooks/onViewPort.js";
import { useInView } from "react-intersection-observer";

const Card = () => {
	const triggerRef = useRef();
	const dataRef = onViewPort(triggerRef, {
		freezeOnceVisible: true,
	});

	const headerStyle = useSpring({
		config: { duration: 2000 },
		from: { opacity: 0, left: "-500px", rotate: 0 },
		to: {
			opacity: dataRef?.isIntersecting ? 1 : 0,
			left: dataRef?.isIntersecting ? "0px" : "-500px",
		},
	});
	return (
		<>
			{" "}
			<div ref={triggerRef} />
			{dataRef?.isIntersecting ? (
				<StyledCard.Inner>
					<StyledCard.DataContainer style={headerStyle} trigger={dataRef} />
					<StyledCard.ImageContainer />
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
			) : (
				""
			)}
		</>
	);
};

export default Card;
