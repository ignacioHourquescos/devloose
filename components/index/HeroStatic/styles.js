import styled from "styled-components";
import UTILS from "../../../utils/utils";

export const Styled = {
	Inner: styled.div`
		width: 100vw;

		top: 0;
		left: 0;
		background-color: #190d2ae3;
		backdrop-filter: blur(10px);
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		justify-items: center;
		align-items: center;
		align-content: center;

		@media ${UTILS.SCREEN.MOBILE} {
			width: 100%;
			padding-top: 20%;
		}
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
