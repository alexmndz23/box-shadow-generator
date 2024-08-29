import { useContext } from "react";
import { Button } from "antd";
import ShadowItem from "./ShadowItem";
import Context from "./Context";

export default function ShadowList() {
	const { shadows, addShadow } = useContext(Context);

	return (
		<div className="col-span-1 p-3 flex flex-col gap-2">
			<Button block onClick={addShadow}>
				Add shadow
			</Button>
			<div className="flex flex-col gap-2">
				{shadows.map((shadow, index) => (
					<ShadowItem shadow={shadow} shadowIndex={index} />
				))}
			</div>
		</div>
	);
}
