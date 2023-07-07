import React, { useState, useEffect } from "react";
import axiosData from "../service/axios";

const CountryInfo = ({ country }) => {
	const [languages, setLanguages] = useState([]);
	const [weather, setWeather] = useState(null);

	useEffect(() => {
		setLanguages([]);
		for (let i in country.languages) {
			setLanguages((prev) => [...prev, country.languages[i]]);
		}
	}, [country]);

	useEffect(() => {
		axiosData.getWeather(country.capital).then((data) => {
			setWeather(data);
		});
	}, []);

	return (
		<div>
			<h2>{country.name.official}</h2>
			<h3>{country.name.common}</h3>
			<p>Region: {country.region}</p>
			<p>Capital: {country.capital}</p>
			<p>Population: {country.population}</p>
			<p style={{ marginTop: "10px" }}>Languages:</p>
			<ul>
				{languages.map((lan) => (
					<li key={lan}>{lan}</li>
				))}
			</ul>
			<img src={`${country.flags.png}`} alt={`${country.flags.alt}`} />
			{weather && (
				<>
					<h3 style={{ marginTop: "25px" }}>Weather in {country.capital}:</h3>
					<p>temperature: {weather.main.temp} Celcius</p>
					<p>feels like: {weather.main.feels_like} Celcius</p>
					<p>{weather.weather[0].description}</p>
					<img
						src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
						alt={`${weather.weather[0].description}`}
					/>
					<p>wind: {weather.wind.speed} m/s</p>
				</>
			)}
		</div>
	);
};

export default CountryInfo;
