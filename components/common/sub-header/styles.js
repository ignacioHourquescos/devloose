import styled, { keyframes, css } from "styled-components";
import UTILS from "../../../utils/utils";

const moveRight = keyframes`
  from {
    left: 0;
  }
  to {
    left: calc(100%); /* 80% is the width of the Inner component, subtract half of the circle width */
  }
`;

export const Styled = {
	Inner: styled.div`
		width: 80%;
		background-color: ${UTILS.COLORS.BLACK};
		height: 40vh;
		padding: 0 10%;
		display: flex;
		flex-direction: column;
		justify-items: center;
		justify-content: center;
		align-content: center;
		align-items: center;
		position: relative;
	`,
	Title: styled.div`
		font-size: 3rem;
		color: white;
		font-weight: bold;
		text-align: center;
		@media ${UTILS.SCREEN.MOBILE} {
			font-size: 1.7rem;
		}
	`,
	SubTitle: styled.div`
		font-size: 1.5rem;
		color: white;
		color: ${UTILS.COLORS.GREEN};
		text-align: center;
		@media ${UTILS.SCREEN.MOBILE} {
			font-size: 1rem;
		}

		transform: translateY(25px);
	`,
};
