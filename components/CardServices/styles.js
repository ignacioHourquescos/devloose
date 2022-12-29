import styled from "styled-components";
import UTILS from "../../utils/utils";

export const StyledCard = {
	Inner: styled.div`
		border: ${UTILS.DRAFT};
		width: 50%;
		padding: 10%;
		display: flex;
		flex-direction: column;
	`,
	Title: styled.div`
		border: ${UTILS.DRAFT};
		font-size: 2rem;
	`,
	Description: styled.div`
		border: ${UTILS.DRAFT};
		font-size: 1rem;
	`,
};
