import styled, { css, keyframes } from "styled-components";
import UTILS from "../../../../utils/utils";

export const Styled = {
	Inner: styled.div`
		height: 70vh;
		${"" /* margin: 0 10%; */}
		margin-bottom: 15vh;
		position: relative;

		@media ${UTILS.SCREEN.MOBILE} {
			position: static;
			flex-direction: column-reverse;
			height: 65vh;
			margin: 0%;
			width: 100%;
		}
	`,
	Title: styled.div`
		font-size: 2rem;
		padding: 0 5%;
		font-weight: bold;
		margin-bottom: 2%;
		@media ${UTILS.SCREEN.MOBILE} {
			font-size: 1.5rem;
			font-weight: bold;
		}
	`,
	DetailedContainer: styled.div`
		background-color: rgba(71, 71, 71, 0.03);
		display: flex;
		padding: 0 5%;
		@media ${UTILS.SCREEN.MOBILE} {
			flex-direction: column-reverse;
			padding: 0;
		}
	`,
	Description: styled.div`
		width: 50%;
		padding: 5% 0%;
		@media ${UTILS.SCREEN.MOBILE} {
			width: 100%;
			padding: 5%;
			font-size: 1rem;
		}
	`,
	Image: styled.img.attrs((props) => ({
		type: "text",
		image: props.image,
	}))`
		width: 40%;
		position: absolute;
		bottom: 50;
		right: 5%;
		@media ${UTILS.SCREEN.MOBILE} {
			position: static;
			width: 100%;
		}
	`,
	Stack: styled.div`
		width: 100%;
	`,
};
