import React, {Component} from "react";

export class Button extends Component {
    constructor(props) {
        super(props);

        const colors = {
            unused: 'gris',
            used: 'green',
            wrong: 'red',
            possible: 'blue'
        }

        this.style = {
            backgroundColor: colors[props.state]
        }
    }
    render() {
        return (
            <button style={this.style} onClick={this.props.action}>{this.props.number}</button>
        )
    }
}