import styled, { css, keyframes } from "styled-components";
import UTILS from "../../../../utils/utils";

export const Styled = {
	Inner: styled.div`
		margin-bottom: 15vh;
		/* background: rgb(249, 249, 249);
		background: linear-gradient(
			90deg,
			rgba(249, 249, 249, 1) 0%,
			rgba(255, 255, 255, 1) 100%,
			rgba(255, 255, 255, 1) 100%
		);
		border-radius: 2rem;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19); */

		@media ${UTILS.SCREEN.MOBILE} {
			position: static;
			flex-direction: column-reverse;
			min-height: 75vh;
			margin: 0%;
			margin-bottom: 40%;
			width: 100%;
		}
	`,
	Title: styled.div`
		font-size: 2.5rem;
		font-weight: bold;
		margin-bottom: 0%;
		@media ${UTILS.SCREEN.MOBILE} {
			font-size: 1.5rem;
			font-weight: bold;
		}
	`,
	SubTitle: styled.div`
		font-size: 1rem;
	`,
	DetailedContainer: styled.div`
		display: flex;

		@media ${UTILS.SCREEN.MOBILE} {
			flex-direction: column-reverse;
			padding: 0;
		}
	`,
	Description: styled.div`
		margin-top: 5%;
	`,
	TechStack: styled.div`
		margin-top: 5%;
		display: flex;
	`,
	VisitButton: styled.div`
		border-radius: 4rem;
		border: 1px solid black;
		padding: 0.5rem 1rem;
		margin-top: 5%;
		display: inline-block;
	`,
	Content: styled.div`
		background: rgba(0, 0, 0, 0.05);
		width: 60%;
		padding: 5% 0%;
		padding-right: 5%;
		font-size: 1.2rem;
		padding: 5%;
		@media ${UTILS.SCREEN.MOBILE} {
			width: 90%;
			padding: 5%;
			font-size: 1rem;
		}
	`,
	Image: styled.img`
		border-left: 4px solid rgba(0, 0, 0, 0.1);
		padding: 2% 5%;
		width: 40%;
		bottom: 0;
		@media ${UTILS.SCREEN.MOBILE} {
			border: 0;
			padding: 0;
			border-bottom: 4px solid rgba(0, 0, 0, 0.1);
			position: static;
			width: 100%;
		}
	`,
	Stack: styled.div`
		width: 100%;
	`,
};
