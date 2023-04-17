import styled, { keyframes, css } from "styled-components";
import UTILS from "../../../utils/utils";
import { animated } from "@react-spring/web";
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
export const Styled = {
	Inner: styled.div`
		height: 50vh;
		width: 100vw;
		display: flex;
		justify-content: center;
		align-content: flex-start;
		align-items: flex-start;
		position: relative;

		@media ${UTILS.SCREEN.MOBILE} {
			margin-top: 50%;
		}
	`,
	Ball: styled(motion.div).attrs(() => ({
		variants,
	}))`
		position: absolute;
		height: 200px;
		width: 200px;
		z-index: 100;
		background-color: ${UTILS.COLORS.CARMINE};
		border-radius: 200px;
		display: flex;
		bootm: 50%;
		y-overflow: hidden;
		justify-content: center;
	`,

	Orbiting: styled.div`
		width: 40px;
		height: 40px;
		postion: relative;
		top: 0px;
		left: 200px;
		animation: spin-right 200.5s linear;
		@keyframes spin-right {
			100% {
				transform: translateY(-4000px);
			}
		}
	`,
};
