import styled from "styled-components";
import UTILS from "../../utils/utils";

export const StyledIntro = {
	Inner: styled.div`
		border: ${UTILS.DRAFT};
		width: 80%;
		display: flex;
		flex-direction: column;
		align-content: center;
		align-items: center;
		@media ${UTILS.SCREEN.MOBILE} {
			width: 100%;
		}
	`,
	Title: styled.div`
		font-size: 2rem;
		text-align: center;
		@media ${UTILS.SCREEN.MOBILE} {
			font-size: 1.5rem;
		}
	`,
	Icons: styled.div`
		display: flex;
		@media ${UTILS.SCREEN.MOBILE} {
			font-size: 1.5rem;
		}
	`,
	Brief: styled.div`
		font-size: 1rem;
		text-align: center;
		@media ${UTILS.SCREEN.MOBILE} {
			font-size: 1rem;
		}
	`,
};
