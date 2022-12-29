import styled from "styled-components";
import UTILS from "../../utils/utils";

export const StyledProfile = {
	Inner: styled.div`
		border: ${UTILS.DRAFT};
		width: 20%;
		display: flex;
		flex-direction: column;
		align-content: center;
		align-items: center;
	`,
	Icon: styled.div`
		border: ${UTILS.DRAFT};
		font-size: 2rem;
		padding: 20%;
	`,
	Name: styled.div`
		border: ${UTILS.DRAFT};
		font-size: 1rem;
	`,
};
