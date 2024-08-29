import {
	useContext,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from "react";
import { Button, Collapse, Input } from "antd";
import ShadowItem from "./ShadowItem";
import Context from "./Context";
import { PiX } from "react-icons/pi";

export default function ShadowList() {
	const { shadows, addShadow, removeShadow, changeShadow } =
		useContext(Context);
	const [shadowListMaxHeight, setShadowListMaxHeight] = useState(null);
	const shadowListRef = useRef(null);

	useLayoutEffect(() => {
		if (shadowListRef.current) {
			setShadowListMaxHeight(getShadowListHeight());
		}
	}, []);

	function getShadowListHeight() {
		const height = shadowListRef.current.offsetHeight;
		return height;
	}

	function getExtra(index) {
		return (
			<Button
				type="text"
				size="small"
				danger
				icon={<PiX size={18} />}
				onClick={(event) => {
					removeShadow(index);
					event.stopPropagation();
				}}
			/>
		);
	}

	return (
		<div className="w-[400px] flex-shrink-0 flex flex-col gap-2 p-4 border-l">
			<Button block onClick={addShadow}>
				Add shadow
			</Button>
			<div
				ref={shadowListRef}
				className="flex flex-col gap-2 overflow-auto h-full"
				style={{ maxHeight: shadowListMaxHeight }}
			>
				<Collapse
					size="small"
					items={shadows.map((shadow, index) => ({
						key: index,
						label: `Shadow ${index + 1}`,
						children: (
							<ShadowItem key={index} shadow={shadow} shadowIndex={index} />
						),
						extra: getExtra(index),
					}))}
				/>
			</div>
		</div>
	);
}
