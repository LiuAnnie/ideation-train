import React from 'react';
import { useState } from "react";
import './App.css';
import LearnToPlay from "./LearnToPlay";
import IdeateThis from "./IdeateThis";
import IdeateMode from "./IdeateMode";
import { Layout, Button, Typography, Divider, Tooltip } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

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
        <div className='header'>
          <Title>ideation train</Title>
          <Button type="primary" icon={<InboxOutlined />} size={'large'} />
        </div>
        <Content className="content">
          <IdeateThis updatePrompt={updatePrompt} />
        </Content>
        <LearnToPlay></LearnToPlay>
      </Layout>
    </div>
  );
}

export default App;