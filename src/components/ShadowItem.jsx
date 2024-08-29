import {
	Button,
	Card,
	ColorPicker,
	Input,
	InputNumber,
	Slider,
	Switch,
} from "antd";
import { useContext } from "react";
import { PiX } from "react-icons/pi";
import Context from "./Context";

export default function ShadowItem({ shadow, shadowIndex }) {
	const { removeShadow, changeShadow } = useContext(Context);

	return (
		<Card
			className="w-full"
			size="small"
			title={
				<Input
					className="pl-0"
					variant="borderless"
					value={shadow.title ?? `Shadow ${shadowIndex + 1}`}
					onChange={(e) => changeShadow("title", e.target.value, shadowIndex)}
				/>
			}
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
			<div className="flex flex-col gap-4">
				<div className="flex justify-between items-center">
					<label>Inset</label>
					<Switch
						value={shadow.inset}
						onChange={(cheked) => changeShadow("inset", cheked, shadowIndex)}
					/>
				</div>
				<div>
					<div className="flex justify-between items-center">
						<label>Horizontal length</label>
						<InputNumber
							size="small"
							min={-200}
							max={200}
							value={shadow.horizontalLength}
							onChange={(value) =>
								changeShadow("horizontalLength", value, shadowIndex)
							}
						/>
					</div>
					<Slider
						className="mb-0"
						min={-200}
						max={200}
						value={shadow.horizontalLength}
						onChange={(value) =>
							changeShadow("horizontalLength", value, shadowIndex)
						}
					/>
				</div>
				<div>
					<div className="flex justify-between items-center">
						<label>Vertical length</label>
						<InputNumber
							size="small"
							min={-200}
							max={200}
							value={shadow.verticalLength}
							onChange={(value) =>
								changeShadow("verticalLength", value, shadowIndex)
							}
						/>
					</div>
					<Slider
						className="mb-0"
						min={-200}
						max={200}
						value={shadow.verticalLength}
						onChange={(value) =>
							changeShadow("verticalLength", value, shadowIndex)
						}
					/>
				</div>
				<div>
					<div className="flex justify-between items-center">
						<label>Blur radius</label>
						<InputNumber
							size="small"
							min={-200}
							max={200}
							value={shadow.blurRadius}
							onChange={(value) =>
								changeShadow("blurRadius", value, shadowIndex)
							}
						/>
					</div>
					<Slider
						className="mb-0"
						min={-200}
						max={200}
						value={shadow.blurRadius}
						onChange={(value) => changeShadow("blurRadius", value, shadowIndex)}
					/>
				</div>
				<div>
					<div className="flex justify-between items-center">
						<label>Spread radius</label>
						<InputNumber
							size="small"
							min={-200}
							max={200}
							value={shadow.spreadRadius}
							onChange={(value) =>
								changeShadow("spreadRadius", value, shadowIndex)
							}
						/>
					</div>
					<Slider
						className="mb-0"
						min={-200}
						max={200}
						value={shadow.spreadRadius}
						onChange={(value) =>
							changeShadow("spreadRadius", value, shadowIndex)
						}
					/>
				</div>
				<div>
					<div className="flex justify-between items-center">
						<label>Opacity</label>
						<InputNumber
							size="small"
							min={0}
							max={1}
							step={0.01}
							precision={2}
							value={shadow.opacity}
							onChange={(value) => changeShadow("opacity", value, shadowIndex)}
						/>
					</div>
					<Slider
						className="mb-0"
						min={0}
						max={1}
						step={0.01}
						value={shadow.opacity}
						onChange={(value) => changeShadow("opacity", value, shadowIndex)}
					/>
				</div>
				<div>
					<div className="flex justify-between items-center">
						<label>Shadow color</label>
						<ColorPicker
							value={shadow.shadowColor}
							onChange={(color) =>
								changeShadow("shadowColor", color.toHexString(), shadowIndex)
							}
						/>
					</div>
				</div>
			</div>
		</Card>
	);
}
