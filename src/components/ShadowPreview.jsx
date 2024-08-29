import React, { useState } from "react"
import { ColorPicker, Form } from "antd";

export default function ShadowPreview() {
  const [bgColor, setBgColor] = useState('#AB5253');

  const styles = { backgroundColor: bgColor }

  return (
    <div className='col-span-2 p-3'>
      <div className='w-[500px] h-[500px] rounded-lg' style={styles}></div>
      <Form.Item label='Background color'>
        <ColorPicker value={bgColor} onChange={(color) => setBgColor(color.toHexString())}/>
      </Form.Item>
    </div>
  )
}
