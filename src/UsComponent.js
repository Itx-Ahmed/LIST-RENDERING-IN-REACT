import App from './App.css';
import React, { useState } from 'react'


const UsComponent = () => {
const [number,setNumber] = useState(0);
 
 const changenumber = () => {
    setNumber(1)
     
 }
  return (
   <>
       <div className='App'>
       <h1>{number}</h1>
        <button onClick={changenumber}>update Number</button>
       </div>
      
   </>
  )
}

export default UsComponent