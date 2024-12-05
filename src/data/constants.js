// Vilka "keys" i datan som INTE ska kunna visas som kolumner i tabellen
export const EXCLUDED_KEYS = ["id", "created_at", "updated_at", "deleted_at"];

// Vilka "keys" som ska kunna sorteras
export const SORTABLE_KEYS = [
	"measurementday",
	"length",
	"weight",	
	"airtemp",
	"watertemp",
	"waterlevel",
];

// Vilka "keys" som ska visas som STANDARD som kolumner i tabellen
export const DEFAULT_VISIBLE_KEYS = [
	"measurementday",
	"length",
	"weight",
	"sex",
	"airtemp",
	"watertemp",
	"waterlevel",
];

// STANDARD rader per sida i tabellen
export const PAGE_SIZE = 25;

// API-BAS-URL för fisklista per år
export const API_BASE_URL =
	"https://xn--dammn-pra.se/wp-json/fishregister/v1/list/";
