import React from "react";
import { Space, Typography } from "antd";

function SectionTitle({ paragraph, header, align }) {
  return (
    <Space
      direction="vertical"
      size="middle"
      style={{ display: "flex", textTransform: "uppercase", rowGap: 0, textAlign: align, marginBottom: '40px' }}
    >
      <Typography.Paragraph style={{ color: "#f9004d", letterSpacing: '1px'}}>
        {paragraph}
      </Typography.Paragraph>
      <Typography.Title
        style={{
          color: "#c4cfde",
          textTransform: "capitalize",
          margin: "0px",
          fontSize: "60px",
        }}
        level={1}
      >
        {header}
      </Typography.Title>
    </Space>
  );
}

export default SectionTitle;
