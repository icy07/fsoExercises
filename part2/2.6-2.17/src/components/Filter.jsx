import React from "react";

const Filter = ({ handleSearch }) => {
	return (
		<div className="search">
			<p>filter shown with</p>
			<input type="text" onChange={handleSearch} />
		</div>
	);
};

export default Filter;
