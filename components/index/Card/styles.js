import styled, { css, keyframes } from "styled-components";
import UTILS from "../../../utils/utils";
import { motion } from "framer-motion";
import variants from "./animation";

export const StyledCard = {
	Inner: styled.div`
		border: ${UTILS.DRAFT};
		display: flex;
		flex-direction: row;
		width: 70%;
		margin: 10% 15%;
		position: relative;
		margin-bottom: 20%;
		height: 60vh;
		padding-bottom: 2rem;
		@media ${UTILS.SCREEN.MOBILE} {
			flex-direction: column-reverse;
			height: 65vh;
			width: 80%;
			margin: 10%;
			margin-bottom: 50%;
		}
	`,

	//LEFT SIDE OF CARD
	DataContainer: styled.svg`
		${"" /* clip-path: polygon(0 0, 100% 0, 90% 100%, 0% 100%); */}
		background-color: ${UTILS.COLORS.WHITE};
		height: 99%;
		width: 50%;
		padding: 15%;
		${"" /* position: absolute; */}
		z-index: 100;
		${
			"" /* border-top-left-radius: 60px;
		border-bottom-left-radius: 60px; */
		}
		filter: drop-shadow(3px 2px 2px rgb(0 0 0 / 0.4));
		@media ${UTILS.SCREEN.MOBILE} {
			${"" /* clip-path: polygon(0 10%, 100% 0, 100% 100%, 0% 100%); */}
			width: 100%;
			height: 40%;
			${
				"" /* border-top-left-radius: 0px;
			border-bottom-right-radius: 50px; */
			}
		}
	`,
	// Image: styled.div.attrs((props) => ({
	// 	type: "text",
	// 	image: props.image,
	// }))`

	ImageContainer: styled(motion.div).attrs((props) => ({
		variants,
		type: "text",
		image: props.image,
	}))`

		background-size: 70%
		opacity: 0.6;
		transparency: 40%;
		padding: 5%;
		width: 60%;
		position: absolute;
		padding-top: 15%;
		right: 0;
		z-index: 99;


		@media ${UTILS.SCREEN.MOBILE} {
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
		font-size: 1.7rem;
		margin-bottom: 1rem;
		:before {
			content: "${(p) => p.content}";
		}
	`,

	Brief: styled(motion.div).attrs(() => ({ variants }))`
		border: ${UTILS.DRAFT};
		margin-bottom: 3rem;
		@media ${UTILS.SCREEN.MOBILE} {
			margin-bottom: 1rem;
		}
		:before {
			content: "${(p) => p.content}";
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
		font-size: 1.5rem;
		color: ${UTILS.COLORS.CARMINE};
		border: 1px solid ${UTILS.COLORS.CARMINE};
		padding: 0.5rem 1.5rem;
		border-radius: 200px;
		@media ${UTILS.SCREEN.MOBILE} {
			display: inline-block;

			${"" /* margin-left: auto; */}
		}
	`,

	// RIGHT SIDE OF CARD
	// Image: styled.img.attrs((props) => ({
	// 	type: "text",
	// 	image: props.image,
	// }))`
	// 	background-image: url(${(props) => props.image});
	// 	border: ${UTILS.DRAFT};
	// 	width: 50%;
	// 	padding: 2%;
	// `,

	Image: styled.img.attrs((props) => ({
		type: "text",
		image: props.image,
	}))`
		${"" /* clip-path: polygon(10% 0, 89% 0, 100% 100%, 0% 100%); */}
		${
			"" /* background-image: url(${(props) => props.image});
		background-size: contain;
    background */
		}
    border:10px solid black;
		border-radius: 5px;
		width: 100%;
		${"" /* height: 100%; */}
	`,

	LogoContainer: styled(motion.ol).attrs(() => ({ variants }))``,
	Logo: styled(motion.li).attrs(() => ({ variants }))``,
};
