import React from "react";
import { Row, Col, Typography, Menu } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import { Link } from "react-router-dom";

import "./header.scss";

const { Title } = Typography;

class NavHeader extends React.Component {
  render() {
    return (
      <>
        <Header>
          <Row align="middle">
            <Col xs={20} sm={20} md={12} lg={8} xl={8}>
              <Title level={2}> KNUT EISBAR </Title>
            </Col>
            <Col xs={4} sm={4} md={12} lg={16} xl={16}>
              <Menu mode="horizontal">
                <Menu.Item key="inicio">
                  <Link to="/">INICIO</Link>
                </Menu.Item>
                <Menu.Item key="social">
                  <Link to="/social">REDES SOCIALES</Link>
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Header>
      </>
    );
  }
}

export default function () {
  return <NavHeader />;
}
