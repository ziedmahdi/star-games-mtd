import React, { Component } from 'react';
import './App.css';
import { End } from './End';
import { Buttons } from './Buttons';
import { Stars } from './Stars';
import { Timer } from './Timer';
import { StartGame } from './StartGame';

class App extends Component {
  constructor(props) {
    super(props);
    const componentInstance = this;
    this.initializeGame = this.initializeGame.bind(componentInstance);
    this.state = {
      started: false
    };

    this.onButtonPress = this.onButtonPress.bind(this);
  }

  initializeGame() {
    this.setState({
      started: true,
      win: false,
      lost: false,
      timeLeft: 5,
      starsCount: 8,//generateANewNumber()
      buttonStates: ['unused', 'unused', 'unused', 'unused', 'unused', 'unused', 'unused', 'unused', 'unused']
    });

    this.clickedButtons = [];

    this.timer = setInterval(() => {
      const newTime = this.state.timeLeft - 1;

      let newState = {
        timeLeft: newTime
      };
      
      if (newTime === 0) {
        newState.lost = true;
        clearInterval(this.timer);
      }
      
      this.setState(newState);
      
    }, 1000);
  }

  onButtonPress(number) {
    const {buttonStates, starsCount} = this.state;

    if (buttonStates[number - 1] === 'used') {
      return;
    }

    if (buttonStates[number - 1] === 'unused') {
      this.clickedButtons.push(number);

    } else if (buttonStates[number - 1] === 'possible' || buttonStates[number - 1] === 'wrong') {
      const index = this.clickedButtons.indexOf(number);
      this.clickedButtons.splice(index, 1);
      buttonStates[number - 1] = 'unused'
    }

    //sum the numbers
    let sum = 0;
    this.clickedButtons.forEach(element => {
      sum += element;
    });

    //compare current sum with the stars count
    if (sum === starsCount) {
      this.clickedButtons.forEach((element) => {
        buttonStates[element - 1] = 'used';
      });

      this.clickedButtons = [];

      //TODO: generate another number for stars
      this.setState({
        starsCount: 9
      });
    } else if (sum < starsCount) {
      this.clickedButtons.forEach((element) => {
        buttonStates[element - 1] = 'possible';
      });
    } else {
      this.clickedButtons.forEach((element) => {
        buttonStates[element - 1] = 'wrong';
      });
    }

    this.setState({
      buttonStates
    });
  }
  
  render() {   
    return (
      <div className="App">
        {this.state.started
        ?
          this.state.lost
          ?
            <End fail={true} action={this.initializeGame}/>
          :
            this.state.win
            ?
              <End fail={false} action={this.initializeGame}/>
            :
              <>
                <Stars count={this.state.starsCount} />
                <hr />
                <Buttons handleButtonClick={this.onButtonPress} states={this.state.buttonStates} />
                <hr />
                <Timer timeLeft={this.state.timeLeft}/>
              </>
        : 
          <StartGame action={this.initializeGame} />}        
      </div>
    );
  }
}

export default App;

