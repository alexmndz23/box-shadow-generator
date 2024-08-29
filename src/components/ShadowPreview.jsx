import React, { useState } from "react";
import { ColorPicker, Form } from "antd";

export default function ShadowPreview() {
	const [bgColor, setBgColor] = useState("#AB5253");

	const styles = { backgroundColor: bgColor };

	return (
		<div className="flex-grow p-4">
			<div className="w-[500px] mx-auto flex flex-col gap-3">
				<div className="h-[500px] rounded-lg" style={styles}></div>
				<div className="flex items-center gap-3">
					<label>Background color</label>
					<ColorPicker
						value={bgColor}
						onChange={(color) => setBgColor(color.toHexString())}
					/>
				</div>
			</div>
		</div>
	);
}
