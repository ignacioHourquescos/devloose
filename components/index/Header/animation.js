import UTILS from "../../../utils/utils";

const variants = {
	visible: {
		opacity: 1,
		scale: 1,
		borderRadius: "200px",
		transition: { duration: 2.5 },
		backgroundColor: UTILS.COLORS.CARMINE,
	},
	hidden: { opacity: 1, scale: 10 },
	translate: {
		translateY: "-500px",
		transition: { duration: 3 },
	},
};

export default variants;
