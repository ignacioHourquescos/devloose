import styled, { css, keyframes } from "styled-components";
import UTILS from "../../../utils/utils";

export const Styled = {
	Inner: styled.div`
		width: 80%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		padding: 10%;
		padding-top: 10%;

		@media ${UTILS.SCREEN.MOBILE} {
			padding-top: 30%;
		}
	`,
};
