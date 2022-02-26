import React from 'react';
import "./LearnToPlay.css";
import { Layout, Button, Typography, Divider } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

function LearnToPlay(props) {
    return <div className="footer">
        <Title level={5}>HOW TO PLAY</Title>
        <Typography>
            Answer the given prompt with an idea expressed through a sketch or text. 
            Submit your idea and give feedback or ideate on top of someone else's idea! 
            See feedback that others gave you in your inbox at the end of the day.
        </Typography>
    </div>

    // Was going to have a button to reveal instructions, but since the instructions for how to play
    // is so short, I may just leave it as the footer.

    // const [learn, setLearn] = useState(false);

    // // show instructions for how to play and reset learn
    // function set() {
    //     setLearn(false);
    // }

    // // If the user wants to learn how to play the game, 
    // // show them the instructions for how to play.
    // if (setLearn) {
    //     return <div className="footer">
    //         <Typography>
    //             The Ideation Train is a daily ideation challenge. Answer the given prompt
    //             with an idea expressed through a sketch or text. Submit your idea and give
    //             feedback or ideate on top of someone else's idea! See feedback that others
    //             gave you in your inbox at the end of the day.
    //         </Typography>
    //         {/* <Button type="primary" onClick={set}>
    //             SHOW LESS
    //         </Button> */}
    //     </div>
    // } else { // If the user did not click the "Learn How to Play" button, keep showing the button.
    //     return <div className="footer">
    //         <Button type="primary" onClick={() => setLearn(true)}>
    //             LEARN HOW TO PLAY
    //         </Button>
    //     </div>
    // }
}

export default LearnToPlay;