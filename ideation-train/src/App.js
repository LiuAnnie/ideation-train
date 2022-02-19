import React from 'react';
import './App.css';
import { Layout, Button, Typography, Divider } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;
const { Header, Content, Footer } = Layout;

const App = () => (
  <div className="App">
    <Layout className="layout">
      <Header className="header">
        {/* figuring this out */}
        {/* <Typography>
          <Title level={5}>WELCOME TO THE</Title>
          <Title>ideation train</Title>
        </Typography> */}
      </Header>
      <Content className="content">
        <Title level={5}>WELCOME TO THE</Title>
        <Title>ideation train</Title>
        <Button type="primary">REVEAL DAILY PROMPT</Button>
      </Content>
      <Footer className="footer">
        <Button type="primary">LEARN HOW TO PLAY</Button>
      </Footer>
    </Layout>
  </div>
);

export default App;