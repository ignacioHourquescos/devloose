import styled, { keyframes, css } from "styled-components";
import UTILS from "../../../utils/utils";

export const Styled = {
	Inner: styled.div`
		height: 60vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		align-items: center;
		color: white;

		@media ${UTILS.SCREEN.MOBILE} {
			margin-top: 20%;
		}
	`,
	Item: styled.div`
		margin-top: 1rem;
	`,
	Text: styled.div`
		color: white;
		margin-bottom: 2rem;
	`,

	Image: styled.img.attrs((props) => ({
		type: "text",
		image: props.image,
	}))`
		width: 15%;
		margin-bottom: 2rem;
		@media ${UTILS.SCREEN.MOBILE} {
			width: 60%;
		}
	`,
};
