import React from "react";
import { ReactDOM } from "react-dom";
import CanvasDraw from "react-canvas-draw";
import { useState } from "react";
import "./IdeateMode.css";
import { Layout, Button, Typography, Divider } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;
const { Header, Content, Footer } = Layout;

function IdeateMode(props) {
    const [mode, setMode] = useState(""); // identify mode here
    const [drawing, setDrawing] = useState(""); // store image url here
    const [text, setText] = useState(""); // store text response here

    function changeMode(newMode) {
        setMode(newMode);
        console.log(mode);
    }

    // if user hits 'enter' key, submit name
    function onKeyPress(e) {
        if (e.key === "Enter") {
            // set();
        }
    }

    if (mode == "drawing") {
        return <CanvasDraw style={{ boxShadow: "0 13px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3)" }} />
    } else if (mode == "text") {
        return <textarea
            className="text-area"
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
    } else { // mode hasn't been chosen yet
        return <Content className="content">
            <Title level={5}>
                How do you want to respond?
            </Title>
            <div className="mode-selection">
                <Button type="primary" onClick={() => changeMode("drawing")}>
                    Drawing
                </Button>
                <Button type="primary" onClick={() => changeMode("text")}>
                    Text
                </Button>
            </div>
        </Content>
    }
}

export default IdeateMode;