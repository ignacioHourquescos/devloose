import styled from "styled-components";
import UTILS from "../../../utils/utils";

export const Styled = {
	Inner: styled.div`
		color: black;
		font-size: 2rem;
		width: 100%;
		margin: 5% 10%;
		padding: 0%;
		height: 10%;
		@media ${UTILS.SCREEN.MOBILE} {
			width: 80%;
			${"" /* margin-left: auto; */}
			padding:0%;
		}
	`,
	Title: styled.div`
		font-size: 2rem;
		padding: 0 2.5%;
	`,
	UnderlineBlock: styled.div`
		background-color: black;
		width: 80%;
		margin-top: 1rem;
		height: 1rem;
		border-radius: 100px;
		@media ${UTILS.SCREEN.MOBILE} {
			width: 80%;
			margin-top: 0.5rem;
			height: 0.7rem;

			${"" /* margin-left: auto; */}
		}
	`,
};
