import React from "react";
import ListItem from "./ListItem";
import CountryInfo from "./CountryInfo";

const Countries = ({ countriesData }) => {
	if (countriesData.length > 10) {
		return <p>Too many matches, specify another filter</p>;
	}

	if (countriesData.length > 1) {
		return (
			<ul className="countries-list">
				{countriesData.map((country) => (
					<ListItem key={country.name.official} country={country} />
				))}
			</ul>
		);
	}

	if (countriesData.length == 1) {
		return <CountryInfo country={countriesData[0]} />;
	}
};

export default Countries;
