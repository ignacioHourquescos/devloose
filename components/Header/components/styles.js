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

//LOGO ANIMATION RIGHT//////////////////////////////

const opacity = keyframes`
  0%{
    width:30vw;
    height:60vh;
    border-bottom-left-radius:0px;
    border-top-left-radius:0px;
    border-top-right-radius:0px;
    border-bottom-right-radius:0px;
  }
  55% {
   border-bottom-left-radius:0px;
   border-top-left-radius:100px;
  }


  100% {
    width:200px;
    height:200px;
    border-bottom-left-radius:400px;
    border-top-left-radius:400px;
  }
`;

export const animationLogo = (props) =>
	css`
		${opacity} ${animationDuration - 2}s  forwards
	`;

export const LogoAnimationContainer = styled.div`
	position: absolute;
	top: 0%;
	left: 25%;
animation: ${animationLogo}; */
	${"" /* transform: translate(-50%, -50%); */}

	z-index: 1;
	background-color: black;
	border-radius: 400px;
	-webkit-animation-fill-mode: forwards;
	height: 200px;
`;

//LOGO ANIMATION LEFT//////////////////////////////

const logoAnimationLeft = keyframes`
  0%{
    width:30vw;
    height:60vh;
    border-bottom-right-radius:0px;
    border-top-right-radius:0px;
    border-top-left-radius:0px;
    border-bottom-left-radius:0px;
    
  }
  55% {
    border-bottom-right-radius:0px;

  }

  100% {
    width:200px;
    height:200px;
   translateY:-100px;
   border-bottom-right-radius:400px;
   border-bottom-top-radius:400px;
  }
`;

export const animationLogoLeft = (props) =>
	css`
		${logoAnimationLeft} ${animationDuration - 2}s forwards
	`;

export const LogoAnimationContainerLeft = styled.div`
	position: absolute;
	top: 0%;
	right: 25%;
  animation: ${animationLogoLeft}; */
	${"" /* transform: translate(-50%, -50%); */}

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

	-webkit-animation-fill-mode: forwards;
`;

export const PropulsionAnimationContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

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

	-webkit-animation-fill-mode: forwards;
	animation-delay: ${animationDurationRocket - animationDurationRocketDelay}s;

	z-index: 0;
`;
