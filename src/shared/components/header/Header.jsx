import React, { useEffect, useState } from "react";
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
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`section-header-wrapper ${offset > 120 ? "fixed-header" : ""}`}
    >
      <nav>
        <Row>
          <Col xs={2}></Col>
          <Col xs={20}>
            <div className="nav-body-wrapper">
              <ul>
                {SECTION_LIST.map((mapItem, i) => {
                  return (
                    <li key={i + mapItem.title}>
                      <a href={mapItem.href}>{mapItem.title}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Col>
          <Col xs={2}>
            <a class="contact-btn" target="_blank" href="#contact">
              <span>CONTACT </span>
            </a>
          </Col>
        </Row>
      </nav>
    </header>
  );
}

export default Header;
