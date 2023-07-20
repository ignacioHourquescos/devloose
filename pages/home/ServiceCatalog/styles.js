import styled from "styled-components";
import UTILS from "../../../utils/utils";
export const Styled = {
	Inner: styled.div`
		padding-top: 5%;
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
		justigy-content: center;
		width: 80%;
		padding: 10%;
		padding-top: 0;
		@media ${UTILS.SCREEN.MOBILE} {
			width: 100%;
			padding: 0%;
			flex-wrap: wrap;
		}
	`,
};
