import styled from "styled-components";
import UTILS from "../../../utils/utils";

export const StyledIntro = {
	Inner: styled.div`
		border: ${UTILS.DRAFT};
		width: 80%;
		display: flex;
		flex-direction: column;
		align-content: center;
		align-items: center;
		height: 100%;
		@media ${UTILS.SCREEN.MOBILE} {
			width: 90%;
		}
	`,
	Title: styled.div`
		font-size: 2rem;
		text-align: center;
		@media ${UTILS.SCREEN.MOBILE} {
			font-size: 1.7rem;
			margin-bottom: 100%;
		}
	`,
};
