import { useState, useEffect } from "react";
import axiosData from "./service/axios";

import Countries from "./components/Countries";

function App() {
	const [countries, setCountries] = useState(null);
	const [filteredCountries, setFilteredCountries] = useState(null);

	useEffect(() => {
		axiosData
			.getAll()
			.then((data) => {
				setCountries(data);
			})
			.catch((error) => {
				console.log("No Country found");
			});
	}, []);

	const handleSearch = (e) => {
		setFilteredCountries(
			countries.filter((country) =>
				country.name.official.toLowerCase().includes(e.target.value.toLowerCase())
			)
		);
	};

	return (
		<>
			<div className="search">
				<p>find countries</p>
				<input
					type="text"
					onChange={(e) => handleSearch(e)}
					className={`${countries ? "" : "disabled"}`}
					placeholder={`${countries ? "" : "loading..."}`}
				/>
			</div>
			{filteredCountries && <Countries countriesData={filteredCountries} />}
		</>
	);
}

export default App;
