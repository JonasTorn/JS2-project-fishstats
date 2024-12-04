import React from "react";

const Columns = ({ data }) => {
	if (!data || data.length === 0) return [];

	// Vilka "keys" som INTE ska visas på sidan
	const keysToExclude = ["id", "created_at", "updated_at", "deleted_at"];
	const filteredKeys = Object.keys(data[0] || {}).filter(
		(key) => !keysToExclude.includes(key)
	);

	// Skapar kolumner
	return filteredKeys.map((key) => ({
		accessorKey: key,
		header: key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, " "),
		cell: ({ row }) => row.getValue(key),
	}));
};

export default Columns;
