import styled from "styled-components";
import UTILS from "../../../utils/utils";

export const Styled = {
	Inner: styled.div`
		width: 80%;
		padding: 10%;

		display: flex;
		flex-direction: column;
		align-content: center;
		align-items: center;
		justify-content: center;
		padding: 10%;
		background-color: white;
		color: #aeb6c7;
		font-size: 36px;
		text-align: center;

		@media ${UTILS.SCREEN.MOBILE} {
			width: 80%;
			padding: 30% 10%;
		}
	`,
};
