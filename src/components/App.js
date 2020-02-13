import React from 'react';
import './App.css';
import { End } from './End';
import { Button } from './Button';

function App() {
  return (
    <div className="App">
      <End fail={true} action={() => {}}/>
      <hr/>
      <Button state="unused" number="4"/>
      <Button state="used" number="5"/>
      <Button state="wrong" number="6"/>
      <Button state="possible" number="8"/>
    </div>
  );
}

export default App;
