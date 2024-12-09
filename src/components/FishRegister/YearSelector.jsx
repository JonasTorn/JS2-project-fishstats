import React from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";

const YearSelector = ({year, setYear, yearSpan}) => {
	return (
		<Select value={year} onValueChange={(value) => setYear(value)}>
			<SelectTrigger className="w-36">
				<SelectValue placeholder="Välj år:" />
			</SelectTrigger>
			<SelectContent className="max-h-[300px] overflow-y-auto">
				<SelectGroup>
					<SelectLabel>Årtal</SelectLabel>
					{yearSpan.map((yearOption) => (
						<SelectItem key={yearOption} value={yearOption}>
							{yearOption}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
};

export default YearSelector;
