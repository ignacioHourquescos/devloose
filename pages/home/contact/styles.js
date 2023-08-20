import styled from "styled-components";
import UTILS from "../../../utils/utils";

export const Styled = {
	Inner: styled.div`
		display: flex;
		padding: 5% 10%;
		justify-content: space-between;
		align-items: center;
		color: #aeb6c7;

		@media ${UTILS.SCREEN.MOBILE} {
			flex-direction: column;
		}
	`,

	LeftColumn: styled.div`
		flex: 35%;
		display: flex;
		flex-direction: column;
		padding: 20px;
		align-items: flex-start; /* Align content vertically to the start */
		justify-content: flex-start; /* Align content horizontally to the start */
	`,

	RightColumn: styled.div`
		flex: 65%;
		display: flex;
		flex-direction: column;
		padding: 20px;
		align-items: flex-start; /* Align content vertically to the start */
		justify-content: flex-start; /* Align content horizontally to the start */
	`,

	Title: styled.div`
		font-size: 24px;
		font-weight: bold;
	`,

	Punch: styled.div`
		font-size: 16px;
		margin-top: 10px;
	`,

	Telephone: styled.div`
		margin-top: 20px;
	`,

	Mail: styled.div`
		margin-top: 10px;
	`,
};
