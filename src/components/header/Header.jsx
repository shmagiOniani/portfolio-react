import React from "react";
import { Col, Row } from "antd";

// import fb from "../../assets/images/facebook-bright.png"
// import github from "../../assets/images/github-bright.png"
import "./header.scss";

const SECTION_LIST = [
  {
    title: "home",
    href: "#home",
  },
  {
    title: "feature",
    href: "#feature",
  },
  {
    title: "portfolio",
    href: "#portfolio",
  },
  {
    title: "resume",
    href: "#resume",
  },
  {
    title: "Testimonial",
    href: "#testimonial",
  },
  {
    title: "Clients",
    href: "#clients",
  },
  {
    title: "Pricing",
    href: "#pricing",
  },
  {
    title: "Contacts",
    href: "#contacts",
  },
];

function Header() {
  return (
    <header>
      <nav>
        <Row>
          <Col xs={2}>logo</Col>
          <Col xs={8}>
            <div className="nav-body-wrapper">
              <ul>
                {SECTION_LIST.map((mapItem) => {
                  return (
                    <li>
                      <a href={mapItem.href}>{mapItem.title}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Col>
          <Col xs={2}></Col>
        </Row>
      </nav>
    </header>
  );
}

export default Header;
