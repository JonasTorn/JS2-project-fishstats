import React from "react";

const Columns = ({ data, excludedKeys }) => {
	if (!data || data.length === 0) return [];



	const filteredKeys = Object.keys(data[0] || {}).filter(
		(key) => !excludedKeys.includes(key)
	);

	// Skapar kolumner
	return filteredKeys.map((key) => ({
		accessorKey: key,
		header: key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, " "),
		cell: ({ row }) => row.getValue(key),
	}));
};

export default Columns;
