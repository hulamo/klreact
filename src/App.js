import {BrowserRouter as Router,Routes,Route} from "react-router-dom" 

import AdvertsPage from "./pages/AdvertsPage"

import logo from './logo.svg';
import './App.css';

import Login from "./pages/Login";
import Anuncio from "./pages/Anuncio";
import Signin from "./pages/Signin";
import Nuevoanucio from "./pages/Nuevoanucio";
import Principal from "./pages/Principal";
import Header from "./components/Header";
import React, { useState, useEffect,createContext } from 'react';
import Pagina404 from "./pages/Pagina404";
import Logout from "./pages/Logout";
export const LogContext = React.createContext();
function App() {
  
  const[logueado,setLogueado] = useState(false);
  
 

  useEffect(() => {
    // Update the document title using the browser API
    let templog=localStorage.getItem("logueado")
    if (templog==="true"){
      setLogueado(true)
    }
    else{
      setLogueado(false) 
    }


    //console.log(logueado)
  },[]);
let logueado2=""
  return (

    <Router>
      {logueado?(<Header logueado={logueado} />):(<Header logueado={logueado} />)}
      
      
      { logueado ? (

<Routes>
        
        
        
        
        <Route path="/" element={<AdvertsPage/>}/>
      
        
        
        
        
        <Route path="/anucnios" element={<AdvertsPage/>}/>
        <Route path="/anuncio:id" element={<Anuncio/>}/>

        <Route path="/nuevoanuncio" element={<Nuevoanucio/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="*" element={<Pagina404/>}/>
        
      </Routes>

      ):(

<Routes>
        
        
        
        
        <Route path="/" element={<AdvertsPage/>}/>
      
        
        
        <Route path="/login" element={<Login/>}/>
        
        <Route path="/anucnios" element={<AdvertsPage/>}/>
        <Route path="/anuncio:id" element={<Anuncio/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="*" element={<Pagina404/>}/>

      </Routes>

      ) }
      
      
      
    </Router>
   
  );
}

export default App;
