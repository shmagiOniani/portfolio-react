import React from "react";
import { Col, Row } from "antd";
import { Gig } from "../../../../shared/components";
import { ServiceItem } from "../components";
import { MY_SEVICES } from "../../../../assets/static-data/services";



function MyServices({id}) {
  return (
    <Row id={id} gutter={[32, 32]}>
      {MY_SEVICES.map((item, i) => {
        return (
          <Col
            key={i + "ewwefewf"}
            xl={8}
            md={12}
            xs={24}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Gig>
              <ServiceItem contentData={item} />
            </Gig>
          </Col>
        );
      })}
    </Row>
  );
}

export default MyServices;
