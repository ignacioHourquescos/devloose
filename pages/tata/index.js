import React, { useEffect } from "react";

const Tata = (props) => {
	useEffect(() => {
		window.location.replace(
			"https://www.notion.so/devloose/TATA-276a3fe7c3c14ff68ae280066693c3b4?pvs=4"
		);

		return () => clearTimeout(timeout);
	}, []);
	return <div>Tata</div>;
};

export default Tata;
