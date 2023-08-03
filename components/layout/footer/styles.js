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
		background-color: ${UTILS.COLORS.BLACK};
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
	Punch: styled.div`
		font-size: 1.2rem;
		margin-bottom: 1rem;
	`,
	Image: styled.img.attrs((props) => ({
		type: "text",
		image: props.image,
	}))`
		width: 10%;
		margin-bottom: 2rem;
		@media ${UTILS.SCREEN.MOBILE} {
			width: 20%;
		}
	`,
};
