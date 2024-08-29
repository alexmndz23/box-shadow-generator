import { Button, Card, Input, InputNumber, Slider } from "antd";
import { useContext } from "react";
import { PiX } from "react-icons/pi";
import Context from "./Context";

export default function ShadowItem({ shadow, shadowIndex }) {
	const { removeShadow } = useContext(Context);

	return (
		<Card
			className="w-full"
			size="small"
			title={<Input variant="borderless" value={shadow.title ?? `Shadow ${shadowIndex + 1}`} />}
			extra={
				<Button
					type="text"
					size="small"
					danger
					icon={<PiX size={20} />}
					onClick={() => removeShadow(shadowIndex)}
				/>
			}
		>
			<div>
				<div className="flex justify-between items-center">
					<label>Horizontal length</label>
					<InputNumber
						value={shadow.horizontalLength}
						size="small"
						min={-200}
						max={200}
					/>
				</div>
				<Slider
					value={shadow.horizontalLength}
					min={-200}
					max={200}
					onChange={false}
				/>
			</div>
			<div>
				<div className="flex justify-between items-center">
					<label>Vertical length</label>
					<InputNumber
						value={shadow.verticalLength}
						size="small"
						min={-200}
						max={200}
					/>
				</div>
				<Slider
					value={shadow.verticalLength}
					min={-200}
					max={200}
					onChange={false}
				/>
			</div>
			<div>
				<div className="flex justify-between items-center">
					<label>Blur radius</label>
					<InputNumber
						value={shadow.blurRadius}
						size="small"
						min={-200}
						max={200}
					/>
				</div>
				<Slider
					value={shadow.blurRadius}
					min={-200}
					max={200}
					onChange={false}
				/>
			</div>
			<div>
				<div className="flex justify-between items-center">
					<label>Spread radius</label>
					<InputNumber
						value={shadow.spreadRadius}
						size="small"
						min={-200}
						max={200}
					/>
				</div>
				<Slider
					value={shadow.spreadRadius}
					min={-200}
					max={200}
					onChange={false}
				/>
			</div>
		</Card>
	);
}
