import styled, { keyframes } from "styled-components";
const slideAnimation = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-800px);
  }
`;
export const Styled = {
	Inner: styled.div`
		display: ${(props) => (props.show ? "block" : "none")};
		position: absolute;
		top: 0;
		left: 0;

		width: 100%;
		height: 100%;
	`,
	Universe: styled.div`
		background-color: black;
		width: 100%;
		height: 100vh;
	`,
	Gradient: styled.div`
		width: 100%;
		height: 300vh;
		opacity: 80%;
		background: linear-gradient(to top, #ffffff, #197bf8, black);
	`,
	RocketContainer: styled.div`
		position: fixed;
		bottom: 5%;
		left: 47.5%;
		z-index: 1000;
		animation: ${slideAnimation} 5s ease-out;
	`,
};
