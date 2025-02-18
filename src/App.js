import {useState} from 'react';
import Cats from './components/Cat';
import './index.css'; 

function App() { 

const showCats = true;
const [attitude, setAttitude] = useState('bad');

const [braincellCount, setBraincellCount] = useState(0);
const cellCount = () => {
  setBraincellCount(braincellCount + 1);
}

return (
  // parent div
<div className="App h-24 max-w-[1240] mx-auto p-4">
<h2 className='w-full text-3xl font-bold text-pink-600 mb-1'> My Cats</h2>
  <div className='cats'>
    { showCats ? (
      <>
      <input  className='mt-4 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 px-2' type='text' placeholder='ouieeaaiouiai' onChange={(e) => {console.log(e.target.value); setAttitude(e.target.value)}}/>
      <p className='text-pink-300 mt-4'>LIST OF MY CATS</p>
      <div className="flex flex-wrap justify-center bg-#1d1c1b p-4"> 
    < Cats 
      name = "Lucky" 
      color = "Black" 
      img = "\imgs\lucky.jpg"
      age = {5}
      role = {attitude}
      />
    < Cats
      name = "Curry" 
      color = "Yellow" 
      img= "/imgs/curry.jpg"
      age = {4}
      role = {attitude}
      />
    < Cats
      name = "Cheese" 
      color = "Yellow" 
      img = "/imgs/cheese.jpg"
      age = {4.5}
      role = {attitude}
      />
    < Cats
      name = "Cheese" 
      color = "Yellow" 
      img = "/imgs/cheese.jpg"
      age = {4.5}
      role = {attitude}
      />
   
      </div>
      </>
       
    )
      : 
      (<h3> No Cats</h3>)
    }
  </div> 




<hr/>
<div className= 'flex justify-center items-center gap-5 p-4'>
<h4 className='text-white'>Brain cell count : {(braincellCount)} </h4>
<button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-pink-300 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={(cellCount)}>increase braincell</button>

  </div>
</div>
  );
}

export default App;
