import UTILS from "../../../utils/utils";

// prettier-ignore

const variants = {
  intial:{
    translateX: "-500px",
		transition: { duration: 3 },
  },

	hidden: {
     opacity: 0, 

    },
    fadeIn:{
      opacity: 1, 
      transition: { duration: 3 }
    },
  displayNone:{
    opacity:0,
    transition: { duration: 2 }
  },
  translateLeftToRight:{
    translateX: "400px",
		transition: { duration: 2 },
  }
  

};

export default variants;
