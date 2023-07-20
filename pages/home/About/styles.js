import styled from "styled-components";
import UTILS from "../../../utils/utils";

export const Styled = {
	Inner: styled.div`
		border: ${UTILS.DRAFT};
		width: 80%;
		padding: 10%;
		height: 60vh;

		display: flex;
		flex-direction: column;
		align-content: center;
		align-items: center;
		justify-content: center;
		padding: 10%;
		background-color: #190d2a;
		color: white;

		@media ${UTILS.SCREEN.MOBILE} {
			width: 80%;
			padding: 30% 10%;
		}
	`,
	Title: styled.div`
		font-size: 2.5rem;
		text-align: center;
		@media ${UTILS.SCREEN.MOBILE} {
			font-size: 2rem;
			margin-bottom: 20%;
			text-align: left;
		}
	`,
	Highlight: styled.span`
		font-size: 2.5rem;
		text-align: center;
		font-weight: bold;
		color: ${UTILS.COLORS.GREEN};
		@media ${UTILS.SCREEN.MOBILE} {
			font-size: 2rem;
			margin-bottom: 20%;
		}
	`,
};
