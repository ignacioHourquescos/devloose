import { useSpring } from "@react-spring/web";
import UTILS from "../../utils/utils";

export const HeaderStyle = (dataRef) => {
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

export const Zanimation1 = (dataRef) => {
	return useSpring({
		config: {
			duration: 1500,
			mass: 500,
			friction: 120,
			tension: 120,
		},
		from: {
			x: 0,
			y: 0,
			opacity: 0,
		},
		to: {
			x: dataRef?.isIntersecting || !UTILS.SCREEN.MOBILE ? 0 : -100,
			y: dataRef?.isIntersecting || UTILS.SCREEN.MOBILE ? 0 : 0,
			opacity: dataRef?.isIntersecting ? 1 : 0,
		},
	});
};
