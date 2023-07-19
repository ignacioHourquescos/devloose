import React from "react";
import { Styled } from "./styles.js";
import Image from "next/image.js";

import { TbTriangleInverted } from "react-icons/tb";

const HeroLaunched = () => {
	const goToTop = () => {
		window.scrollTo({
			top: 200,
			behavior: "smooth",
		});
	};
	return (
		<Styled.Inner onClick={goToTop}>
			<Styled.LogoContainer>
				<h1>DEVLOOSE</h1>
				{/* <Image
          alt="Picture of the author"
          width={300}
          height={50}
          src="/logoFirstVersion.png"
        /> */}
			</Styled.LogoContainer>

			<Styled.Subtitle>YOUR DIGITAL PARTNER</Styled.Subtitle>
			<Styled.Bounce>
				<TbTriangleInverted size={35} />
			</Styled.Bounce>
		</Styled.Inner>
	);
};

export default HeroLaunched;
