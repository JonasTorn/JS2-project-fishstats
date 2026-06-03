# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Fisketrappa** is a web application for Dammåns FVO (fish conservation area), built to display and manage fish statistics from a fish ladder monitoring system. The site tracks trout (öring) and other fish species migrating upstream, with data collection since 2002.

The application is primarily in Swedish with English translation support throughout.

## Tech Stack

- **Frontend Framework:** React 18.3.1 with Vite 5.4
- **Routing:** React Router DOM v6
- **State Management:** Zustand (lightweight, for language preference)
- **UI Components:** shadcn/ui (Radix UI primitives with Tailwind styling)
- **Styling:** Tailwind CSS 3.4 with custom CSS variables for theming
- **Data Tables:** TanStack React Table v8 (advanced table with sorting, pagination, column visibility)
- **Charts:** Recharts v2.14 (area charts for statistics visualization)
- **Icons:** Lucide React
- **Build Tool:** Vite with React Fast Refresh via SWC/Babel
- **Linting:** ESLint 9 with React plugins

## Project Structure

```
src/
├── pages/                    # Route pages (HomePage, StatsPage, FishingPage, etc.)
├── components/
│   ├── FishList/            # Fish statistics table components
│   │   ├── columns.jsx      # Dynamic column definition for TanStack Table
│   │   ├── useTableState.js # Hook managing table state (sorting, pagination, visibility)
│   │   ├── TableContent.jsx # Table rendering
│   │   └── [other table UI components]
│   ├── ui/                  # Shadcn UI components (card, button, select, dialog, etc.)
│   ├── FishStatsChart.jsx   # Area chart showing yearly fish counts
│   ├── FishStatsTable.jsx   # Main table wrapper component
│   └── [navigation, layout components]
├── Layout/
│   ├── Layout.jsx           # Root layout with Header and Footer
│   ├── Header.jsx           # Navigation header with language switcher
│   └── Footer.jsx
├── services/
│   ├── useFishData.js       # Hook fetching yearly fish data from API
│   └── fetchData.js         # Utility functions for API calls
├── lib/
│   ├── languageStore.js     # Zustand store for language state (sv/en)
│   └── utils.js             # Utility functions
├── data/
│   ├── constants.js         # Table config (column order, sortable keys, API URL)
│   └── styles.js            # Tailwind class constants (article, title, paragraph)
├── App.jsx                  # Router setup
└── main.jsx                 # React root entry point
```

## Available Commands

```bash
npm run dev      # Start Vite dev server (HMR enabled)
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## Key Architectural Patterns

### Routing & Pages
- **Routing:** BrowserRouter wraps all routes with Layout as parent
- **Routes:** `/`, `/fiske` (fishing), `/fisktrappa` (fish ladder stats), `/boende` (accommodation), `/bilder` (pictures)
- All routes render through shared `Layout` component (Header + Outlet + Footer)

### Data Fetching & State
- **API Base URL:** `https://xn--dammn-pra.se/wp-json/fishregister/v1/` (WordPress REST API)
- **Fish Data Hook:** `useFishData(year, apiUrl)` fetches yearly fish records, returns `{ data, isLoading, error }`
- **Chart Data:** `getAmountYearlyAll()` fetches aggregated yearly counts for area chart
- **Language State:** Zustand store `useLanguageStore` persists language preference (sv/en)

### Fish Statistics Table (`StatsPage`)
- Uses **TanStack React Table** for complex table functionality
- **Dynamic Columns:** Generated from API response keys, filtered by `EXCLUDED_KEYS` and `DEFAULT_VISIBLE_KEYS` (constants.js)
- **Sortable Columns:** Only keys in `SORTABLE_KEYS` (measurementday, length, weight, temps, etc.) support sorting
- **Column Visibility Menu:** Users can toggle column visibility
- **Pagination:** Default 25 rows per page, configurable via `DEFAULT_PAGE_SIZE`
- **Year Selector:** Users select year (2002–present) to view historical data
- **Tabs:** Switch between "List" (table) and "Statistics" (area chart)

### Styling
- **Tailwind CSS** with custom color theme (CSS variables in `src/index.css`)
- **Primary Color:** `#1c3a70` (dark blue)
- **Secondary Color:** `#0066cc` (bright blue)
- **CSS Variables:** Theme colors defined in `:root` for light/dark modes
- **Shadcn Components:** Use class-variance-authority for variant styling
- **Custom Classes:** Global styles (`.active`, `.active-navbar`) in `index.css`

## Important Configuration Files

- **`vite.config.js`:** Path alias `@` points to `src/` directory
- **`jsconfig.json`:** Mirrors Vite alias for IDE support
- **`tailwind.config.js`:** Extends theme with custom colors, uses CSS variable colors
- **`components.json`:** Shadcn configuration (aliases, icon library Lucide, style="new-york")
- **`eslint.config.js`:** ESLint flat config with React, React Hooks, React Refresh plugins; ignores `dist/`

## API Endpoints

| Endpoint | Purpose |
|----------|---------|
| `/list/{year}` | Get fish records for a specific year |
| `/stats/amountyearly/{startYear}/{endYear}` | Get yearly aggregated fish counts |

Response format for `/list/{year}`: `{ Fish: [{ id, measurementday, length, weight, sex, airtemp, watertemp, waterlevel, ... }] }`

## Development Notes

- **Language i18n:** All user-facing text is either hardcoded with ternary checks (`language === "sv" ? ... : ...`) or stored in `COLUMN_TITLES` constant
- **Table Column Filtering:** The `columns.jsx` function dynamically builds column definitions from API response. Order is controlled by `COLUMN_ORDER` array.
- **Responsive Design:** Mobile-first with Tailwind breakpoints; Header has hamburger menu on mobile
- **Chart Placeholder:** `FishStatsChart.jsx` includes commented TODO for additional chart types
- **Pictures Page:** Currently a stub with placeholder text—ready for implementation
- **Error Handling:** Simple error states in loading/error cards; errors from fetch hooks propagate to components

## Testing & Quality

- **ESLint:** React best practices enforced (hooks rules, JSX refresh)
- **No Unit Tests:** Project currently has no test suite configured
- **No TypeScript:** Uses JSX with comment-based type hints (via `/** @type */`)

