import React, { useState } from "react";
import { Col, Modal, Row } from "antd";
import { Gig } from "../../../../shared/components";
import { PortfolioItem, ServiceItem } from "../components";
import "./portfolio.scss";
import { PortfolioDetailsModal } from "./sections";
import { portfolioOne, portfolioTwo } from "../../../../assets/images";

const item = {
  title: "App Development",
  paragraph: "Gallery",
  href: "",
};

const modalParams = {
  title: "NFT Dashboard Application Development.",
  subTitle: (
    <p>
      Through a wide variety of <b> mobile applications </b> , we’ve developed a
      unique visual system.
    </p>
  ),
  client: "George Wallace",
  date: "15 June 2022",
  imgArr: [portfolioOne, portfolioTwo],
  description: (
    <div>
      <p>
        There are always some stocks, which illusively scale lofty heights in a
        given time period. However, the good show doesn’t last for these
        overblown toxic stocks as their current price is not justified by their
        fundamental strength.
      </p>
      <p>
        Toxic companies are usually characterized by huge debt loads and are
        vulnerable to external shocks. Accurately identifying such bloated
        stocks and getting rid of them at the right time can protect your
        portfolio.
      </p>
      <p>
        Overpricing of these toxic stocks can be attributed to either an
        irrational enthusiasm surrounding them or some serious fundamental
        drawbacks. If you own such bubble stocks for an inordinate period of
        time, you are bound to see a massive erosion of wealth.
      </p>
      <div style={{ borderRadius: "15px", overflow: "hidden" }}>
        <img src={portfolioOne} alt="portfolio" />
      </div>
      <p>
        However, if you can precisely spot such toxic stocks, you may gain by
        resorting to an investing strategy called short selling. This strategy
        allows one to sell a stock first and then buy it when the price falls.
      </p>
      <div style={{ borderRadius: "15px", overflow: "hidden" }}>
        <img src={portfolioTwo} alt="portfolio" />
      </div>
      <p>
        However, if you can precisely spot such toxic stocks, you may gain by
        resorting to an investing strategy called short selling. This strategy
        allows one to sell a stock first and then buy it when the price falls.
      </p>
    </div>
  ),
};

function Portfolio() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Row gutter={[32, 32]}>
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
        <PortfolioDetailsModal data={modalParams} />
      </Modal>
    </>
  );
}

export default Portfolio;
