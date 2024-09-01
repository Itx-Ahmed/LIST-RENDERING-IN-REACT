import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Style from './Style';
import Api from './Api';
import UsComponent from './UsComponent';
import USwithObj from './USwithObj';
import UswithArray from './UswithArray';
import FunctionalCompo from './FunctionalCompo';

 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <Style/>
    <App /> */}
     {/* <Api/> */}
     {/* <UsComponent/> */}
     <App/>
     {/* <USwithObj/> */}
     {/* <UswithArray/> */}
     <FunctionalCompo/>
  

    
     
      
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
