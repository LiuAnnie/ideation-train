import React from "react";
import { useState } from "react";
import "./IdeateThis.css";
import { Layout, Button, Typography, Divider } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;
const { Header, Content, Footer } = Layout;

function IdeateThis(props) {
    const [reveal, setReveal] = useState(false);
    // const [prompt, setPrompt] = useState("");

    // // show prompt
    // function show() {
    //     props.updatePrompt(prompt);
    //     setReveal(false);
    // }

    if (setReveal) {
        return <Content className="content">
            <Title level={2}>
                IDEATE...
            </Title>
            <Typography>
                a wearable that promotes personal safety in urban spaces.
            </Typography>
            <Title level={5}>
                How do you want to respond?
            </Title>
            <div className="mode-selection">
                <Button type="primary">
                    Drawing
                </Button>
                <Button type="primary">
                    Text
                </Button>
            </div>
        </Content>
    } else {
        return <Content className="content">
            <Button type="primary" onClick={() => setReveal(true)}>
                REVEAL DAILY PROMPT
            </Button>
        </Content>
    }
}


export default IdeateThis;
