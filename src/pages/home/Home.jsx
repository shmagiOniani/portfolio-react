import React from "react";
import { Divider, Flex, Layout } from "antd";

import { Contact, Headline, MyResumeTab, MyServices, Portfolio } from "./sections";
import { SectionTitle } from "../../shared/components";
import "./home.scss";

function Home() {
  return (
    <Flex gap="middle" justify="center">
      <Layout className="home-container">
        {/* headline */}
        <Headline />
        {/* services */}
        <Divider
          style={{ margin: "73px 0px 68px 0px", backgroundColor: "#121415" }}
        />

        <SectionTitle paragraph={"FEATURES"} header={"What I Do"} />
        <MyServices />
        <Divider
          style={{ margin: "73px 0px 68px 0px", backgroundColor: "#121415" }}
        />

        {/* portfolio */}
        <SectionTitle
          align={"center"}
          paragraph={"VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"}
          header={"My Portfolio"}
        />
        <Portfolio />
        <Divider
          style={{ margin: "73px 0px 68px 0px", backgroundColor: "#121415" }}
        />
        {/* resume tab */}
        <SectionTitle
          align={"center"}
          paragraph={"7+ YEARS OF EXPERIENCE"}
          header={"My Resume"}
        />

        <MyResumeTab />
        <Divider
          style={{ margin: "73px 0px 68px 0px", backgroundColor: "#121415" }}
        />
        {/* contact */}
        <SectionTitle
          align={"center"}
          paragraph={"CONTACT"}
          header={"Contact With Me"}
        />
        <Contact/>
      </Layout>
    </Flex>
  );
}

export default Home;
