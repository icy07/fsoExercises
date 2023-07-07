import React from "react";

const Person = ({ person, handleDelete }) => {
	return (
		<li>
			<span>
				name: {person.name} <br />
				phone: {person.phone}
			</span>
			<button onClick={() => handleDelete(person.id, person.name)}>delete</button>
		</li>
	);
};

export default Person;
