import React, { Component } from "react";
import { createArrayWithNElements } from "../tools";
import { Star } from "./Star";

export class Stars extends Component {
    render() {
        return createArrayWithNElements(this.props.count).map((element, index) => {
            return <Star key={index}/>
        })
    }
}