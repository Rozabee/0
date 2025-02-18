import {useState} from 'react';
import Cats from './components/Cat';
import './App.css';

function App() { 

const showCats = true;
const [attitude, setAttitude] = useState('bad');

const [braincellCount, setBraincellCount] = useState(0);
const cellCount = () => {
  setBraincellCount(braincellCount + 1);
}

return (
  // parent div
<div className="App">
<h1> My Cats</h1>
<p>Name</p>
  <div className='cats'>
    { showCats ? (
      <>
      <input type='text' onChange={(e) => {console.log(e.target.value); setAttitude(e.target.value)}}/>
    < Cats
      name = "Lucky" 
      color = "Black" 
      age = {5}
      role = {attitude}
      />
    < Cats
      name = "Curry" 
      color = "Yellow and Black" 
      age = {4}
      role = {attitude}
      />
    < Cats
      name = "Cheese" 
      color = "Yellow" 
      age = {4.5}
      role = {attitude}
      />
      </>
    )
      : 
      (<h3> No Cats</h3>)
    }
  </div> 




<hr/>
<h4>Brain cell count: {(braincellCount)} </h4>
<button onClick={(cellCount)}>increase braincell</button>

</div>
  );
}

export default App;
