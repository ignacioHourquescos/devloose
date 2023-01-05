import styled, { keyframes, css } from "styled-components";
import UTILS from "../../../utils/utils";
import { animated } from "@react-spring/web";
import { motion } from "framer-motion";
import variants from "./animation";

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
	`,
	Rocket: styled(motion.div).attrs(() => ({
		variants,
	}))`
		position: absolute;
		top: 0%;
		left: 47.8%;
		-webkit-animation-fill-mode: forwards;
		z-index: 201;
		margin-bottom: 2rem;
		transform: translateY("-500px");
		@media ${UTILS.SCREEN.MOBILE} {
			top: 50%;
			left: 42%;
		}
	`,
	PropulsionContainer: styled.div`
		position: absolute;
		top: 33%;
		left: 30;
		z-index: 200;
	`,

	Launch: styled.div`
		position: absolute;
		top: 80%;
		left: 30;
		z-index: 200;
	`,
};
