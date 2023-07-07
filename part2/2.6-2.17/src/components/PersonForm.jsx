import React from "react";

const PersonForm = ({ handleSubmit, newName, newPhone, setNewName, setNewPhone }) => {
	return (
		<form onSubmit={handleSubmit}>
			<div>
				name:{" "}
				<input
					value={newName}
					onChange={(e) => {
						setNewName(e.target.value);
					}}
				/>
			</div>
			<div>
				number:{" "}
				<input
					value={newPhone}
					onChange={(e) => {
						setNewPhone(e.target.value);
					}}
				/>
			</div>
			<div>
				<button type="submit">add</button>
			</div>
		</form>
	);
};

export default PersonForm;
