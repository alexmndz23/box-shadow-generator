import React, { useEffect, useState } from "react";
import Context from "./Context";

export default function ContextProvider({ children }) {
	const [darkMode, setDarkMode] = useState(false);
	const [shadows, setShadows] = useState([]);

	function toggleTheme() {
		setDarkMode(!darkMode);
	}

	function addShadow() {
		setShadows([
			...shadows,
			{
				title: null,
				horizontalLength: 10,
				verticalLength: 10,
				blurRadius: 5,
				spreadRadius: 5,
				shadowColor: "#000000",
				opacity: 0.5,
				inset: false,
			},
		]);
	}

	function removeShadow(index) {
		setShadows([...shadows.filter((shadow, i) => i != index)]);
	}

	useEffect(() => {
		document.documentElement.classList.toggle("dark", darkMode);
	}, [darkMode]);

	return (
		<Context.Provider
			value={{
				darkMode,
				toggleTheme,
				shadows,
				addShadow,
				removeShadow,
			}}
		>
			{children}
		</Context.Provider>
	);
}
