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

//GENERAL SETTINGS///////////////////////77
const animationDuration = 2;

//LOGO ANIMATION//////////////////////////////

const opacity = keyframes`
  0%{
    opacity:0;
  }
  50% {
    opacity:0;
  }
  95% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
`;

export const animationLogo = (props) =>
	css`
		${opacity} ${animationDuration}s  backwards
	`;

export const LogoAnimationContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	animation: ${animationLogo};
	transform: translate(-50%, -50%);
	border: 1px solid red;
	z-index: 1;
`;

//PROPULSION///////////////////////////////////////////////////////
export const dasharray = 1000;

const dash = keyframes`
  0%{
    stroke-dashoffset: 1000;
  }
  99%{
    stroke-dashoffset: 0;

  }
  100%{
    stroke-dashoffset: 0;

  }

`;

export const animationPropulsion = (props) =>
	css`
		${dash} ${animationDuration}s ease-in backwards
	`;

export const Propulsion = styled.path`
	postion: absolute;
	top: 0;
	right: 0;
	animation: ${animationPropulsion};
	border: 2px solid blue;
	stroke-dasharray: ${dasharray};
	border: 1px solid red;
	-webkit-animation-fill-mode: forwards;
`;

export const PropulsionAnimationContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border: 1px solid red;
`;

//ROCKET ANIMATION//////////////////////////////////////////////////
const translate = keyframes`
  0%{
    transform: translateY(0);

  }
  50% {

  }
  100% {
    transform: translateY(-350px);

  }
`;

export const animationRocket = (props) =>
	css`
		${translate} ${animationDuration}s ease-in backwards
	`;

export const RocketAnimationContainer = styled.div`
	position: absolute;
	top: -0%;
	left: 42%;
	animation: ${animationRocket};
	border: 1px dashed red;
	-webkit-animation-fill-mode: forwards;
	animation-delay: ${animationDuration - 1.75}s;
	z-index: 1;
`;
