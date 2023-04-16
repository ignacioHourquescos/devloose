import styled, { keyframes, css } from "styled-components";
import UTILS from "../../../utils/utils";

export const Styled = {
	Inner: styled.div`
		border-bottom: 2px solid black;
		position: fixed;
		top: 0;
		display: flex;
		justify-content: center;
		width: 100%;

		padding: 0 15%;
		background-color: black;
		color: white;
		z-index: 1000;
		@media ${UTILS.SCREEN.MOBILE} {
			width: 100%;
			margin: 0% 0%;
			padding: 0%;
		}
	`,
	MenuItem: styled.span`
		margin: 0 2.5%;
		font-weight: bold;
		font-size: 1.2rem;
		padding: 2%;
		@media ${UTILS.SCREEN.MOBILE} {
			width: 100%;
			margin: 2% 0%;
			padding: 2%;
			font-size: 0.8rem;
		}
	`,
};
