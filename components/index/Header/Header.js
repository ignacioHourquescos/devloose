import React from "react";
import useViewPort from "../../../hooks/useViewPort.js";
import { StyledHeader } from "./styles.js";
import { useRef, useEffect, useState } from "react";
import { AiFillRocket } from "react-icons/ai";
import Button from "../../common/Button/Button.js";
import Logo from "../../common/Logo/Logo.js";

const Header = (props) => {
	const triggerRef = useRef();
	const ref = useViewPort(triggerRef, { freezeOnceVisible: true });
	const [launch, setLaunch] = useState(false);

	const launchHandler = () => {
		setLaunch(true);
	};

	return (
		<StyledHeader.Inner>
			<StyledHeader.Ball
				initial="hidden"
				animate={launch && "visible"}
			></StyledHeader.Ball>
			<StyledHeader.Rocket animate={launch && "translate"}>
				<AiFillRocket fill="white" size={70} />
			</StyledHeader.Rocket>
			<StyledHeader.PropulsionContainer>
				<svg viewBox="-60 -35 300 300" width="270px" height="270px">
					<StyledHeader.Propulsion
						animate={true}
						d={svgDrawings.chaosClarity}
						fill="none"
						stroke="white"
						strokeWidth={6}
					></StyledHeader.Propulsion>
				</svg>
			</StyledHeader.PropulsionContainer>

			<StyledHeader.Launch onClick={() => launchHandler()}>
				{!launch ? <Button>Launch</Button> : <Logo />}
			</StyledHeader.Launch>
		</StyledHeader.Inner>
	);
};

export default Header;

const svgDrawings = {
	chaosClarity:
		"M93.9595 2.37476C93.9595 20.4438 95.0423 100.806 94.1519 118.857C93.9672 122.6 93.9595 126.341 93.9595 130.086C93.9595 133.038 94.6671 128.387 94.7289 128.215C96.9597 121.984 100.888 114.87 109.924 114.178C121.296 113.306 131.58 121.93 136.467 129.307C141.19 136.436 142.262 147.117 129.735 149.193C122.599 150.375 114.752 147.759 108.193 145.995C94.1343 142.214 80.2933 137.827 66.0699 134.454C63.9021 133.939 58.5928 131.998 57.7992 135.077C56.8979 138.575 57.0807 142.609 56.9337 146.151C56.8425 148.348 58.55 170.135 60.6363 168.806C66.5403 165.044 70.7423 160.013 76.9853 156.406C86.7073 150.79 98.1812 146.53 109.972 144.825C114.183 144.217 121.098 143.451 123.484 147.321C126.087 151.543 124.922 157.449 124.205 161.904C124.137 162.328 122.547 168.348 122.811 167.519C124.454 162.354 127.258 157.22 131.61 153.17C137.123 148.039 145.659 144.376 154.163 144.319C159.308 144.284 167.299 146.852 165.607 152.273C162.653 161.735 141.965 163.687 133.053 163.815C107.126 164.186 82.697 155.486 63.0886 142.135C52.0107 134.592 41.9542 124.804 42.1234 112.462C42.2399 103.96 46.968 95.7411 57.9916 93.8627C79.3124 90.2295 96.6674 104.303 94.9212 121.118C92.8258 141.296 73.7731 155.179 53.76 165.413C38.2957 173.322 25.3306 177.703 8.175 182.102C-2.81319 184.919 4.21341 183.211 4.21341 183.211",
};
