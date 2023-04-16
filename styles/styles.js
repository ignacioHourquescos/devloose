import styled from "styled-components";
import UTILS from "../utils/utils";

const Styled = {
	Container: styled.div`
		width: 80%;
		margin: 0% 10%;
		margin-bottom: 0%;
		display: flex;
		flex-wrap: wrap;
		box-sizing: border-box;

		@media ${UTILS.SCREEN.MOBILE} {
			margin: 0% 0%;
			width: 100%;
		}
	`,
};

export default Styled;
