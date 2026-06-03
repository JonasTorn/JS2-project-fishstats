import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import StatsPage from "./pages/StatsPage";
import Layout from "./Layout/Layout";

function App() {
	return (
		<div className="h-screen" id="site-wrapper">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<StatsPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}


export default App;
