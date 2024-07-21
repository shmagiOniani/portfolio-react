import React from "react";
import { ImgCarousel } from "../../../../../../shared/components";
import { Col, Divider, Row, Typography } from "antd";
import "./portfolio-details-modal.scss";

function PortfolioDetailsModal({ data }) {
  return (
    <Row>
      <Col lg={12} xs={24}>
        <div className="profile-slider-wrapper">
          <ImgCarousel imgArr={data?.imgArr} />
        </div>
      </Col>
      <Col lg={12} xs={24} style={{padding: "30px"}}>
        <Typography.Title
          className="portfolio-h1"
        
          level={1}
        >
          {data.title}
        </Typography.Title>
        <Typography.Paragraph className="portfolio-p">
          {data.subTitle}
        </Typography.Paragraph>
        <Row>
          <Col xs={12}>
            <p>
              <strong>Client:</strong> {data.client}
            </p>
          </Col>
          <Col xs={12}>
            <p>
              <strong>Date:</strong> {data.date}
            </p>
          </Col>
        </Row>
        </Col>

        <Divider style={{ backgroundColor: "#121415" }} />
        {data.description}
      
    </Row>
  );
}

export default PortfolioDetailsModal;
