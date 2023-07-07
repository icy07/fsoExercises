import React, { useState } from "react";
import CountryInfo from "./CountryInfo";

const ListItem = ({ country }) => {
	const [isShown, setIsShown] = useState(false);

	const handleInfoShow = (e) => {
		setIsShown(!isShown);
	};
	return (
		<li>
			<span>
				{country.name.official}{" "}
				<button onClick={handleInfoShow}>{isShown ? "hide" : "show"}</button>
			</span>
			{isShown && <CountryInfo country={country} />}
		</li>
	);
};

export default ListItem;
