import {useState} from 'react'

const FunctionalCompo = () => {
const [counter,setCounter] = useState(0)
 const increase = () => {
     setCounter(counter + 1);
 }
 const Decrease = () => {
     setCounter(counter -1 )
 }
  return (
    <>
     <div>{counter}</div>
    <button onClick={increase}>Count the Number</button>
    <button onClick={Decrease}>Count the Number</button>
    </>
  )
}

export default FunctionalCompo