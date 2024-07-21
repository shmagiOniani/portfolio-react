import React from "react";
import { Flex, Typography } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { IconWrapper } from "../../../../../shared/components";
import random from "../../../../../assets/images/random.png";
import "./portfolio-item.scss";

function PortfolioItem({ contentData, onClick }) {
  return (
    <Flex
      gap="middle"
      justify="center"
      vertical="true"
      className="portfolio-item-wrapper"
      onClick={onClick} 
    >
      <div className="portfolio-item-img">
        <img src={random} alt="eandom" />
      </div>

      <p
        style={{
          color: "#ff014f",
          font: "16px Poppins, sans-serif",
          lineHeight: "28px",
        }}
      >
        {contentData.paragraph}
      </p>
      <div className="portfolio-title-container">
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
          <IconWrapper icon={<ArrowRightOutlined />}  />
        </div>
      </div>
    </Flex>
  );
}

export default PortfolioItem;
