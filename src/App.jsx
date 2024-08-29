import React, { useContext } from "react";
import Context from "./components/Context";
import { ConfigProvider, theme } from "antd";
const { defaultAlgorithm, darkAlgorithm } = theme;
import Header from "./components/Header";
import Content from "./components/Content";

export default function App() {
	const { darkMode } = useContext(Context);

	return (
		<ConfigProvider
			theme={{
				algorithm: darkMode ? darkAlgorithm : defaultAlgorithm,
			}}
		>
			<div class="bg-white dark:bg-neutral-950 h-screen flex flex-col">
				<Header />
				<Content />
			</div>
		</ConfigProvider>
	);
}
