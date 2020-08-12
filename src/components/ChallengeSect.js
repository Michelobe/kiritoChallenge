import React, {Component} from 'react';

export default class ChallengeSect extends Component{
    constructor(){
        super();
        this.state = {}
    }

    componentWillMount(){
        this.setState({
            boxes: [
                {
                    name: "Kirito",
                    text: "You clicked Kirito's Box, Duh",
                    image: "https://ca.slack-edge.com/TMFDZLMPS-UM92Y81LZ-gfbf6789ef07-512"
                },
                {
                    name: "Michel Sean",
                    text: "You clicked Michael Sean's Box, Omg",
                    image: "https://ca.slack-edge.com/TMFDZLMPS-UMF6K2CVA-1be2cbd10ea0-512"
                },
                {
                    name: "Nicksonder",
                    text: "You clicked Nicksonder's Box, lol",
                    image: "https://ca.slack-edge.com/TMFDZLMPS-UMFEUCS72-8878e96c5b03-512"
                },
                {
                    name: "Damien",
                    text: "You clicked Damien's Box, wtf",
                    image: "https://ca.slack-edge.com/TMFDZLMPS-UM4JXLC4T-86724ab5b212-512"
                },
                {
                    name: "Jamie",
                    text: "You clicked Jamie's Box, Where he at tho?...",
                    image: "https://www.kindpng.com/picc/m/147-1478550_super-mario-ghost-8-bit-super-mario-bros.png"
                },
                {
                    name: "DeadPool",
                    text: "You clicked DeadPool's Box, You better have some taco's",
                    image: "https://imgix.bustle.com/uploads/image/2020/5/7/e189ed6c-fd49-4654-a9a9-e5bd72b75d7e-deadpool-mcu1.jpg?w=350&h=298&auto=format%2Ccompress&cs=srgb&q=70&fit=crop&crop=focalpoint&fp-x=0.4846743295019157&fp-y=0.45689655172413796"
                }
            ]
        });
    }

    loopBoxes = () => {
        return this.state.boxes.map((item, i) => {
            return(
                <div className = "box" 
                     key = {i} 
                     onClick = {this.clickBox.bind(null, item.text)}
                     style = {{
                         background: `url('${item.image}')center center no-repeat`,
                         backgroundSize: 'contain'
                     }}>
                    <h1>{item.name}</h1>
                </div>
            );
        });
    }

    clickBox = (text) => {
        console.log(text);
    }

    render(){
        return(
            <div className = "challengeSect">
                {this.loopBoxes()}
            </div>
        );
    }
}