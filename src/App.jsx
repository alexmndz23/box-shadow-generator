import React, { useContext } from "react";
import Context from "./components/Context";
import { ConfigProvider, theme } from "antd";
const { defaultAlgorithm, darkAlgorithm } = theme;
import FitContent from "./components/FitContent";
import Header from "./components/Header";
import ShadowPreview from "./components/ShadowPreview";
import ShadowList from "./components/ShadowList";
import ShadowCode from "./components/ShadowCode";

export default function App() {
	const { darkMode } = useContext(Context);

	return (
		<ConfigProvider
			theme={{
				algorithm: darkMode ? darkAlgorithm : defaultAlgorithm,
			}}
		>
			<div class="bg-white dark:bg-neutral-950">
				<FitContent>
					<div className="flex flex-col max-w-[1200px] w-full mx-auto h-screen border-x">
						<Header />
						<div className="flex-grow flex">
							<ShadowPreview />
							<ShadowList />
						</div>
						<ShadowCode />
					</div>
				</FitContent>
			</div>
		</ConfigProvider>
	);
}
