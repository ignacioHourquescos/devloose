import styled from "styled-components";
import UTILS from "../../../utils/utils";
import { motion } from "framer-motion";
import variants from "./animation";

export const StyledButton = {
	Primary: styled.span`
		border: 1px solid ${UTILS.COLORS.WHITE};
		padding: 0.5rem 1rem;
		border-radius: 50px;
		color: ${UTILS.COLORS.WHITE};

		&:hover {
			background-color: ${UTILS.COLORS.BLACK};
			color: ${UTILS.COLORS.WHITE};
		}
	`,
};
