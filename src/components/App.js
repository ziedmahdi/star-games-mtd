import React from 'react';
import './App.css';
import { End } from './End';
import { Buttons } from './Buttons';

function App() {
  let buttonStates = ['used', 'wrong', 'possible', 'unused','unused', 'unused', 'unused', 'unused', 'unused']
  return (
    <div className="App">
      <End fail={true} action={() => {}}/>
      <hr/>
      <Buttons states={buttonStates} />
      
    </div>
  );
}

export default App;

let t = [1, 2, 3]

// let sum = 0;

// // for (let i = 0; i < t.length; i++) {
// //   sum += t[i]
// // }
// let r = [];
// t.forEach(function (element, index) {
//   r.shift(element * 3)
// })

// r // [3, 6, 9]

// r = t.map(function (element, index) {
//   return element * 3;
// })
