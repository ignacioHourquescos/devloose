import styled, { keyframes, css } from "styled-components";
import UTILS from "../../../utils/utils";

export const Styled = {
	Inner: styled.div`
		background-image: url("/propulz/background.png");
		background-size: cover;

		width: 80%;
		display: flex;
		flex-direction: column;
		padding: 20% 10%;

		@media ${UTILS.SCREEN.MOBILE} {
			overflow-x: hidden;
			overflow-y: hidden;
		}
	`,
	Title: styled.div`
		font-size: 4rem;
		color: white;
		font-weight: bold;
		padding-right: 30%;
		@media ${UTILS.SCREEN.MOBILE} {
			overflow-x: hidden;
			overflow-y: hidden;
		}
	`,
	SubTitle: styled.div`
		font-size: 2rem;
		color: white;
		font-weight: normal;
		padding-right: 30%;
		@media ${UTILS.SCREEN.MOBILE} {
			overflow-x: hidden;
			overflow-y: hidden;
		}
	`,
};
