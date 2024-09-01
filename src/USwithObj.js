import App from './App.css'
import {useState} from 'react'

const USwithObj = () => {
    
 const obj = {
     Firstname:"ahmad", 
     Lastname:"shah",
     age:23, 
     Qualification:"bs degree",
     isYoung:true
 }
  const[person,setPerson]= useState(obj)

  const changeobj = () => {
    setPerson({
       Firstname:"zain",
       Lastname:"khan",
       age:53,
       isYoung:false

    })
   
     
  }
  return (
    <div className='App'>
        <h1>USwithObj</h1>
         <h2>{person.Firstname}</h2>
         <h2>{person.Lastname}</h2>
         <h2>{person.age}</h2>
         <h2>{person.isYoung.toString()}</h2>
         <button onClick={changeobj}>changeobj</button>
         
        </div>
  )
}

export default USwithObj