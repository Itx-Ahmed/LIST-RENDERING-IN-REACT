import React, { useState } from 'react'

const UswithArray = () => {
const num = [11,22,23,24,25];
const [number,setNumber] = useState(num); 
const changeArray = () => {
     setNumber(previousState => {
         return [
             ...previousState,
             Math.floor(Math.random() *50)
         ]
     })
     
}
  return (
    <>
     <h1>Use State with Array</h1>
      <ul>
      <div>{number.map((item,index)=> <li key={index}>{item}</li>)}</div>
      </ul>
       <button onClick={changeArray}>Change Array</button>
      
    </>

  )
}

export default UswithArray