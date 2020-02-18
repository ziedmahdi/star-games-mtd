import React, { Component } from "react";

export class Timer extends Component {
    render() {       
        return <h1>Remaing Time: {this.props.timeLeft}</h1>
    }
}