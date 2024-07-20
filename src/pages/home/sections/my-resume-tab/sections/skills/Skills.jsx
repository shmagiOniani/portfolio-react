import React from "react";
import { Col, Row } from "antd";
import { SectionTitle } from "../../../../../../shared/components";
import { SkillLineChart } from "../../../components";

const skillObj = {
  title: "PHOTOSHOT",
  percentage: 85,
};

function Skills() {
  return (
    <Row gutter={[64, 0]}>
      <Col span={12}>
        <SectionTitle headerSize={'36px'} paragraph={"Features"} header={"Design Skill"} />
      </Col>
      <Col span={12}>
        <SectionTitle headerSize={'36px'} paragraph={"Features"} header={"Development Skill"} />
      </Col>

      <Col span={12}>
        {[1, 1, 1, 1, 1, 1].map((dsdsd, i) => {
          return <SkillLineChart key={i} title={skillObj.title} percentage={skillObj.percentage} />;
        })}
      </Col>
      <Col span={12}>
        {[1, 1, 1, 1, 1, 1].map((dsdsd, i) => {
          return <SkillLineChart key={i} title={skillObj.title} percentage={skillObj.percentage} />;
        })}
      </Col>
    </Row>
  );
}

export default Skills;
