import {useEffect, useState} from 'react'

const Api =   () => {
const [Datafetch,setDatafetch] = useState([]);
 const Fetchdata = async () => {
    const Data =  await fetch("https://dummyjson.com/products"); 
    const Response = await  Data.json(); 
    console.log(Response.products);
    setDatafetch(Response.products);
 }
  useEffect(() => {
    Fetchdata();
  },[])
 
  return (
    <>
     <h1>--API Concept is Here--</h1>
      <div>
        <h1>{Datafetch.map((item) => {
             return (
                 <>
                  <div>{item.id}</div>
                  <div>{item.brand}</div>
                  <div>{item.title}</div>
                  <div>{item.tags}</div>
                 </>
             )
        })}</h1>
      </div>
    

      
    </>

  )
}

export default Api