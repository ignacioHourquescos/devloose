import { TagCloud } from "react-tagcloud";
import react from "react";
import UTILS from "../../../utils/utils";

const data = [
	{ value: "jQuery", count: Math.random() * 30 },
	{ value: "MongoDB", count: 18 },
	{ value: "JavaScript", count: 38 },
	{ value: "React", count: 30 },
	{ value: "Nodejs", count: 28 },
	{ value: "Express.js", count: 25 },
	{ value: "HTML5", count: 33 },
	{ value: "CSS3", count: 20 },
	{ value: "Webpack", count: 22 },
	{ value: "Babel.js", count: 7 },
	{ value: "ECMAScript", count: 25 },
	{ value: "Jest", count: 15 },
	{ value: "Mocha", count: 17 },
	{ value: "React Native", count: 27 },
	{ value: "Angular.js", count: 30 },
	{ value: "TypeScript", count: 15 },
	{ value: "Flow", count: 30 },
	{ value: "NPM", count: 11 },
	{ value: "Styled Components", count: 25 },
	{ value: "Sass", count: 25 },
	{ value: "Less", count: 25 },
];

const customRenderer = (tag, size, color) => (
	<span
		key={tag.value}
		style={{
			animation: "blinker 3s linear infinite",
			animationDelay: `${2}s`,
			fontSize: `${size / 2}em`,
			animation: "blinker 3s linear infinite",
			animationDelay: `${Math.random() * 2}s`,
			fontSize: `${size / 2}em`,
			border: `2px solid ${color}`,
			border: `2px solid ${UTILS.COLORS.BLACK}`,
			margin: "3px",
			padding: "0 1rem",
			display: "inline-block",
			color: UTILS.COLORS.BLACK,
			borderRadius: "40px",
		}}
	>
		{tag.value}
	</span>
);
const Technologies = () => (
	<TagCloud tags={data} minSize={1} maxSize={5} renderer={customRenderer} />
);
export default Technologies;
