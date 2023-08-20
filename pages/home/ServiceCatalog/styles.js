import styled from "styled-components";
import UTILS from "../../../utils/utils";
export const Styled = {
	Inner: styled.div`
		padding: 5% 0;
		background-image: url("/propulz/background.png");
		background-size: cover;

		@media ${UTILS.SCREEN.MOBILE} {
			width: 100%;
			padding: 0%;
			padding-top: 15%;
			flex-wrap: wrap;
		}
	`,
	CardContainer: styled.div`
		display: flex;
		flex-direction: row;
		flex-wrap: no-wrap;
		justify-content: center;
		width: 80%;
		padding: 5% 10%;

		@media ${UTILS.SCREEN.MOBILE} {
			width: 100%;
			padding: 0%;
			flex-wrap: wrap;
		}
	`,
};
