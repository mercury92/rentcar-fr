import React, { useState } from "react";

import Bookdate from "../../container/Bookdate";
import { Row, Col, Menu } from "antd";
import { Avatar } from "antd";
import { UserOutlined, SettingOutlined } from "@ant-design/icons";

import { AppstoreOutlined } from "@ant-design/icons";

function Hero() {
  let [date, setDate] = useState({});
  const { SubMenu } = Menu;

  return (
    <div>
      <Menu
        mode="horizontal"
        style={{
          display: "flex",
          position: "fixed",
          zIndex: "1",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <Menu.Item key="home" icon={<AppstoreOutlined />}>
          <a
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Home
          </a>
        </Menu.Item>
        <Menu.Item key="date">
          <a
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Date
          </a>
        </Menu.Item>
        <Menu.Item key="car">
          <a
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Car
          </a>
        </Menu.Item>

        <SubMenu title="about">
          <Menu.Item key="setting:1">company</Menu.Item>
          <Menu.Item key="setting:2">reward</Menu.Item>
        </SubMenu>
        <Menu.Item key="account" icon={<UserOutlined />}>
          <a href="login" target="_blank" rel="noopener noreferrer"></a>
        </Menu.Item>
      </Menu>

      <Row
        style={{
          position: "relative",
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          height: "100vh",
          width: "auto",
          backgroundColor:"black"
        }}
      >
        <Col
          span={24}
          style={{
            display: "grid",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            alt="car"
            src={require("../../images/hero/hero-01.jpg")}
            style={{
              width: "100%",
              height: "100vh",
            }}
          ></img>

        </Col>
      </Row>
      
      <Row   style={{ margin: "10%"}}>
      <Bookdate date={date} setDate={setDate} />
      </Row>
    
    </div>
  );
}

export default Hero;
