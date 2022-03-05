import React from 'react';
import { useState } from "react";
import './App.css';
import LearnToPlay from "./LearnToPlay";
import IdeateThis from "./IdeateThis";
import IdeateMode from "./IdeateMode";
import { Layout, Button, Typography, Divider } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;
const { Header, Content, Footer } = Layout;

function App() {
    // "newPrompt" is a function to update "currPrompt"
    const [currPrompt, newPrompt] = useState("");
    // "newMode" is a function to update "currMode"
    const [currMode, newMode] = useState("none");

  function updatePrompt(prompt) {
    // if no prompt was provided, don't update prompt
    if (!prompt) return;
    newPrompt(prompt);
    // log daily prompt in console
    console.log(prompt);
  }

  function updateMode(mode) {
    // if no mode was provided, don't update mode
    if (!mode) return;
    newMode(mode);
    // log mode in console
    console.log(mode);
  }

  return (
      <div className="App">
    <Layout className="layout">
      <Content className="content">
        {/* <Title level={5}>DAILY IDEATION CHALLENGE</Title> */}
        <Title>ideation train</Title>
        <IdeateThis updatePrompt={updatePrompt} />
        {/* <IdeateMode></IdeateMode> */}
        {/* <Button type="primary">REVEAL DAILY PROMPT</Button> */}
      </Content>
      <LearnToPlay></LearnToPlay>
    </Layout>
  </div>
  );
}

export default App;