import styled, { css, keyframes } from "styled-components";
import UTILS from "../../../utils/utils";
import { motion } from "framer-motion";
import variants from "./animation";

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
		@media ${UTILS.SCREEN.MOBILE} {
			flex-direction: column-reverse;
			height: 70vh;
		}
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
		@media ${UTILS.SCREEN.MOBILE} {
			clip-path: polygon(0 10%, 100% 0, 100% 100%, 0% 100%);
			width: 100%;
			height: 50%;
			border-top-left-radius: 0px;
			border-bottom-right-radius: 50px;
		}
	`,

	ImageContainer: styled(motion.div).attrs(() => ({ variants }))`
		clip-path: polygon(10% 0, 89% 0, 100% 100%, 0% 100%);
		opacity: 0.6;
		background-color: ${UTILS.COLORS.GREY};
		transparency: 40%;
		height: 99%;
		padding: 15%;
		width: 60%;
		position: absolute;
		left: 0;
		z-index: 99;
		border-top-right-radius: 150px;
		border-bottom-right-radius: 60px;
		filter: drop-shadow(3px 2px 2px rgb(0 0 0 / 0.4));

		@media ${UTILS.SCREEN.MOBILE} {
			clip-path: polygon(0 0, 100% 9%, 100% 100%, 0% 100%);
			border-top-right-radius: 50px;
			border-bottom-right-radius: 0px;
			border-top-left-radius: 50px;
			width: 100%;
			height: 50%;
			top: 0;
			left: 0;
		}
	`,

	Data: styled.div`
		display: flex;
		flex-direction: column;
		border: ${UTILS.DRAFT};
		width: 50%;
		padding: 5%;
		z-index: 101;
		@media ${UTILS.SCREEN.MOBILE} {
			width: 100%;
			height: 50%;
		}
	`,

	Title: styled.div`
		border: ${UTILS.DRAFT};
		font-weight: 800;
		font-size: 2rem;
		margin-bottom: 1rem;
	`,

	Brief: styled(motion.div).attrs(() => ({ variants }))`
		border: ${UTILS.DRAFT};
		margin-bottom: 3rem;
		@media ${UTILS.SCREEN.MOBILE} {
			margin-bottom: 1rem;
		}
	`,

	Technologies: styled(motion.div).attrs(() => ({ variants }))`
		border: ${UTILS.DRAFT};
		display: flex;
		flex-direction: row;
		font-size: 2rem;
		margin-bottom: 1rem;
		@media ${UTILS.SCREEN.MOBILE} {
			width: 40%;
		}
	`,

	Visit: styled.div`
		border: ${UTILS.DRAFT};
		@media ${UTILS.SCREEN.MOBILE} {
			display: inline-block;

			margin-left: auto;
		}
	`,

	// RIGHT SIDE OF CARD
	Image: styled.div`
		border: ${UTILS.DRAFT};
		width: 50%;
		padding: 2%;
	`,

	LogoContainer: styled(motion.ol).attrs(() => ({ variants }))``,
	Logo: styled(motion.li).attrs(() => ({ variants }))``,
};
