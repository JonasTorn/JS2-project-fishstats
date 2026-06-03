export const DEFAULT_PAGE_SIZE = 25;

export const EXCLUDED_KEYS = ["id", "created_at", "updated_at", "deleted_at"];
export const isExcludedColumn = (key) => !EXCLUDED_KEYS.includes(key);

export const SORTABLE_KEYS = [
	"measurementday",
	"length",
	"weight",
	"airtemp",
	"watertemp",
	"waterlevel",
	"sex",
];
export const isSortableColumn = (key) => SORTABLE_KEYS.includes(key);

export const DEFAULT_VISIBLE_KEYS = [
	"measurementday",
	"length",
	"weight",
	"airtemp",
	"watertemp",
	"waterlevel",
];

export const COLUMN_ORDER = [
	"measurementday",
	"length",
	"weight",
	"sex",
	"airtemp",
	"watertemp",
	"waterlevel",
	"timeofday",
	"weather",
	"precipitation",
	"visitors",
];

export const COLUMN_TITLES = {
	measurementday: "Datum",
	timeofday: "Tid",
	airtemp: "Lufttemp",
	watertemp: "Vattentemp",
	waterlevel: "Vattennivå",
	weather: "Väder",
	precipitation: "Nederbörd",
	visitors: "Besökare",
	sex: "Kön",
	length: "Längd",
	weight: "Vikt",
};

export const API_BASE_URL =
	"https://xn--dammn-pra.se/wp-json/fishregister/v1/list/";
