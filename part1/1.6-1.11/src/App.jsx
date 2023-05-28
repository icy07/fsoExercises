import { useState } from "react";

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;

const StatisticLine = ({ text, value }) => {
	return (
		<tbody>
			<tr>
				<td>{text}</td>
				<td>{value}</td>
			</tr>
		</tbody>
	);
};

const Statistics = ({ good, neutral, bad }) => {
	const total = good + neutral + bad;
	const average = (good - bad) / total;
	const positive = (good / total) * 100;

	if (total === 0) {
		return <p>No feedback given</p>;
	}
	return (
		<>
			<h2>Statistics</h2>
			<table>
				<StatisticLine text="Good" value={good} />
				<StatisticLine text="Neutral" value={neutral} />
				<StatisticLine text="Bad" value={bad} />
				<StatisticLine text="Total" value={total} />
				<StatisticLine text="Average" value={average} />
				<StatisticLine text="Positive" value={positive} />
			</table>
		</>
	);
};

function App() {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<>
			<h1>Give Feedback</h1>
			<Button handleClick={() => setGood(good + 1)} text="Good" />
			<Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
			<Button handleClick={() => setBad(bad + 1)} text="Bad" />
			<Statistics good={good} neutral={neutral} bad={bad} />
		</>
	);
}

export default App;
