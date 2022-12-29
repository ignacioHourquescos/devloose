import { useSpring } from "@react-spring/web";

export const zanimation1 = (dataRef) => {
	return useSpring({
		delay: 0,
		transform: `scale(1)`,
		config: {
			duration: 1500,
			tension: 120,
			tension: 400,
			mass: 2,
			velocity: 5,
		},
		from: {
			opacity: 1,
			borderRadius: `0px`,
			transform: `scale(10)`,
		},
		to: {
			opacity: dataRef ? 1 : 1,
			borderRadius: dataRef ? `200px` : `0px`,
			transform: dataRef ? `scale(1)` : `scale(10)`,
		},
	});
};

export const zanimation2 = (dataRef) => {
	return useSpring({
		delay: 200,
		config: {
			delay: 1000,
			duration: 2500,
			tension: 120,
			tension: 400,
			mass: 2,
			velocity: 5,
		},
		from: {
			transform: "translateY(0%)",
		},
		to: { transform: dataRef ? "translateY(-500px)" : "translateY(0%)" },
	});
};
