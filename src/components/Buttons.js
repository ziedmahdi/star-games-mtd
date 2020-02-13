import React, { Component } from "react";
import {Button} from './Button';

export class Buttons extends Component {

    render() {
        return this.props.states.map((element, index) => {
            return (
                <Button key={index} state={element} number={index + 1}/>
            )
        })
    }
}