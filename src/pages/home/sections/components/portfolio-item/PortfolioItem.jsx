import React from "react";
import { Flex, Typography } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { IconWrapper } from "../../../../../shared/components";
import "./portfolio-item.scss";

function PortfolioItem({ contentData }) {
  return (
    <Flex
      gap="middle"
      justify="center"
      vertical="true"
      className="portfolio-item-wrapper"
    >
      <p
        style={{
          color: "#ff014f",
          font: "16px Poppins, sans-serif",
          lineHeight: "28px",
        }}
      >
        {contentData.paragraph}
      </p>
      <Typography.Title
        style={{
          color: "#c4cfde",
          textTransform: "capitalize",
          margin: "0px",
        }}
        level={3}
      >
        {contentData.title}
      </Typography.Title>

      <div className="portfolio-icon-wrapper">
        <IconWrapper icon={<ArrowRightOutlined />} size={"27px"} />
      </div>
    </Flex>
  );
}

export default PortfolioItem;
