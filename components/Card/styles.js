import styled, { css, keyframes } from "styled-components";
import UTILS from "../../utils/utils";
import { animated } from "@react-spring/web";

export const StyledCard = {
	Inner: styled.div`
		border: ${UTILS.DRAFT};
		display: flex;
		flex-direction: row;
		width: 80%;
		margin: 10%;
		position: relative;
		margin-bottom: 20%;
		height: 60vh;
		padding-bottom: 2rem;
	`,

	//LEFT SIDE OF CARD
	DataContainer: styled.svg`
		clip-path: polygon(0 0, 100% 0, 90% 100%, 0% 100%);
		background-color: ${UTILS.COLORS.WHITE};
		height: 99%;
		width: 50%;
		padding: 15%;
		position: absolute;
		z-index: 100;
		border-top-left-radius: 60px;
		border-bottom-left-radius: 60px;
		filter: drop-shadow(3px 2px 2px rgb(0 0 0 / 0.4));
	`,

	ImageContainer: styled.svg`
		clip-path: polygon(10% 0, 89% 0, 100% 100%, 0% 100%);
		opacity: 0.6;
		background-color: ${UTILS.COLORS.GREY};
		transparency: 40%;
		height: 99%;
		padding: 15%;
		width: 60%;
		position: absolute;
		right: 0;
		z-index: 99;
		border-top-right-radius: 150px;
		border-bottom-right-radius: 60px;
		filter: drop-shadow(3px 2px 2px rgb(0 0 0 / 0.4));
	`,

	Data: styled.div`
		display: flex;
		flex-direction: column;
		border: ${UTILS.DRAFT};
		width: 50%;
		padding: 5%;
		z-index: 101;
	`,

	Title: styled.div`
		border: ${UTILS.DRAFT};
		font-weight: 800;
		font-size: 2rem;
		margin-bottom: 1rem;
	`,

	Brief: styled(animated.div)`
		border: ${UTILS.DRAFT};
		margin-bottom: 3rem;
	`,

	Technologies: styled(animated.div)`
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
