import React, {Component} from 'react';

export default class Footer extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render(){
        return(
            <div className = {'footer'}>
                <h1>Checkout the gitHub Code! <a href = {'#'}>hahahahaha</a></h1>
            </div>
        );
    };
}