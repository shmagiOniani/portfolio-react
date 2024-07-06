import { Card, Space } from "antd";
import React from "react";
import "./gig.scss";

function Gig({ children }) {
  return (
    <Space direction="vertical" className="gig-card">
      <Card style={{ width: " 100%",  }}>
        {children}
      </Card>
    </Space>
  );
}

export default Gig;
