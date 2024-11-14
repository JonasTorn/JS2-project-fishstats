import { Component, useState } from "react";
import "./App.css";
import {
	BrowserRouter,
	Routes,
	Route,
	Link,
	NavLink,
	Outlet,
} from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<HomePage />}></Route>
						<Route path="fishing" element={<FishingPage />}></Route>
						<Route path="stats" element={<StatsPage />}></Route>
						<Route path="accommodation" element={<AccommodationPage />}></Route>
						<Route path="pictures" element={<PicturesPage />}></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}
function Layout() {
	return (
		<>
			<NavLink to="/">Start</NavLink>
			<NavLink to="/fishing">Fiske</NavLink>
			<NavLink to="/stats">Statistik</NavLink>
			<NavLink to="/accommodation">Boende</NavLink>
			<NavLink to="/pictures">Bilder</NavLink>
			<Outlet />
			<footer>Detta är en footer</footer>
		</>
	);
}
const HomePage = () => {
	return <h1>STARTSIDAN</h1>;
};
const FishingPage = () => {
	return <h1>FISKE</h1>;
};
const StatsPage = () => {
	return <h1>Statistik</h1>;
};
const AccommodationPage = () => {
	return <h1>BOENDE OCH SERVICE</h1>;
};
const PicturesPage = () => {
	return <h1>BILDER</h1>;
};

export default App;
