import React from "react";
import { Row, Col, Typography, Card, Avatar, List } from "antd";
import { Link } from "react-router-dom";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";

import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { BsTwitch, BsFacebook } from "react-icons/bs";
import { FaTiktok, FaDiscord, FaTelegram, FaLastfm } from "react-icons/fa";

import Header from "../Header/header.js";
import { Content } from "antd/lib/layout/layout.js";

import "./redes.css";
import Footer from "../Footer/Header/footer.js";

const { Title, Paragraph, Text } = Typography;

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
    const data = [
      {
        classname: "card-twitter",
        handle: "@eisbarknut",
        logo: <AiFillTwitterCircle size={64} fill="#1B92E2" />,
        link: "https://twitter.com/eisbarknut",
      },
      {
        classname: "card-twitch",
        handle: "KnutEisbar",
        logo: <BsTwitch size={64} fill="#BF94FF" />,
        link: "https://www.twitch.tv/KnutEisbar",
      },
      {
        classname: "card-tiktok",
        handle: "@knuteisbar",
        logo: <FaTiktok size={64} fill="#FFFFFF" />,
        link: "https://www.tiktok.com/@knuteisbar",
      },
      {
        classname: "card-discord",
        handle: "Knut Eisbar Gaming",
        logo: <FaDiscord size={64} fill="#5865F2" />,
        link: "https://discord.gg/JbvAhJY6XC",
      },
      {
        classname: "card-telegram",
        handle: "La Cueva Artica",
        logo: <FaTelegram size={64} fill="#2AABEE" />,
        link: "https://t.me/LaCuevaArtica",
      },
      {
        classname: "card-youtube",
        handle: "Knut Eisbar",
        logo: <AiFillYoutube size={64} fill="#FF0000" />,
        link: "https://www.youtube.com/channel/UCllvL-BMuQkQV_ZFqh18H0Q",
      },
      {
        classname: "card-facebook",
        handle: "Knut Eisbar - Gaming",
        logo: <BsFacebook size={64} fill="#3b5998" />,
        link: "https://www.facebook.com/KnutEisbarGaming/",
      },
      {
        classname: "card-instagram",
        handle: "knuteisbargaming",
        logo: <AiFillInstagram size={64} fill="#FFFFFF" />,
        link: "https://www.instagram.com/knuteisbargaming/",
      },
      {
        classname: "card-lastfm",
        handle: "KnutEisbar",
        logo: <FaLastfm size={64} fill="#D51007" />,
        link: "https://www.last.fm/user/KnutEisbar",
      },
    ];

    return (
      <>
        <Header />
        <Content ref={this.vantaRef}>
          <Title className="title" strong>
            REDES SOCIALES
          </Title>
          <List
            className="redes-list"
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 2,
              lg: 3,
              xl: 3,
              xxl: 3,
            }}
            dataSource={data}
            renderItem={(item) => (
              <List.Item className="mt-1">
                <a href={item.link} target="_blank">
                  <Card className={item.classname}>
                    <Row align="middle">
                      <Col xs={8} sm={8} md={8} lg={5} xl={5}>
                        {item.logo}
                      </Col>
                      <Col xs={16} sm={16} md={16} lg={19} xl={19}>
                        <Text>{item.handle}</Text>
                      </Col>
                    </Row>
                  </Card>
                </a>
              </List.Item>
            )}
          />
        </Content>
        <Footer />
      </>
    );
  }
}

export default function () {
  return <Landing />;
}
