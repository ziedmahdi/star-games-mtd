import React, { Component } from "react";
import {Button} from './Button';

export class Buttons extends Component {

    render() {
        return this.props.states.map((element, index) => {
            return (
                <Button action={this.props.handleButtonClick} key={index} state={element} number={index + 1}/>
            )
        })
    }
}