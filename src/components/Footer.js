import React from "react";
import { Ftr } from "./styled-component/Footer.style";
import {
  TwitterLogo,
  FacebookLogo,
  InstagramLogo,
  DribbbleLogo,
  EnvelopeSimple,
} from "phosphor-react";
import { Col, Row, Input } from "antd";

const Footer = () => {
  return (
    <Row>
      <Col xs={24} sm={24} md={8} lg={8} xl={8}>
        <Ftr.Container>
          <Ftr.Text1>UTERO BOUTIQUE</Ftr.Text1>
          <Ftr.Text2>
            The inspiration got from natural, color pastel
            <br />
            and activities the daily.
          </Ftr.Text2>
        </Ftr.Container>
      </Col>
      <Col xs={24} sm={24} md={8} lg={8} xl={8}>
        <Ftr.Container style={{ borderLeft: "none", borderRight: "none" }}>
          <Ftr.Text1>OUR SOCIAL</Ftr.Text1>
          <Ftr.IconRow>
            <Ftr.Icon>
              <TwitterLogo size={24} />
            </Ftr.Icon>
            <Ftr.Icon>
              <FacebookLogo size={24} />
            </Ftr.Icon>
            <Ftr.Icon>
              <InstagramLogo size={24} />
            </Ftr.Icon>
            <Ftr.Icon>
              <DribbbleLogo size={24} />
            </Ftr.Icon>
          </Ftr.IconRow>
        </Ftr.Container>
      </Col>
      <Col xs={24} sm={24} md={8} lg={8} xl={8}>
        <Ftr.Container>
          <Ftr.Text1>NEWSLETTER</Ftr.Text1>
          <Ftr.Input>
            <Input
              placeholder="Enter your email"
              bordered={false}
              prefix={<EnvelopeSimple />}
            />
            <Ftr.Subscribe>SUBSCRIBE</Ftr.Subscribe>
          </Ftr.Input>
        </Ftr.Container>
      </Col>
    </Row>
  );
};

export default Footer;
