
import './App.css';
import USwithObj from './USwithObj';

function App() {
  // const std = ["Adil","prem","phasker","Zain"]; 
  // const number = [2,4,6,8,10]; 

  const  students = [
    {
       name:"Ahmed", 
       age:23, 
       Education:"16th"
    },
    {
      name:"Seyam", 
      age:26, 
      Education:"12th"
   },
   {
     name:"zain", 
     age:27, 
     Education:"14th"
 }
  ]

  

   
  return (
    <div className="App">
     
      {/* <h1>List Rendering in React</h1>
       <div>{std.map((item) => <h1>{item}</h1>)}</div>
       <div>{number.map((num) => <h1>{num = num*15}</h1>)}</div>
        */}
        
        <div>{students.map((singleitem,index) => <h1 key={index} > i am {singleitem.name}  {singleitem.age}   years of old </h1>)}</div>
    </div>
  );
}
   <USwithObj/>

export default App;
