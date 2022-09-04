import React from "react";
import { Row, Col, Typography, Card, Avatar } from "antd";
import { Link } from "react-router-dom";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";

import Header from "../Header/header.js";
import { Content } from "antd/lib/layout/layout.js";

import "./landing.css";
import Footer from "../Footer/Header/footer.js";

const { Title, Paragraph } = Typography;

class Landing extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }

  componentDidMount() {
    this.vantaEffect = WAVES({
      el: this.vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x222222,
      shininess: 5.0,
      waveHeight: 2.5,
      zoom: 1.0,
    });
  }

  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }

  render() {
    return (
      <>
        <Header />
        <Content ref={this.vantaRef}>
          <Row className="w-100" align="center">
            <Card className="card-acerca mt-1">
              <Row justify="center">
                <Avatar size={80} src='/knut.jpg'/>
              </Row>
              <Row justify="center">
                <Title className="card-title" strong>
                  ACERCA DE MÍ
                </Title>
              </Row>
              <Row className="mt-1">
                <Paragraph className="card-text">
                  Mi nombre es Alberto (me suelen decir Polar), soy ingeniero en
                  sistemas y tengo 34 años...
                </Paragraph>
                <Paragraph className="card-text">
                  Tengo un trabajo ordinario y para salir de la rutina he
                  decidido compartir mi pasatiempo favorito (jugar juegos :D) y
                  pasarla bien con todos ustedes.
                </Paragraph>
                <Paragraph className="card-text">
                  Mi meta es entretenerte y sobre todo ayudarte a olvidar tu
                  rutina diaria con carcajadas o buenos momentos.
                </Paragraph>
              </Row>
            </Card>
          </Row>
        </Content>
        <Footer/>
      </>
    );
  }
}

export default function () {
  return <Landing />;
}
