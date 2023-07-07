import { useState, useEffect } from "react";
import personsDB from "./service/persons.js";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [filteredPersons, setFilteredPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newPhone, setNewPhone] = useState("");
	const [notification, setNotification] = useState(null);
	const [isError, setIsError] = useState(null);

	useEffect(() => {
		personsDB.getAll().then((allPersons) => {
			setPersons(allPersons);
		});
	}, []);

	useEffect(() => {
		setFilteredPersons(persons);
	}, [persons]);

	const handleSubmit = (e) => {
		e.preventDefault();

		let newObj = { name: newName, phone: newPhone };

		const existedValue = persons.find((el) => el.name === newObj.name);

		if (existedValue) {
			window.confirm(
				`${newName} is already added to phonebook, Do you want to update the number?`
			)
				? personsDB.update(existedValue.id, newObj).then((allPersons) => {
						setPersons(
							persons.map((item) => (item.name === newObj.name ? allPersons : item))
						);
						setNotification(`Number for ${newObj.name} changed`);
						setIsError(false);

						setTimeout(() => {
							setNotification(null);
							setIsError(null);
						}, 3000);
				  })
				: null;
		} else {
			personsDB.create(newObj).then((allPersons) => {
				setPersons(persons.concat(allPersons));
				setNotification(`Added ${newObj.name}`);
				setIsError(false);

				setTimeout(() => {
					setNotification(null);
					setIsError(null);
				}, 3000);
			});
		}
	};

	const handleSearch = (e) => {
		setFilteredPersons(
			persons.filter((item) =>
				item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
			)
		);
	};

	const handleDelete = (id, name) => {
		window.confirm("Do you really want to delete this person?")
			? personsDB
					.deletePerson(id)
					.then(() => {
						setNotification(`${name} has been deleted!`);
						setIsError(false);
						setPersons(persons.filter((item) => item.id !== id));

						setTimeout(() => {
							setNotification(null);
							setIsError(null);
						}, 3000);
					})
					.catch(() => {
						setNotification(`${name} has already been deleted from the server`);
						setIsError(true);
						setPersons(persons.filter((n) => n.id !== id));

						setTimeout(() => {
							setNotification(null);
							setIsError(null);
						}, 3000);
					})
			: null;
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<Notification message={notification} isError={isError} />
			<Filter handleSearch={handleSearch} />
			<h2>Add a new</h2>
			<PersonForm
				handleSubmit={handleSubmit}
				newName={newName}
				setNewName={setNewName}
				newPhone={newPhone}
				setNewPhone={setNewPhone}
			/>
			<h2>Numbers</h2>
			<Persons filteredPersons={filteredPersons} handleDelete={handleDelete} />
		</div>
	);
};

export default App;
