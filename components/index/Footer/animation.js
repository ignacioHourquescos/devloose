import UTILS from "../../../utils/utils";

// prettier-ignore
const variants = {
	visible: {
		opacity: 1,
		scale: 1,
		borderRadius: "200px",
		transition: { duration: 2.5 },
		backgroundColor: UTILS.COLORS.BLACK,
	},
	hidden: { 
    opacity: 1, 
    scale: 10,
    transition: { duration: 3 }, 
  },
	translate: {
		translateY: "500px",
		transition: { duration: 3 },
	},

};

export default variants;
