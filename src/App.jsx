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
import { Button } from "./components/ui/button";

function App() {
	return (
		<div className="dark bg-background text-primary w-full h-screen">
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
		</div>
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
			<footer className="bg-black">Detta är en footer</footer>
		</>
	);
}
const HomePage = () => {
	return (

			<h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
				STARTSIDAN
			</h1>
	);
};
const FishingPage = () => {
	return (
		<>
			<h1>FISKE</h1>
			<Button variant="secondary">Test</Button>
		</>
	);
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
