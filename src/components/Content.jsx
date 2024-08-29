import ShadowList from "./ShadowList";
import ShadowPreview from "./ShadowPreview";

export default function Content() {
	return (
			<div className="border-x grid grid-cols-3 divide-x max-w-[1200px] w-full mx-auto flex-grow">
				<ShadowPreview />
				<ShadowList />
			</div>
	);
}
