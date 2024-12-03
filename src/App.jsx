
import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FishingPage from "./pages/FishingPage";
import HomePage from "./pages/HomePage";
import StatsPage from "./pages/StatsPage";
import AccommodationPage from "./pages/AccommodationPage";
import PicturesPage from "./pages/PicturesPage";

function App() {
	return (
		// <div className="bg-background text-primary w-full ">

		<div className="h-screen" id="site-wrapper">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<HomePage />}></Route>
						<Route path="fiske" element={<FishingPage />}></Route>
						<Route path="statistik" element={<StatsPage />}></Route>
						<Route path="boende" element={<AccommodationPage />}></Route>
						<Route path="bilder" element={<PicturesPage />}></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}
const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default App;
