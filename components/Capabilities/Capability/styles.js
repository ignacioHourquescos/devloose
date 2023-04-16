import styled from "styled-components";
import UTILS from "../../../utils/utils";

export const Styled = {
	Inner: styled.div`
		border: ${UTILS.DRAFT};
		width: 100%;
		${"" /* padding: 0 2.5%; */}
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		align-content: center;
		justify-items: center;
		justify-content: center;

		@media ${UTILS.SCREEN.MOBILE} {
			width: 100%;
			padding: 0%;
		}
	`,
	CapabilityContainer: styled.div`
		${"" /* margin-left: 2rem; */}
	`,
	Title: styled.div`
		border: ${UTILS.DRAFT};
		font-size: 1rem;
		font-weight: bold;
	`,
	Description: styled.div`
		border: ${UTILS.DRAFT};
		font-size: 1rem;
		margin-bottom: 2rem;
	`,
};
