import React from "react";
import { Col, Divider, Flex, Layout, Row } from "antd";

import {
  BgEffect,
  CustomTab,
  Gig,
  SectionTitle,
} from "../../shared/components";
import "./home.scss";
import { MyResumeTab, MyServices, Portfolio } from "./sections";

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "calc(80% - 8px)",
  maxWidth: "calc(80% - 8px)",
  background: "transparent",
  padding: "15px",
};

const colGigStyle = {
  display: "flex",
  justifyContent: "center",
};
function Home() {
  return (
    <Flex gap="middle" justify="center">
      <Layout style={layoutStyle}>

        <SectionTitle
          align={"center"}
          paragraph={"7+ YEARS OF EXPERIENCE"}
          header={"My Resume"}
        />
        <MyResumeTab />

        <Divider style={{ backgroundColor: "#121415" }} />

        <SectionTitle paragraph={"FEATURES"} header={"What I Do"} />
        <MyServices />

        <Divider style={{ backgroundColor: "#121415" }} />

        <SectionTitle
          align={"center"}
          paragraph={"VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"}
          header={"My Portfolio"}
        />
        <Portfolio />
      </Layout>
    </Flex>
  );
}

export default Home;
