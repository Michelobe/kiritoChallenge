import React, { Component } from 'react';

export default class Header extends Component{
	constructor() {
		super();
		this.state = {};
    }

    render(){
        return(
            <div className = "header">
                <h1>Kirito Fire Team Challenge!</h1>
            </div>
        );
    }
}