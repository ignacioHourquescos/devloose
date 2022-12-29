import styled from "styled-components";
import UTILS from "../../utils/utils";

export const StyledIntro = {
	Inner: styled.div`
		border: ${UTILS.DRAFT};
		width: 80%;
		display: flex;
		flex-direction: column;
		align-content: center;
		align-items: center;
	`,
	Title: styled.div`
		font-size: 2rem;
		text-align: center;
	`,
	Icons: styled.div`
		display: flex;
	`,
	Brief: styled.div`
		font-size: 1rem;
		text-align: center;
	`,
};
