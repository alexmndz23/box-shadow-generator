import { useContext } from "react";
import Context from "./Context";
import { PiMoon, PiSun } from "react-icons/pi";

export default function Header() {
	const { darkMode, toggleTheme } = useContext(Context);

	return (
		<div className="h-[50px] flex-shrink-0 px-4 border-b grid items-center">
			<div className="flex justify-between text-black dark:text-white max-w-[1200px] w-full mx-auto">
				<h1 className="font-semibold text-xl">Box Shadow Generator</h1>
				{darkMode ? (
					<PiSun size={24} onClick={toggleTheme} />
				) : (
					<PiMoon size={24} onClick={toggleTheme} />
				)}
			</div>
		</div>
	);
}
