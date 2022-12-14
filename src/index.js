import React ,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LogCheck from "../src/api/LogCheck"

const root = ReactDOM.createRoot(document.getElementById('root'));

  
 


    // Update the document title using the browser API
    let logueado=false
    let templog=localStorage.getItem("logueado")
    if (templog==="true"){
      logueado=true
    }
    else{
     logueado=false
    }


    //console.log(logueado)
  


root.render(
 
  <LogCheck.Provider value={logueado}>
  
    <App />
   
  </LogCheck.Provider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

