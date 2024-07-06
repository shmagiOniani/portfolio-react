import React from 'react'
import { Tabs } from 'antd';
import "./custom-tab.scss";

function CustomTab({items}) {
  return (
    <Tabs
    type="card"
    items={items}
  />
  )
}

export default CustomTab