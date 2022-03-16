import React from 'react';
import { useState } from "react";
import './App.css';
import LearnToPlay from "./LearnToPlay";
import IdeateThis from "./IdeateThis";
import IdeateMode from "./IdeateMode";
import { Layout, Button, Typography, Divider, Tooltip } from 'antd';
import { InboxOutlined, ArrowLeftOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text, Link } = Typography;
const { Header, Content, Footer } = Layout;

function App() {
  // "newPrompt" is a function to update "currPrompt"
  const [currPrompt, newPrompt] = useState("");
  // "newMode" is a function to update "currMode"
  const [currMode, newMode] = useState("none");
  // "setTitleMode" is a function to update "titleMode"
  const [titleMode, setTitleMode] = useState("");


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

  function changeTitleMode(newTitleMode) {
    setTitleMode(newTitleMode);
    console.log(titleMode);
  }

  if (titleMode == "inbox") {
    return <div className="App">
      <Layout className="layout">
        <div className='header'>
          <Title>ideation train</Title>
          <Button type="primary" icon={<ArrowLeftOutlined />} size={'large'} onClick={() => changeTitleMode("")} />
        </div>
        <Content className="content">
          <Title level={4}>
            Train Passenger #08 comments...
          </Title>
          <div className='feedback-comments'>
          I like this idea, because it's pretty subtle but seems effective! Some considerations to keep in mind: Since the earring gives 
          audible and haptic feedback, then the wearer's ear would experience some vibration. Would people be sensitive to this? How comfortable 
          would people feel with this sensation?
          </div>
          <br></br>
          <Title level={4}>
            Train Passenger #11 comments...
          </Title>
          <div className='feedback-comments'>
          Since you're thinking along the lines of jewelry, you could expand this to an entire collection of safety driven accessories! I personally 
          don't have pierced ears, but I love rings and necklaces. Have you considered how these accessories will be powered or charged? Is there a 
          mobile application that would pair with the accessory?
          </div>
        </Content>
        <LearnToPlay></LearnToPlay>
      </Layout>
    </div>


  } else {
    return <div className="App">
      <Layout className="layout">
        <div className='header'>
          <Title>ideation train</Title>
          <Button type="primary" icon={<InboxOutlined />} size={'large'} onClick={() => changeTitleMode("inbox")} />
        </div>
        <Content className="content">
          <IdeateThis updatePrompt={updatePrompt} />
        </Content>
        <LearnToPlay></LearnToPlay>
      </Layout>
    </div>
  }
}

export default App;