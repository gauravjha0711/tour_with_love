import React, { useState } from 'react';
import Data from "./Data.js" 
import Tours from './Components/Tours';

const App=()=> {
  const [tours, setTours] = useState(Data);
  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }
  if(tours.length===0){
    return (
      <div className='refresh'>
        <h2>No Tours Left</h2>
        <button className='btn-white' onClick={()=>{setTours(Data)}}>Refresh</button>
      </div>
    );
  }
  return (
    <div className="App">
      <Tours tours={tours}  removeTour={removeTour }></Tours>
      {/* <h1>Hello How are you</h1> */}
    </div>
  );
}

export default App;