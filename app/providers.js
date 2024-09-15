"use client";
import { Toaster } from "react-hot-toast";

const Providers = ({ children }) => {
	return (
		<>
			<Toaster></Toaster>
			{children}
		</>
	);
};
export default Providers;
