import {useState} from 'react';
import Cats from './components/Cat';
import './index.css'; 

function App() { 

const showCats = true; 
const [pet] = useState(
  [{
    name: 'Lucky',
    color: 'Black',
    img: '/imgs/lucky.jpg',
    age: 5, 
  },
  {
    name: 'Curry',
    color: 'Yellow',
    img: '/imgs/curry.jpg',
    age: 3, 
  },
  {
    name: 'Cheese',
    color: 'Orange',
    img: '/imgs/cheese.jpg',
    age: 4, 
  },
  {
    name: 'Heart',
    color: 'Orange',
    img: '/imgs/cheese.jpg',
    age: 3.5, 
  } ]
);
const [braincellCount, setBraincellCount] = useState(0);
const cellCount = () => {
  setBraincellCount(braincellCount + 1);
}

return (
  // parent div
<div className="App mx-auto p-4 app-background">
<h2 className='w-full text-3xl font-bold text-pink-600 mb-1'> My Cats</h2>
  <div className='cats app-background'>
    { showCats ? (
      <>
      {/* <input  className='mt-4 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 px-2' type='text' placeholder='ouieeaaiouiai' onChange={(e) => {console.log(e.target.value); setAttitude(e.target.value)}}/> */}
      <p className='text-purple-500 font-bold mt-4'>LIST OF MY CATS</p>

      <div className="flex flex-wrap justify-center p-4 "> 
        {pet.map((cat)=>{
          console.log(cat);
          return (<Cats  name = {cat.name} color = {cat.color} img = {cat.img} age = {cat.age} />
);
})}
      </div>
      </>
       
    ):  (
    <h3> No Cats</h3>
  )
  
}
  </div> 




<hr/>
<div className= 'flex justify-center items-center gap-5 p-4'>
<h4 className=' text-purple-600 font-semibold'>Brain cell count : {(braincellCount)} </h4>
<button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-pink-300 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={(cellCount)}>increase braincell</button>

  </div>
</div>

  );
}

export default App;
