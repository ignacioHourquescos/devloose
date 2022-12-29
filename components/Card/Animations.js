import { StyledCard } from "./styles.js";
import { FaReact } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { animated, useSpring } from "@react-spring/web";
import { useRef, useEffect, useState } from "react";
import onViewPort from "../../hooks/onViewPort.js";
import { useInView } from "react-intersection-observer";
import { easings } from "@react-spring/web";

export const headerStyle = (dataRef) => {
	return useSpring({
		config: {
			duration: 1500,
			mass: 500,
			friction: 120,
			tension: 120,
		},
		from: {
			opacity: 0,
		},
		to: {
			opacity: dataRef?.isIntersecting ? 1 : 0,
		},
	});
};

export const BriefAnimation = (dataRef) => {
	return useSpring({
		config: { duration: 2000 },
		from: { opacity: 0 },
		to: {
			opacity: dataRef?.isIntersecting ? 1 : 0,
		},
	});
};

export const ImageContainerAnimation = (dataRef) => {
	return useSpring({
		config: {
			duration: 1500,
			mass: 500,
			friction: 120,
			tension: 120,
		},
		from: {
			x: 0,
			opacity: 0,
		},
		to: {
			x: dataRef?.isIntersecting ? 0 : -100,
			opacity: dataRef?.isIntersecting ? 1 : 0,
		},
	});
};
