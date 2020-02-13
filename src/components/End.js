import React, { Component } from "react";

/**
 * @param {Boolean} fail: did the user win
 * @param {Function} action: the action to execute when the user hits the button
 */
export class End extends Component {
    render() {
        return (
            <>
                {this.props.fail ? 
                <h1>You Have Failed!</h1>:
                <h1>Well Played!</h1>
                }
                <button onClick={this.props.action}>{this.props.fail ? "Try Again" : "Replay"}</button>
                
            </>
        )
    }
}