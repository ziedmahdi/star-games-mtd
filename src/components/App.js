import React, { useState, Component } from 'react';
import './App.css';
import { End } from './End';
import { Buttons } from './Buttons';
import { Stars } from './Stars';
import { Timer } from './Timer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: 10,
      lost: false,
      win: false
    };

    this.timer = setInterval(() => {
      const newTime = this.state.timeLeft - 1;
      this.setState({
        timeLeft: newTime,
        lost: newTime === 0
      });

      if (newTime === 0) {
        clearInterval(this.timer);
      }
    }, 1000);
    this.buttonStates = ['used', 'wrong', 'possible', 'unused','unused', 'unused', 'unused', 'unused', 'unused']
  }
  
  render() {   
    return (
      <div className="App">
        {this.state.win ? 
          <End fail={false} action={() => {}}/> :
          this.state.lost ?
          <End fail={true} action={() => {}}/> :
          ''
        }
        <hr/>
        <Buttons states={this.buttonStates} />
        <hr/>
        <Stars count="6" />
        <hr />
        <Timer timeLeft={this.state.timeLeft}/>
        
      </div>
    );
  }
}

export default App;

