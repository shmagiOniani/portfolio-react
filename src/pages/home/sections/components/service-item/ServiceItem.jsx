import React from "react";
import { Flex, Typography } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { IconWrapper } from "../../../../../shared/components";
import "./service-item.scss"

function ServiceItem({ contentData }) {
  return (
    <Flex gap="middle" justify="center" vertical="true" className="service-item-wrapper">
      <IconWrapper icon={contentData.icon} size={'37px'}/>
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
      <p  style={{ color: "#c4cfde", font: '16px Poppins, sans-serif',    lineHeight: '28px' }}>
        {contentData.paragraph}
      </p>
      
      <a href={contentData.href} className="service-icon-wrapper">
        <IconWrapper icon={<ArrowRightOutlined />} size={'27px'}/>
      </a>

      
    </Flex>
  );
}

export default ServiceItem;
