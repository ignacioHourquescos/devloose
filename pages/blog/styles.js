import styled from "styled-components";
import UTILS from "../../utils/utils";
export const Styled = {
	Inner: styled.div`
		display: flex;
		flex-direction: column;
		align-content: center;
		align-items: center;
		padding-top: 5%;
		@media ${UTILS.SCREEN.MOBILE} {
			width: 100%;
			padding: 20% 0%;
			padding-bottom: 0%;
		}
	`,
	ImageContainer: styled.div`
		padding: 5% 15%;

		display: flex;
		flex-direction: column;
		align-content: center;
		align-items: center;
		@media ${UTILS.SCREEN.MOBILE} {
			padding: 0;
		}
	`,
	Image: styled.img`
		height: 40vh;
		@media ${UTILS.SCREEN.MOBILE} {
			height: auto;
			width: 100vw;
		}
	`,
	Content: styled.div`
		padding: 10% 15%;
		padding-top: 5%;
		font-size: 1.2rem;
		@media ${UTILS.SCREEN.MOBILE} {
			padding: 5%;
		}
	`,
	ContactButton: styled.div`
		background-color: ${UTILS.COLORS.CARMINE};
		border-radius: 2rem 2rem 0 0;
		color: white;
		position: fixed;
		padding: 1% 1%;
		bottom: 0rem;
		@media ${UTILS.SCREEN.MOBILE} {
			bottom: 0rem;
			width: 80%;
			margin: 0 10%;
			padding: 5%;
			font-size: 1.1rem;
		}
	`,
};
