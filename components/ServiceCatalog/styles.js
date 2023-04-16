import styled from "styled-components";
import UTILS from "../../utils/utils";

export const Styled = {
	Inner: styled.div`
		display: flex;
		flex-direction: row;
		flex-wrap: no-wrap;
		width: 100%;
		padding: 20% 10%;
		@media ${UTILS.SCREEN.MOBILE} {
			width: 100%;
			padding: 0%;
			padding-top: 30%;
			flex-wrap: wrap;
		}
	`,
};
