import React, { useState } from "react";
import MaterialTable from "@material-table/core";
import Edit from "@material-ui/icons/Edit";

import "./App.css";

const lookup = { true: "Available", false: "Unavailable" };

const DEMO_COLUMNS = [
	{ title: "First Name", field: "firstName" },
	{ title: "Last Name", field: "lastName" },
	{
		title: "Birth Year",
		field: "birthYear",
		type: "numeric",
		cellStyle: { textAlign: "left" }
	},
	{ title: "Availability", field: "availability", lookup }
];

const DEMO_DATA = [
	{ firstName: "Tod", lastName: "Miles", birthYear: 1987, availability: true },
	{ firstName: "Jess", lastName: "Smith", birthYear: 2000, availability: false }
];

function App() {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	return (
		<div className="App">
			<div className="Table">
				<MaterialTable
					title="Employee Data"
					columns={DEMO_COLUMNS}
					data={DEMO_DATA}
					actions={[
						{
							icon: () => <Edit />,
							tooltip: "Edit",
							onClick: (event, rowData) => {
								const rowJson = JSON.stringify(rowData, null, 2);
								alert(`Passed value in Edit : ${rowJson}`);
							}
						}
					]}
					options={{
						actionsColumnIndex: -1
					}}
				/>
			</div>
		</div>
	);
}

export default App;

