import React from "react";
import { Space, Typography } from "antd";

function SectionTitle({ headerSize, paragraph, header, align }) {
  return (
    <Space
      direction="vertical"
      size="middle"
      style={{
        display: "flex",
        textTransform: "uppercase",
        rowGap: 0,
        textAlign: align,
        marginBottom: "40px",
      }}
    >
      <Typography.Paragraph  style={{ color: "#f9004d", letterSpacing: "1px" }}>
        {paragraph}
      </Typography.Paragraph>
      <Typography.Title
      className="section-h1"
        style={{
          color: "#c4cfde",
          textTransform: "capitalize",
          margin: "0px",
          fontSize: headerSize || "60px",
        }}
        level={1}
      >
        {header}
      </Typography.Title>
    </Space>
  );
}

export default SectionTitle;
