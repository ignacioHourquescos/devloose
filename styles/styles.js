import styled from "styled-components";
import UTILS from "../utils/utils";

const Styled = {
	Container: styled.div`
		@media ${UTILS.SCREEN.MOBILE} {
			margin: 0% 0%;
			width: 100%;
		}
	`,
};

export default Styled;
