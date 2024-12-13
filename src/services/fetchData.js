
// Kan enkelt ersättas med valfritt årtal och "currentYear"
export async function getAmountYearlyAll(startYear = 1950, endYear = 2024) {
    try {
      const response = await fetch(`https://xn--dammn-pra.se/wp-json/fishregister/v1/stats/amountyearly/${startYear}/${endYear}`);
      const jsonData = await response.json();
      
      // Transform the data into the format needed for the chart
      const transformedData = jsonData.labels.map((year, index) => ({
        year,
        amount: jsonData.datasets[0].data[index]
      }));
      
      return { data: transformedData, error: null };
    } catch (err) {
      return { data: null, error: "Failed to load fish statistics" };
    }
  }

export const getWeightYearly = async () => {
	// const response = await fetch("https://xn--dammn-pra.se/wp-json/fishregister/v1/stats/weight/")
	// Exempel:
	// https://xn--dammn-pra.se/wp-json/fishregister/v1/stats/weight/2020/2023
	// Visar medelvikt på alla fiskar som vandrade upp år 2020 - 2023
};
export const getAmountMonthly = async () => {
	// const response = await fetch("https://xn--dammn-pra.se/wp-json/fishregister/v1/stats/amountmonthly/")
	// Exempel mängd per månad:
	// https://xn--dammn-pra.se/wp-json/fishregister/v1/stats/amountmonthly/2010
	// Visar hur många som vandrade upp per månad under 2010
};
