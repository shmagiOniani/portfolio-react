import React from "react";
import { Col, Row, Typography } from "antd";
import "./headline.scss";
import { me } from "../../../../assets/images";
import facebook from "../../../../assets/images/social-icons/facebook.svg";
import twitter from "../../../../assets/images/social-icons/twitter.svg";
import linkedin from "../../../../assets/images/social-icons/linkedin.svg";

const socialLinks = [
  {
    title: "facebook",
    link: "",
    icon: facebook,
  },
  {
    title: "twitter",
    link: "",
    icon: twitter,
  },
  {
    title: "linkedin",
    link: "",
    icon: linkedin,
  },
];

function Headline() {
  return (
    <Row className="headline-wrapper">
      <Col md={12} lg={15}>
        <Typography.Paragraph className="sub-header">
          WELCOME TO MY WORLD
        </Typography.Paragraph>
        <Typography.Title className="main-header" level={1}>
          Hi, I’m <span>Shmagi Oniani</span>
        </Typography.Title>
        <Typography.Title className="main-header" level={1}>
          A JavaScript Developer
        </Typography.Title>
        <Typography.Paragraph className="about-myself">
          I use animation as a third dimension by which to simplify experiences
          and kuiding thro each and every interaction. I’m not adding motion
          just to spruce things up, but doing it in ways that.
        </Typography.Paragraph>

        <Typography.Paragraph
          className="sub-header"
          style={{ marginTop: "70px" }}
        >
          FIND WITH ME
        </Typography.Paragraph>
        {socialLinks.map((i) => {
          return (
            <div className="social-link">
              <a href={i.link}>
                <img width={20} height={20} src={i.icon} alt="" />
              </a>
            </div>
          );
        })}
      </Col>
      <Col md={12} lg={9}>
        <div className="headline-img-wrapper">
          <img src={me} alt="" />
        </div>
      </Col>
    </Row>
  );
}

export default Headline;
