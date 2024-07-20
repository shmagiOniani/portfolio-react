import React from "react";
import { Col, Divider, Flex, Row, Typography } from "antd";
import "./education-item.scss";

function EducationItem({ contentData }) {
  return (
    <Flex
      gap="middle"
      justify="center"
      vertical="true"
      className="education-item-wrapper"
    >
      <Row>
        <Col span={20}>
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
          <p
            className="education-p-item"
            style={{
              lineHeight: "14px",
            }}
          >
            {contentData.subTitle}
          </p>
        </Col>
        <Col span={4}>
          <div className="education-subinfo-wrapper">
           {contentData.headerSubInfo}
          </div>
        </Col>
        <Divider style={{ backgroundColor: "#1a1d23" }} />
        <Col span={24}>
          <p
            className="education-p-item"
            style={{
              lineHeight: "28px",
              letterSpacing: "2px",
            }}
          >
            {contentData.paragraph}
          </p>
        </Col>
      </Row>
    </Flex>
  );
}

export default EducationItem;
