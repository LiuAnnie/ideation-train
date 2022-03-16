import React from "react";
import { ReactDOM } from "react-dom";
import CanvasDraw from "react-canvas-draw";
import { useRef, useState } from "react";
import "./IdeateMode.css";

// import { AiOutlineEdit } from 'react-icons/ai';IDe
// import { GrTextAlignFull } from 'react-icons/gr';
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

    // // if user hits 'enter' key, submit text
    // function onKeyPress(e) {
    //     if (e.key === "Enter") {
    //         // set();
    //     }
    // }

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    if (mode == "drawing") {
        return <div className="content">
            <CanvasDraw
                //  ref={(canvasDraw) => (this.modify = canvasDraw)}
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
            {/* <br></br> */}
            {/* <Button type="primary">Submit</Button> */}
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
            <div className="button-row">
                <Button type="primary" onClick={() => changeMode("feedback")}>Give Feedback</Button>
                <Button type="primary" ghost onClick={() => changeMode("")}> Submit Another Idea</Button>
            </div>
        </div>
    } else if (mode == "feedback") {
        return <div className="other-user">
            <Image src="test_sketch.png"></Image>
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