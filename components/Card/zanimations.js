import { useSpring } from "@react-spring/web";

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
