import styled from "styled-components";
import UTILS from "../../../utils/utils";
import { motion } from "framer-motion";
import variants from "./animation";

export const StyledButton = {
  Primary: styled.span`
    border: 1px solid ${UTILS.COLORS.GREEN};
    padding: 0.5rem 1rem;
    border-radius: 50px;
    color: ${UTILS.COLORS.GREEN};
	background-color: ${UTILS.COLORS.GREEN},
	opacity:0.5;

    &:hover {
      background-color: ${UTILS.COLORS.BLACK};
      color: ${UTILS.COLORS.WHITE};
    }
  `,
};
