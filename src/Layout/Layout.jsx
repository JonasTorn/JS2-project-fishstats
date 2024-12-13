import Footer from "@/Layout/Footer";
import Header from "@/Layout/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
