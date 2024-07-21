import React from "react";
import { Col, Row } from "antd";
import { UnorderedListOutlined, ReadOutlined } from "@ant-design/icons";
import { Gig } from "../../../../shared/components";
import { ServiceItem } from "../components";

const itemsArr = [
  {
    icon: <UnorderedListOutlined />,
    title: "business strategy",
    paragraph:
      " I throw myself down among the tall grass by the stream as Ilie close to the earth.",
    href: "",
  },
  {
    icon: <ReadOutlined />,
    title: "App Development",
    paragraph:
      "  We’ll handle everything from to app development process until it is time to make your project live. ",
    href: "",
  },
];

function MyServices() {
  return (
    <Row gutter={[32, 32]}>
      {[1, 1, 1, 1, 1, 1].map((item, i) => {
        return (
          <Col
            key={i + "ewwefewf"}
            xl={8}
            md={12}
            xs={24}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Gig>
              <ServiceItem contentData={itemsArr[0]} />
            </Gig>
          </Col>
        );
      })}
    </Row>
  );
}

export default MyServices;
