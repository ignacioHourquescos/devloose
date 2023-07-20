import styled from "styled-components";
import UTILS from "../../../utils/utils";

export const Styled = {
	Inner: styled.div`
		color: black;
		font-size: 2rem;
		width: 80%;
		text-align: center;
		margin: 0% 10%;
		margin-left: 10%;
		height: 10%;
		@media ${UTILS.SCREEN.MOBILE} {
			width: 100%;
			${"" /* margin-left: auto; */}
			padding:0%;
			margin: 0;
		}
	`,
	Title: styled.div`
		font-size: 2.5rem;
		font-weight: bold;
		padding: 1% 2.5%;
		color: black;
		@media ${UTILS.SCREEN.MOBILE} {
			font-size: 2rem;
		}
	`,
	UnderlineBlock: styled.div`
		${
			"" /* background-color: black;
		width: 100%;
		margin-top: 1rem;
		height: 0.3rem;
		border-radius: 100px;
		@media ${UTILS.SCREEN.MOBILE} {
			width: 80%;
			margin-top: 0.5rem;
			height: 0.7rem;

			${"" /* margin-left: auto; */
		}
		} */}
	`,
};
