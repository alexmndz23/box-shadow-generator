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
				inset: false,
				horizontalLength: 10,
				verticalLength: 10,
				blurRadius: 5,
				spreadRadius: 5,
				shadowColor: "#000000",
				opacity: .5,
			},
		]);
	}

	function removeShadow(index) {
		setShadows((prevShadows) => [
			...prevShadows.filter((shadow, i) => i != index),
		]);
	}

	function changeShadow(prop, value, index) {
		setShadows((prevShadows) => [
			...prevShadows.map((shadow, i) => {
				if (i == index) {
					shadow[prop] = value;
				}
				return shadow;
			}),
		]);
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
				changeShadow,
			}}
		>
			{children}
		</Context.Provider>
	);
}
