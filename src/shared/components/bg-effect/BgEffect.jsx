import React from "react";
import {  Space } from "antd";
import "./bg-effect.scss";

function BgEffect({children}) {
  return (
    <Space direction="vertical" size={16} className="bg-effect-wrapper">
      
     <div className="bg-effect-container">
        {children}
     </div>
    </Space>
  )
}

export default BgEffect