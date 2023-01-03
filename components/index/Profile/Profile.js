import React from "react";
import { StyledProfile } from "./styles.js";
import Image from "next/image";

const Profile = () => {
	return (
		<StyledProfile.Inner>
			<StyledProfile.Icon>
				<Image
					src="/profile1.svg"
					alt="Picture of the author"
					width="300px"
					height="300px"
				/>
			</StyledProfile.Icon>
			<StyledProfile.Name>Juan gomez</StyledProfile.Name>
		</StyledProfile.Inner>
	);
};

export default Profile;
