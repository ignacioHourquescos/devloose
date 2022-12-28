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
const animationDuration = 4;
const animationDurationRocket = animationDuration;
const animationDurationRocketDelay = 4;

//LOGO ANIMATION//////////////////////////////

const opacity = keyframes`
  0%{
    width:140vw;
  }

  100% {
    width:200px;
  }
`;

export const animationLogo = (props) =>
	css`
		${opacity} ${animationDuration}s  backwards
	`;

export const LogoAnimationContainer = styled.div`
	position: absolute;
	top: 0%;
	left: 25%;
animation: ${animationLogo}; */
	${"" /* transform: translate(-50%, -50%); */}
	border: 1px solid red;
	z-index: 1;
	background-color: black;
	border-radius: 400px;
	-webkit-animation-fill-mode: forwards;
	height: 200px;
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

export const PropulsionDash = styled.path`
	postion: absolute;
	top: 0;
	right: 0;
	animation: ${animationPropulsion};
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
	z-index: 1;
`;

//ROCKET ANIMATION//////////////////////////////////////////////////
const translate = keyframes`
  0%{
    transform: translateY(100px);

  }
  50% {

  }
  100% {
    transform: translateY(-350px);

  }
`;

export const animationRocket = (props) =>
	css`
		${translate} ${animationDurationRocket}s ease-in backwards
	`;

export const RocketAnimationContainer = styled.div`
	position: absolute;
	top: -0%;
	left: 42%;
	animation: ${animationRocket};
	border: 1px dashed red;
	-webkit-animation-fill-mode: forwards;
	animation-delay: ${animationDurationRocket - animationDurationRocketDelay}s;
	z-index: 2;
`;

//ROCKET ANIMATION//////////////////////////////////////////////////

export const OuterRocketAnimationContainer = styled.div`
	position: absolute;
	top: -4.2%;
	left: 39.5%;
	animation: ${animationRocket};
	border: 1px dashed red;
	-webkit-animation-fill-mode: forwards;
	animation-delay: ${animationDurationRocket - animationDurationRocketDelay}s;

	z-index: 0;
`;
