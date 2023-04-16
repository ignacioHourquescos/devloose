import styled from "styled-components";
import UTILS from "../utils/utils";

const Styled = {
	Container: styled.div`
		width: 80%;
		margin: 10% 10%;
		margin-bottom: 0%;
		display: flex;
		flex-wrap: wrap;
		box-sizing: border-box;

		@media ${UTILS.SCREEN.MOBILE} {
			margin: 20% 0%;
			width: 100%;
		}
	`,
};

export default Styled;
