import React from "react";
import { Col, Row } from "antd";

import { Gig, SectionTitle } from "../../../../../../shared/components";
import { EducationItem } from "../../../components";
import "./education.scss";

const itemsArr = [
  {
    title: "BSc in Computer Science",
    subTitle: "University of DVI (2006 - 2010)",
    paragraph:
      "The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.",
    headerSubInfo: "3.90/4",
  },
];

function Education() {
  return (
    <Row gutter={[64, 0]} className="edu-wrapper">

      <Col span={12}>
        <SectionTitle headerSize={'36px'} paragraph={"1998 - 2010"} header={"Education Quality"} />
      </Col>
      <Col span={12}>
        <SectionTitle headerSize={'36px'} paragraph={"2010 - 2022"} header={"Job Experience"} />
      </Col>
      <Col span={12} className="edu-col">
        <Row>
          {[1, 1, 1].map((item, i) => {
            return (
              <Col key={i + "ewwefewf"} span={24} className="edu-col-item">
                <Gig>
                  <EducationItem contentData={itemsArr[0]} />
                </Gig>
              </Col>
            );
          })}
        </Row>
      </Col>
      <Col span={12} className="edu-col">
        <Row>
          {[1, 1, 1].map((item, i) => {
            return (
              <Col key={i + "ewwefewf"} span={24} className="edu-col-item">
                <Gig>
                  <EducationItem contentData={itemsArr[0]} />
                </Gig>
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
}

export default Education;
