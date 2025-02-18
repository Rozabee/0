import {useState} from 'react';
import Brain from './components/brain';
import './App.css';

function App() { 
  const showBrain = true;
  
  const [braincellCount, setBraincellCount] = useState(0);
  const cellCount = () => {
    setBraincellCount(braincellCount + 1);
  }
  
  return (
    // parent div
    <div className="App">

      { showBrain ? <Brain/> : <p>no brain</p> }
      
       <h1>brain cell count : {braincellCount}</h1>
        <button onClick={(cellCount)}>increase braincell</button>
    </div>
  );
}

export default App;
