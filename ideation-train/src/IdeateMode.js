// IdeateMode.js handles mode selection, drawing canvas, and text response.

import React from "react";
import { ReactDOM } from "react-dom";
import CanvasDraw from "react-canvas-draw";
import { useRef, useState } from "react";
import "./IdeateMode.css";
import testImage from './test_sketch.png';

import { Layout, Button, Typography, Divider, Input, Checkbox, Image } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;
const { Header, Content, Footer } = Layout;
const { TextArea } = Input;

function IdeateMode(props) {
    const [mode, setMode] = useState(""); // identify mode here
    const [drawing, setDrawing] = useState(""); // store image url here
    const [text, setText] = useState(""); // store text response here

    // const [brush, setThickness] = useState(10); // store brush thickness
    const drawCanvas = useRef({});
    const clear = () => drawCanvas.current.clear();
    const undo = () => drawCanvas.current.undo();

    function changeMode(newMode) {
        setMode(newMode);
        console.log(mode);
    }

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    if (mode == "drawing") {
        return <div className="content">
            <CanvasDraw
                ref={drawCanvas}
                brushRadius={3}
                canvasHeight={500}
                canvasWidth={1000}
                //  hideGrid={true}
                style={{ boxShadow: "0 13px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3)" }}
            />
            <br></br>
            <div className="canvas-buttons">
                <Button onClick={undo}>Undo</Button>
                <Button onClick={clear}>Clear</Button>
            </div>
            <br></br>
            <div className="input-submit">
                <div className="input">
                    <TextArea
                        rows={3}
                        placeholder="(Optional) Short description of idea... 350 CHARACTER LIMIT "
                        maxLength={350}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <Checkbox onChange={onChange}>Speculative</Checkbox>
                </div>
                <Button type="primary" onClick={() => changeMode("submitted")}> Submit</Button>
            </div>
        </div >


    } else if (mode == "text") {
        return <div className="content">
            <TextArea
                rows={5}
                placeholder="Description of idea... 700 CHARACTER LIMIT "
                maxLength={700}
                onChange={(e) => setText(e.target.value)}
            />
            <br></br>
            < div className="text-buttons">
                <Checkbox onChange={onChange}>Speculative</Checkbox>
                <Button type="primary" onClick={() => changeMode("submitted")}> Submit</Button>
            </div>
        </div >


    } else if (mode == "submitted") {
        return <div className="content">
            <br></br>
            <Title level={3} italic>Idea Submission Received</Title>
            <br></br>
            <div className="button-row">
                <Button type="primary" onClick={() => changeMode("feedback")}>Give Feedback</Button>
                <Button type="primary" ghost onClick={() => changeMode("")}> Submit Another Idea</Button>
            </div>
        </div>


    } else if (mode == "feedback") {
        return <div className="feedback-organizer">
            <div className="other-user">
                <br></br>
                <Image src={testImage}></Image>
                <br></br>
                <Paragraph>
                    <Title level={5}>
                        Train Passenger #12 comments...
                    </Title>
                    <br></br>
                    My wearable idea is a scarf that alerts the user of any suspicious movement around them when they are traveling
                    alone (e.g. when someone is walking home at night and is being followed). The scarf can subtly alert the user
                    with audible feedback, or the scarf can illuminate to alert the user and a possible attacker that they've been detected.
                </Paragraph>
            </div>
            <div>
                <Title level={4}>
                    How do you want to respond to this user's idea?
                </Title>
                <br></br>
                <div className="mode-selection">
                    <Button type="primary" onClick={() => changeMode("feedback-drawing")}>
                        Drawing
                    </Button>
                    <Button type="primary" onClick={() => changeMode("feedback-text")}>
                        Text
                    </Button>
                </div>
            </div>
        </div>


    } else if (mode == "feedback-drawing") { // make code more efficient by splitting into two components
        return <div className="feedback-organizer">
            <div className="other-user">
                <Title level={3}>
                    Give feedback or ideate upon this user's idea!
                </Title>
                <br></br>
                <Image src={testImage}></Image>
                <br></br>
                <Paragraph>
                    <Title level={5}>
                        Train Passenger #12 comments...
                    </Title>
                    <br></br>
                    My wearable idea is a scarf that alerts the user of any suspicious movement around them when they are traveling
                    alone (e.g. when someone is walking home at night and is being followed). The scarf can subtly alert the user
                    with audible feedback, or the scarf can illuminate to alert the user and a possible attacker that they've been detected.
                </Paragraph>
            </div>
            <div className="content">
                <br></br>
                <CanvasDraw
                    ref={drawCanvas}
                    brushRadius={3}
                    canvasHeight={400}
                    canvasWidth={800}
                    //  hideGrid={true}
                    style={{ boxShadow: "0 13px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3)" }}
                />
                <br></br>
                <div className="canvas-buttons">
                    <Button onClick={undo}>Undo</Button>
                    <Button onClick={clear}>Clear</Button>
                </div>
                <br></br>
                <div className="input-submit">
                    <div className="input">
                        <TextArea
                            rows={3}
                            placeholder="(Optional) Short description of idea... 350 CHARACTER LIMIT "
                            maxLength={350}
                            onChange={(e) => setText(e.target.value)}
                        />
                        <Checkbox onChange={onChange}>Speculative</Checkbox>
                    </div>
                    <Button type="primary" onClick={() => changeMode("submitted")}> Submit</Button>
                </div>
            </div >
        </div>


    } else if (mode == "feedback-text") {
        return <div className="feedback-organizer">
            <div className="other-user">
                <Title level={3}>
                    Give feedback or ideate upon this user's idea!
                </Title>
                <br></br>
                <Image src={testImage}></Image>
                <br></br>
                <Paragraph>
                    <Title level={5}>
                        Train Passenger #12 comments...
                    </Title>
                    <br></br>
                    My wearable idea is a scarf that alerts the user of any suspicious movement around them when they are traveling
                    alone (e.g. when someone is walking home at night and is being followed). The scarf can subtly alert the user
                    with audible feedback, or the scarf can illuminate to alert the user and a possible attacker that they've been detected.
                </Paragraph>
            </div>
            <div className="content">
                <TextArea
                    rows={5}
                    placeholder="Give feedback on the user's idea and/or ideate upon it... 700 CHARACTER LIMIT "
                    maxLength={700}
                    onChange={(e) => setText(e.target.value)}
                />
                <br></br>
                < div className="text-buttons">
                    <Checkbox onChange={onChange}>Speculative</Checkbox>
                    <Button type="primary" onClick={() => changeMode("feedback-submitted")}> Submit</Button>
                </div>
            </div >
        </div>


    } else if (mode == "feedback-submitted") {
        return <div className="content">
            <br></br>
            <Title level={3} italic>Feedback Received</Title>
            <br></br>
            <div className="button-row">
                <Button type="primary" onClick={() => changeMode("feedback")}>Give Feedback</Button>
                <Button type="primary" ghost onClick={() => changeMode("")}> Submit Another Idea</Button>
            </div>
        </div>

    } else { // mode hasn't been chosen yet
        return <div>
            <Title level={4}>
                How do you want to respond?
            </Title>
            <br></br>
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