import { useState, useEffect } from "react";

function useFishData(year, apiUrl) {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getFishDataByYear = async (selectedYear) => {
			try {
				setIsLoading(true);
				setError(null);
				const response = await fetch(apiUrl + selectedYear);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const responseData = await response.json();
				const fishData = responseData.Fish || [];
				setData(fishData);
				setIsLoading(false);
			} catch (e) {
				setError(e.message);
				setData([]);
				setIsLoading(false);
			}
		};

		getFishDataByYear(year);
	}, [year, apiUrl]);

	return { data, isLoading, error };
}

export default useFishData;
