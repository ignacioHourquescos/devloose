import styled from "styled-components";
import UTILS from "../../../utils/utils";

export const Styled = {
	Inner: styled.div`
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		height: 100%;
		width: 80%;
		padding: 0% 0%;
		padding: 10%;
		padding-bottom: 20%;
		${"" /* padding-top: 20%; */}

		@media ${UTILS.SCREEN.MOBILE} {
			width: 100%;
			padding: 5%;
			padding-top: 20%;
			padding-bottom: 20%;
		}
	`,
	BlockTitle: styled.div`
		font-size: 2rem;
		font-weight: bold;
		padding-left: 0%;
		margin-top: 10%;
		@media ${UTILS.SCREEN.MOBILE} {
			padding-left: 5%;
		}
	`,
};
