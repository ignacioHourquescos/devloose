import styled from "styled-components";
import UTILS from "../../../../../utils/utils";

export const StyledIcon = {
	Inner: styled.div`
		border: ${UTILS.DRAFT};
		width: 100%;
		display: flex;
		flex-direciton: row;
		flex-wrap: wrap;
		justify-content: center;
		@media ${UTILS.SCREEN.MOBILE} {
			margin: 10% 0;
		}
	`,
	Icon: styled.div`
		border: ${UTILS.DRAFT};
		width: 25%;
		height: 100px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		align-items: center;
	`,
};
