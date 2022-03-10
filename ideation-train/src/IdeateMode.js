import React from "react";
import { ReactDOM } from "react-dom";
import CanvasDraw from "react-canvas-draw";
import { useState } from "react";
import "./IdeateMode.css";
// import { AiOutlineEdit } from 'react-icons/ai';IDe
// import { GrTextAlignFull } from 'react-icons/gr';
import { Layout, Button, Typography, Divider, Input } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;
const { Header, Content, Footer } = Layout;
const { TextArea } = Input;

function IdeateMode(props) {
    const [mode, setMode] = useState(""); // identify mode here
    const [drawing, setDrawing] = useState(""); // store image url here
    const [text, setText] = useState(""); // store text response here

    const [brush, setThickness] = useState(10); // store brush thickness

    function changeMode(newMode) {
        setMode(newMode);
        console.log(mode);
    }

    // // if user hits 'enter' key, submit text
    // function onKeyPress(e) {
    //     if (e.key === "Enter") {
    //         // set();
    //     }
    // }

    if (mode == "drawing") {
        return <div className="content">
            <CanvasDraw
                //  ref={(canvasDraw) => (this.modify = canvasDraw)}
                brushRadius={brush}
                //  canvasHeight="50vh"
                //  canvasWidth="50vw"
                //  hideGrid={true}
                style={{ boxShadow: "0 13px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3)" }}
            />
            <br></br>
            <div className="input">
                <TextArea rows={2} placeholder="(Optional) Short description of idea... 350 CHARACTER LIMIT " maxLength={350} />
            </div>
            <br></br>
            <Button type="primary">Submit</Button>
        </div>
    } else if (mode == "text") {
        return <div className="content">
            <textarea
                className="text-area"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Button type="primary">Submit</Button>
        </div>

    } else { // mode hasn't been chosen yet
        return <div>
            <Title level={4}>
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
        </div>
    }
}

export default IdeateMode;