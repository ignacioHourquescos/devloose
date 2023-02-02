import styled from "styled-components";
import UTILS from "../../../utils/utils";

export const Styled = {
	Inner: styled.div`
		border: ${UTILS.DRAFT};
		width: 80%;
		display: flex;
		flex-direction: column;
		align-content: center;
		align-items: center;
		height: 100%;
		${"" /* color: white; */}
		${"" /* background-color: ${UTILS.COLORS.BLACK}; */}
		@media ${UTILS.SCREEN.MOBILE} {
			width: 100%;
			padding: 0 10%;
			margin: 0;
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
			font-size: 1.4rem;
			margin-bottom: 10%;
			margin-top: 10%;
			font-weight: 400;
		}
	`,
};
