import React from "react";
import { Col, Row } from "antd";
import { Gig } from "../../../../shared/components";
import { PortfolioItem, ServiceItem } from "../components";

const item = 
    {
      title: "App Development",
      paragraph:
        "  We’ll handle everything from to app development process until it is time to make your project live. ",
      href: "",
    }

function Portfolio() {
  return (
    <Row gutter={[32, 32]}>
      {[1, 1, 1, 1, 1, 1].map((dsdsd, i) => {
        return (
          <Col
            key={i + "ewwefewf"}
            span={8}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Gig>
              <PortfolioItem contentData={item} />
            </Gig>
          </Col>
        );
      })}
    </Row>
  )
}

export default Portfolio