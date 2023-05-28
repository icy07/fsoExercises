import React from "react";

const Header = ({ course }) => {
	return <h1>{course}</h1>;
};

const Part = ({ part, exercises }) => {
	return (
		<p>
			{part} {exercises}
		</p>
	);
};

const Content = ({ parts }) => {
	return parts.map((part) => <Part key={part.name} part={part.name} exercises={part.exercises} />);
};

const Total = ({ parts }) => {
	const sum = parts.reduce((sum, part) => sum + part.exercises, 0);
	return <p>Number of exercises {sum}</p>;
};

const App = () => {
	const course = {
		name: "Half Stack application development",
		parts: [
			{
				name: "Fundamentals of React",
				exercises: 10,
			},
			{
				name: "Using props to pass data",
				exercises: 7,
			},
			{
				name: "State of a component",
				exercises: 14,
			},
		],
	};

	return (
		<div>
			<Header course={course.name} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</div>
	);
};

export default App;
