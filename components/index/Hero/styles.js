import styled, { keyframes, css } from "styled-components";
import UTILS from "../../../utils/utils";
import { motion } from "framer-motion";
import variants from "./animation";

const dasharray = 1000;

const dash = keyframes`
  0%  {stroke-dashoffset: 1000; opacity:0}
  99% {stroke-dashoffset: 0;    opacity:1;}
  100%{stroke-dashoffset: 0;    opacity:1;}
`;

const animationPropulsion = (props) =>
	css`
		${dash} 2s ease-in backwards
	`;

export const StyledHeader = {
	Inner: styled.div`
		height: 100vh;
		widht: 100vw;
		display: flex;
		justify-content: center;
		align-content: center;
		align-items: center;
		position: relative;
		overflow-x: hidden;
		overflow-y: hidden;
		@media ${UTILS.SCREEN.MOBILE} {
			overflow-x: hidden;
			overflow-y: hidden;
		}
	`,

	// prettier-ignore
	Ball: styled(motion.div).attrs(() => ({variants}))`
		position: absolute;
		height: 200px;
		width: 200px;

		z-index: 100;
		background-color: ${UTILS.COLORS.BLACK};
	`,

	// prettier-ignore
	Rocket: styled(motion.div).attrs(() => ({variants}))`
		position: absolute;
		top: 50%;
		left: 46.8%;
		-webkit-animation-fill-mode: forwards;
		z-index: 201;
		margin-bottom: 2rem;
		@media ${UTILS.SCREEN.MOBILE} {
			top: 50%;
			left: 37%;
		}
	`,

	PropulsionContainer: styled.div`
		position: absolute;
		top: 33%;
		left: 30;
		z-index: 200;
	`,

	Propulsion: styled.path`
		animation-delay: 1s;
		opacity: 0;
		animation: ${(props) => (props.animate ? animationPropulsion : "")};
		animation-delay: ${(props) => (props.animate ? "1s" : "1s")};
		stroke-dasharray: ${dasharray};
		-webkit-animation-fill-mode: forwards;
		z-index: 200;
	`,

	Launch: styled.div`
		position: absolute;
		top: 80%;
		left: 30;
		z-index: 200;
	`,
};
