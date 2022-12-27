import styled from "styled-components";

export const Inner = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: center;
	justity-items: center;
	align-content: center;
	align-items: center;
	&:hover {
		cursor: pointer;
	}
`;

export const Title = styled.span`
	text-align: center;
	align-content: center;
	display: flex;
	justify-content: center;
	justify-items: center;
	margin-bottom: 1rem;
`;

export const Logo = styled.div`
	text-align: center;
`;
