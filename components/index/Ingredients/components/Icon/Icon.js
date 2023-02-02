import react from "react";
import { StyledIcon } from "./styles";
import { BsCodeSlash } from "react-icons/bs";
import { FaMagic } from "react-icons/fa";
import { IoAnalyticsOutline } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";

const Icon = () => {
	return (
		<StyledIcon.Inner>
			<StyledIcon.Icon>
				<BsCodeSlash fontSize={"44px"} />
				Development
			</StyledIcon.Icon>
			<StyledIcon.Icon>
				<FaMagic fontSize={"44px"} />
				Creativity
			</StyledIcon.Icon>
			<StyledIcon.Icon>
				<IoAnalyticsOutline fontSize={"44px"} />
				Analytics
			</StyledIcon.Icon>
			<StyledIcon.Icon>
				<MdOutlineDesignServices fontSize={"44px"} />
				Design
			</StyledIcon.Icon>
		</StyledIcon.Inner>
	);
};

export default Icon;
