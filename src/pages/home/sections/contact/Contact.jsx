import React from "react";
import { Col, Row, Button, Form, Input, Typography } from "antd";
import { useFormData } from "herotofu-react";
import { random } from "../../../../assets/images";
import "./contact.scss";
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
/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};

function Contact() {
  const { formState, getFormSubmitHandler } = useFormData(
  );

  return (
    <Row gutter={[36, 36]} className="conatct-form-wrapper">
      <Col xs={0} md={9}>
        <div className="contact-intro">
          <div className="contact-intro-img">
            <img src={random} alt="" />
          </div>
          <Typography.Title className="contact-h4" level={4}>
            Nice To Meet Yuo
          </Typography.Title>

          <p>Chief Operating Officer</p>
          <p>I am available for freelance work. Connect with me via and call in to my account.</p>
          <p>Phone: <strong>+012 345 678 90</strong></p>
          <p>Email: <strong>admin@example.com</strong></p>
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
        </div>
      </Col>
      <Col xs={0} md={15}>
        {/* {!!formState.status && (
          <div>Current form status is: {formState.status}</div>
        )} */}
        {/* <form onSubmit={getFormSubmitHandler()}>
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
      </form> */}

        <Form
          onFinish={onFinish}
          className="contact-form"
          validateMessages={validateMessages}
        >
          <Form.Item
            name={"name"}
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              paddingRight: "10px",
            }}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"mobile"}
            label="Mobile"
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              paddingRight: "10px",
            }}
          >
            <Input />
          </Form.Item>
          <Form.Item name={"subject"} label="Subject">
            <Input />
          </Form.Item>
          <Form.Item
            name={"email"}
            label="Email"
            rules={[
              {
                required: true,
                type: "email",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name={"introduction"}
            label="YOUR MESSAGE"
            rules={[
              {
                required: true,
              },
            ]}
            style={{
              minHeight: "220px",
            }}
          >
            <Input.TextArea rows={5} />
          </Form.Item>
          <Button className="submit-btn" type="primary" htmlType="submit">
            SEND MESSAGE
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default Contact;

// const App = () => (
//   <Form
//     {...layout}
//     name="nest-messages"
//     onFinish={onFinish}
//     style={{
//       maxWidth: 600,
//     }}
//     validateMessages={validateMessages}
//   >
//     <Form.Item
//       name={['user', 'name']}
//       label="Name"
//       rules={[
//         {
//           required: true,
//         },
//       ]}
//     >
//       <Input />
//     </Form.Item>
//     <Form.Item
//       name={['user', 'email']}
//       label="Email"
//       rules={[
//         {
//           type: 'email',
//         },
//       ]}
//     >
//       <Input />
//     </Form.Item>
//     <Form.Item
//       name={['user', 'age']}
//       label="Age"
//       rules={[
//         {
//           type: 'number',
//           min: 0,
//           max: 99,
//         },
//       ]}
//     >
//       <InputNumber />
//     </Form.Item>
//     <Form.Item name={['user', 'website']} label="Website">
//       <Input />
//     </Form.Item>
//     <Form.Item name={['user', 'introduction']} label="Introduction">
//       <Input.TextArea />
//     </Form.Item>
//     <Form.Item
//       wrapperCol={{
//         ...layout.wrapperCol,
//         offset: 8,
//       }}
//     >
//       <Button type="primary" htmlType="submit">
//         Submit
//       </Button>
//     </Form.Item>
//   </Form>
// );
// export default App;
