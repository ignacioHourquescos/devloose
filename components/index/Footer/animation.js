/* eslint-disable react-hooks/rules-of-hooks */
import { useSpring } from "@react-spring/web";
import { easings } from "@react-spring/web";
import UTILS from "../../../utils/utils";

export const backgroundAnimation = (dataRef) => {
	return useSpring({
		delay: 700,
		transform: `scale(10)`,
		backgroundColor: UTILS.COLORS.BLACK,
		config: {
			duration: 1800,
			tension: 120,
			tension: 400,
			mass: 2,
			velocity: 5,
		},
		from: {
			opacity: 1,
			borderRadius: `200px`,
			transform: `scale(1)`,
			backgroundColor: UTILS.COLORS.BLACK,
		},
		to: {
			opacity: dataRef ? 1 : 1,
			borderRadius: dataRef ? `200px` : `0px`,
			transform: dataRef ? `scale(10)` : `scale(1)`,
			backgroundColor: dataRef ? UTILS.COLORS.CARMINE : UTILS.COLORS.BLACK,
		},
	});
};

export const rocketAnimation = (dataRef) => {
	return useSpring({
		delay: 50,
		config: {
			easing: easings.easeOutCubic,
			delay: 1000,
			duration: 2500,
			tension: 120,
			tension: 400,
			mass: 2,
			velocity: 5,
		},
		from: {
			transform: "translateY(-500px)",
			// opacity: 1,
		},
		to: {
			transform: dataRef ? "translateY(0%)" : "translateY(-500px)",
			// opacity: dataRef ? 0 : 1,
		},
	});
};
