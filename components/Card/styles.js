import styled, { css, keyframes } from "styled-components";
import UTILS from "../../utils/utils";

const translate = keyframes`
  0%{
    transform: translateY(100px);
  }
  50% {
  }
  100% {
    transform: translateY(-350px);
  }
`;

const animationRocket = (props) =>
	css`
		${translate} 2s ease-in backwards
	`;

export const StyledCard = {
	Inner: styled.div`
		border: ${UTILS.DRAFT};
		display: flex;
		flex-direction: row;
		width: 90%;
		margin: 5%;
		position: relative;
		margin-bottom: 20%;
		height: 60vh;
	`,

	//LEFT SIDE OF CARD

	// background-image: url(${(props) => props.imageUrl});

	DataContainer: styled.svg.attrs((props) => ({
		dataRef: props.dataRef,
	}))`
		clip-path: polygon(0 0, 100% 0, 90% 100%, 0% 100%);
		background-color: ${UTILS.COLORS.WHITE};
		height: 100%;
		width: 50%;
		position: absolute;
		z-index: 100;
		border-top-left-radius: 60px;
		border-bottom-left-radius: 60px;
		animation: ${animationRocket};
	`,

	ImageContainer: styled.svg`
		clip-path: polygon(10% 0, 89% 0, 100% 100%, 0% 100%);
		opacity: 0.6;
		background-color: ${UTILS.COLORS.GREY};
		transparency: 40%;
		height: 100%;
		width: 60%;
		position: absolute;
		right: 0;
		z-index: 99;
		border-top-right-radius: 150px;
		border-bottom-right-radius: 60px;
	`,

	Data: styled.div`
		display: flex;
		flex-direction: column;
		border: ${UTILS.DRAFT};
		width: 50%;

		padding: 5%;
		z-index: 101;
	`,

	// const Divider = styled.svg`
	// background: ${props => props.bg};
	// svg {
	//   fill: ${props => props.fill};
	// }

	// `;

	Title: styled.div`
		border: ${UTILS.DRAFT};
		font-weight: 800;
		font-size: 2rem;
		margin-bottom: 1rem;
	`,

	Brief: styled.div`
		border: ${UTILS.DRAFT};
		margin-bottom: 3rem;
	`,

	Technologies: styled.div`
		border: ${UTILS.DRAFT};
		display: flex;
		flex-direction: row;
		font-size: 2rem;
		margin-bottom: 1rem;
	`,

	Visit: styled.div`
		border: ${UTILS.DRAFT};
	`,

	// RIGHT SIDE OF CARD
	Image: styled.div`
		border: ${UTILS.DRAFT};
		width: 50%;
		padding: 2%;
	`,
};
