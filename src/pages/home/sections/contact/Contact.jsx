import React from "react";
import { useFormData } from "herotofu-react";
import "./contact.scss";
import { Col, Row } from "antd";

function Contact() {
  const { formState, getFormSubmitHandler } = useFormData(
    "https://herotofu.com/start"
  );

  return (
    <Row>
        <Col xs={0} md={8}>
        </Col>
        <Col xs={0} md={16}>
        
      {!!formState.status && (
        <div>Current form status is: {formState.status}</div>
      )}
      <form onSubmit={getFormSubmitHandler()}>
        <div>
          <input type="text" placeholder="Your name" name="name" required />
        </div>
        <div>
          <input type="email" placeholder="Email" name="email" required />
        </div>
        <div>
          <textarea placeholder="Your message" name="message" required />
        </div>
        <div>
          <button type="submit"> Send a message </button>
        </div>
      </form>
      </Col>

    </Row>
  );
}

export default Contact;
