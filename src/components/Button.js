import React, {Component} from "react";

export class Button extends Component {
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.action(this.props.number);
    }

    render() {
        const colors = {
            unused: 'gray',
            used: 'green',
            wrong: 'red',
            possible: 'blue'
        }

        const style = {
            backgroundColor: colors[this.props.state]
        }
        
        return (
            <button style={style} onClick={this.handleClick}>{this.props.number}</button>
        )
    }
}