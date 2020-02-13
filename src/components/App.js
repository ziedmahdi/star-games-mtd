import React from 'react';
import './App.css';
import { End } from './End';

function App() {
  return (
    <div className="App">
      <End fail={true} action={() => {}}/>
    </div>
  );
}

export default App;
