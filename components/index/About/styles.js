import styled from "styled-components";
import UTILS from "../../../utils/utils";

export const StyledIntro = {
	Inner: styled.div`
		border: ${UTILS.DRAFT};
		width: 100%;
		padding: 10%;
		display: flex;
		flex-direction: column;
		align-content: center;
		align-items: center;
		justify-content: flex-start;

		@media ${UTILS.SCREEN.MOBILE} {
			width: 100%;
			padding-top: 20%;
		}
	`,
	Title: styled.div`
		font-size: 2.5rem;
		text-align: center;
		@media ${UTILS.SCREEN.MOBILE} {
			font-size: 2rem;
			margin-bottom: 20%;
		}
	`,
	Brief: styled.div`
		font-size: 1rem;
		text-align: center;
		@media ${UTILS.SCREEN.MOBILE} {
			font-size: 1.4rem;
			margin-bottom: 10%;

			font-weight: 400;
		}
	`,
};
