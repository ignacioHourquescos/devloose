import styled, { keyframes, css } from "styled-components";
import UTILS from "../../../utils/utils";

const dasharray = 1000;

export const StyledHeader = {
	Inner: styled.div`
		height: 100vh;
		width: 100vw;
		display: flex;
		justify-content: center;
		align-content: flex-start;
		align-items: flex-start;
		position: relative;
	`,

	// prettier-ignore
	Ball: styled.div`
		position: absolute;
		height: 200px;
		width: 200px;
		z-index: 100;
    top:37.5%;
		background-color: ${UTILS.COLORS.CARMINE};
    border-radius:200px;
	`,

	Land: styled.div`
		border-bottom: 5px solid white;
		width: 600px;
	`,
	PropulsionContainer: styled.div`
		position: absolute;
		top: 33%;
		left: 30;
		z-index: 200;
	`,

	Propulsion: styled.path`
		animation-delay: 1s;
		opacity: 1;
		stroke-dasharray: ${dasharray};
		z-index: 200;
	`,
	Launch: styled.div`
		position: absolute;
		top: 90%;
		z-index: 200;
		@media ${UTILS.SCREEN.MOBILE} {
			top: 80%;
		}
	`,
};
