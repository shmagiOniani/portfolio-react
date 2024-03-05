import { Card, Space } from "antd";
import React from "react";
import "./gig.scss";

function Gig() {
  return (
    <Space direction="vertical" size={16} className="gig-card">
      
      <Card
        title="Default size card"
        // extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </Space>
  );
}

export default Gig;
