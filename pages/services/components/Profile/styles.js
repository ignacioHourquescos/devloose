import styled from "styled-components";
import UTILS from "../../../../utils/utils";

export const Styled = {
	Inner: styled.div`
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 70%;
		padding: 0% 0%;
		padding: 5% 15%;

		@media ${UTILS.SCREEN.MOBILE} {
			width: 90%;
			padding: 5%;
			padding-top: 20%;
			padding-bottom: 20%;
		}
	`,
	Profile: styled.div`
		width: 14%;
		display: flex;
		height: 50%;
		padding: 4%;
		flex-direction: column;
		align-content: center;
		align-items: center;
		justify-content: center;
		justify-items: flex-start;
		@media ${UTILS.SCREEN.MOBILE} {
			width: 40%;
			padding: 0 4.5%;
		}
	`,

	Name: styled.div`
		color: black;
		font-size: 0.9rem;
		font-weight: 500;
		@media ${UTILS.SCREEN.MOBILE} {
			font-size: 0.8;
		}
	`,
	Description: styled.div`
		color: black;
		font-size: 0.8rem;
	`,
	Doodle: styled.img`
		padding: 10%;
		border-radius: 40rem;
		@media ${UTILS.SCREEN.MOBILE} {
			height: 25%;
		}
	`,
};
