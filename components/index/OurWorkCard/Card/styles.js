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
			margin-bottom: 20%;
			width: 100%;
		}
	`,
	Title: styled.div`
		font-size: 1.5rem;

		font-weight: bold;
		margin-bottom: 10%;
		@media ${UTILS.SCREEN.MOBILE} {
			font-size: 1.5rem;
			font-weight: bold;
		}
	`,
	DetailedContainer: styled.div`
		background: linear-gradient(rgba(71, 71, 71, 0.05), transparent);

		display: flex;
		padding: 2% 5%;

		@media ${UTILS.SCREEN.MOBILE} {
			flex-direction: column-reverse;
			padding: 0;
		}
	`,
	Description: styled.div`
		width: 50%;
		padding: 5% 0%;
		padding-right: 5%;
		font-size: 1.2rem;
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
		width: 50%;
		${"" /* position: absolute; */}
		bottom: 0;
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
