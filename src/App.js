import { useState } from 'react';
import './App.css';

function App() {

  const [braincellCount, setBraincellCount] = useState(0);
  const cellCount = () => {
    setBraincellCount(braincellCount + 1);
  }
  
  return (
    <div className="App">
       <h1>brain cell count : {braincellCount}</h1>
        <button onClick={(cellCount)}>increase braincell</button>
    </div>
  );
}

export default App;
