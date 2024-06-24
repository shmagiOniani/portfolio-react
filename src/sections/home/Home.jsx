import { Col, Flex, Layout, Row } from "antd";
import React from "react";
import Gig from "../../components/gig/Gig";
import "./home.scss";
import BgEffect from "../../components/bg-effect/BgEffect";

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "calc(80% - 8px)",
  maxWidth: "calc(80% - 8px)",
  background: "transparent",
  padding: '15px'
};

const colGigStyle = {
  display: "flex",
  justifyContent: "center",
};
function Home() {
  return (
    <Flex gap="middle" justify="center">
      <Layout style={layoutStyle}>
        <Row>
          {[1, 1, 1].map((i) => {
            return (
              <Col span={8} style={colGigStyle}>
                <Gig></Gig>
              </Col>
            );
          })}

          <Col span={24}>
            <BgEffect>
              <div style={{ width: "200px", height: "200px" }}>opaaaa</div>
            </BgEffect>
          </Col>
        </Row>
      </Layout>
    </Flex>
  );
}

export default Home;
