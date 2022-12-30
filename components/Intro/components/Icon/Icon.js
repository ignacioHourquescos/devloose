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
				<BsCodeSlash />
				Development
			</StyledIcon.Icon>
			<StyledIcon.Icon>
				<FaMagic />
				Creativity
			</StyledIcon.Icon>
			<StyledIcon.Icon>
				<IoAnalyticsOutline />
				Analytics
			</StyledIcon.Icon>
			<StyledIcon.Icon>
				<MdOutlineDesignServices />
				Design
			</StyledIcon.Icon>
		</StyledIcon.Inner>
	);
};

export default Icon;
