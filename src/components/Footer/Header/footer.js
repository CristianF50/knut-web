import React from "react";
import { Row, Col, Typography, Menu } from "antd";
import { Content, Header, Footer } from "antd/lib/layout/layout";
import { Link } from "react-router-dom";
import { SiEpicgames } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

import "./footer.scss";

const { Title, Text } = Typography;

class NavFooter extends React.Component {
  render() {
    return (
      <>
        <Footer>
          <Row align="middle">
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <SiEpicgames size={30} fill="white" />
              <Text className="ml-1 contact" level={2}>
                KNUTEISBAR
              </Text>
            </Col>
            <Col className="flex-right" xs={24} sm={24} md={12} lg={12} xl={12}>
              <a href="mailto:contacto@knuteisbar.xyz">
                <HiOutlineMail size={30} fill="white" />
                <Text className="ml-1 contact" level={2}>
                  contacto@knuteisbar.xyz
                </Text>
              </a>
            </Col>
          </Row>
        </Footer>
      </>
    );
  }
}

export default function () {
  return <NavFooter />;
}
