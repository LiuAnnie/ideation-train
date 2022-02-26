import React from 'react';
import { useState } from "react";
import './App.css';
import LearnToPlay from "./LearnToPlay";
import { Layout, Button, Typography, Divider } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;
const { Header, Content, Footer } = Layout;

function App() {

  return (
      <div className="App">
    <Layout className="layout">
      <Content className="content">
        {/* <Title level={5}>DAILY IDEATION CHALLENGE</Title> */}
        <Title>ideation train</Title>
        <Button type="primary">REVEAL DAILY PROMPT</Button>
      </Content>
      <LearnToPlay></LearnToPlay>
    </Layout>
  </div>
  );
}

export default App;