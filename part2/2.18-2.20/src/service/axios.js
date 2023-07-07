import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";

const getAll = () => {
	const request = axios.get(baseUrl);
	return request.then((response) => response.data);
};

const getName = (name) => {
	const request = axios.get(baseUrl);
	return request.then((response) => response.data);
};
const getWeather = (city) => {
	const request = axios.get(
		`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
			import.meta.env.VITE_WEATHER_API_KEY
		}&units=metric`
	);
	return request.then((response) => response.data);
};

export default { getAll, getName, getWeather };
