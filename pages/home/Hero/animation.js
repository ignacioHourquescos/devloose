import UTILS from "../../../utils/utils";

// prettier-ignore

const variants = {
	visible: {
		opacity: 1,
		scale: 1,
		borderRadius: "200px",
		transition: { duration: 2 },
		 backgroundColor: UTILS.COLORS.CARMINE,
	},
	hidden: {
     opacity: 1, 
     scale: 10 
    },
	translate: {
		translateY: "-500px",
		transition: { duration: 3, delay:5 },
	},
  displayNone:{
    opacity:0,
    transition: { duration: 2,  }
  }
};

export default variants;
