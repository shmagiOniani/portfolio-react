import { Col, Layout, Row } from "antd";
import React from "react";
import Gig from "../../components/gig/Gig";
import "./home.scss";
import BgEffect from "../../components/bg-effect/BgEffect";

function Home() {
  return (
    <Layout className="home-layout">
      <Row>
        <Col span={6}>
          <Gig></Gig>
        </Col>
        <Col span={6}>
          <Gig></Gig>
        </Col>
        <Col span={6}>
          <Gig></Gig>
        </Col>
        <Col span={6}>
          <Gig></Gig>
        </Col>
        <Col span={24}>
          <BgEffect>
            <div style={{width: "200px", height: "200px"}}>

            opaaaa
            </div>
          </BgEffect>
        </Col>
      </Row>
    </Layout>
  );
}

export default Home;
