import styled, { css, keyframes } from "styled-components";

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

//ANIMATIONS
export const dasharray = 1000;

export const dash = keyframes`
from { stroke-dashoffset: -1000;}
to { stroke-dashoffset: 0;}`;

export const animation = (props) =>
	css`
		${dash} 4s ease-in backwards
	`;

export const animationRocket = (props) =>
	css`
		${dash} 6s ease-in backwards
	`;

export const Rocket = styled.path`
	animation: ${animationRocket};
	border: 2px solid blue;
	stroke-dasharray: ${dasharray};
`;

export const PulseButton = styled.path`
	animation: ${animation};
	border: 2px solid blue;
	stroke-dasharray: ${dasharray};
`;
