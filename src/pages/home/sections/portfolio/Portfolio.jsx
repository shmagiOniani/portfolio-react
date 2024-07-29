import React, { useState } from "react";
import { Col, Modal, Row } from "antd";
import { Gig } from "../../../../shared/components";
import { PortfolioItem, ServiceItem } from "../components";
import "./portfolio.scss";
import { PortfolioDetailsModal } from "./sections";
import { PORTFOLIO_ITEMS } from "../../../../assets/static-data/portfolio";

const item = {
  title: "App Development",
  paragraph: "Gallery",
  href: "",
};



function Portfolio({id}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Row id={id} gutter={[32, 32]}>
        {[1, 1, 1, 1, 1, 1].map((dsdsd, i) => {
          return (
            <Col
              key={i + "ewwefewf"}
              xl={8}
              md={12}
              xs={24}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Gig>
                <PortfolioItem
                  contentData={item}
                  onClick={() => setOpen(true)}
                />
              </Gig>
            </Col>
          );
        })}
      </Row>
      <Modal
        className="portfolio-modal"
        title=""
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={"100%"}
        // height={"100%"}
        style={{paddingBottom: "30px"}}
        footer=""
      >
        <PortfolioDetailsModal data={PORTFOLIO_ITEMS} />
      </Modal>
    </>
  );
}

export default Portfolio;
