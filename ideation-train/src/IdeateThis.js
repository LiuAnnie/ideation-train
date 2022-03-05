import React from "react";
import { useState } from "react";
import "./IdeateThis.css";
import IdeateMode from "./IdeateMode";
import { Layout, Button, Typography, Divider } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;
const { Header, Content, Footer } = Layout;

function IdeateThis(props) {
    const [reveal, setReveal] = useState(false);
    const [prompt, setPrompt] = useState("");
    
    // test prompts
    const prompts = ["a wearable that promotes personal safety in urban spaces.",
                        "a tool or device that keeps drinks safe from spiking / drugging.",
                        "a wearable that allows the wearer to subtly alert emergency contacts for help."]

    // // show prompt
    // function show() {
    //     props.updatePrompt(givePrompt());
    //     setReveal(false);
    // }

    // return prompt
    function givePrompt() {
        return prompts[1];
    }

    function handleClick() {
        console.log('hello annie');
    }

    if (setReveal) {
        return <Content className="content">
            <Title level={2}>
                IDEATE...
            </Title>
            <Typography>
                {givePrompt()}
            </Typography>
            <IdeateMode></IdeateMode>
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
