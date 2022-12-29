import styled from "styled-components";
import UTILS from "../../utils/utils";

export const StyledButton = {
	Primary: styled.span`
		border: 1px solid ${UTILS.COLORS.BLACK};
		padding: 0.5rem 1rem;
		border-radius: 50px;
		${
			"" /* &:hover {
			background-color: ${UTILS.COLORS.BLACK};
			color: ${UTILS.COLORS.WHITE};
		} */
		}
	`,
};
