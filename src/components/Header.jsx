import React from 'react'
import {useLocation, useNavigate} from "react-router-dom"

import { useState, useEffect,onLoad } from 'react';
import { useAuth } from '../api/checarLog'
import LogCheck from "../api/LogCheck"
function Header(tlogueado) {

    
    //const logueado=tlogueado.logueado
    let logueado3=false
    let logueado2 = useAuth()
    if (logueado2==="true"){
        logueado3=true
    }else {
        logueado3=false
    }
    console.log("user: ",logueado3)


    //console.log("Logeado desde Header: ",logueado.logueado)
    
    const navigate =useNavigate()
    const location =useLocation()
    console.log(location.pathname)
function pathMathRoute(route){
    if(route===location.pathname)
    return true
}


    return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
<header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
    <div><p onClick={()=>navigate("/")} className='cursor-pointer h-5'>App de Anuncios</p></div>
<div>
<ul className='flex space-x-5'>
    <li onClick={()=>navigate("/")} className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-4 border-b-transparent ${pathMathRoute("/") && "text-black border-b-red-500"} `}>Principal</li>
   
    {logueado3 ? ( <li onClick={()=>navigate("/nuevoanuncio")} className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-4 border-b-transparent ${pathMathRoute("/nuevoanuncio") && "text-black border-b-red-500"} `}>Nuevo Anuncio</li>):(

<li onClick={()=>navigate("/login")} className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-4 border-b-transparent ${pathMathRoute("/nuevoanuncio") && "text-black border-b-red-500"} `}>Login</li>
    )}

    
    
    {logueado3 ? (<li onClick={()=>navigate("/logout")} className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-4 border-b-transparent ${pathMathRoute("/logout") && "text-black border-b-red-500"} `}>Logout</li>):(
        <li onClick={()=>navigate("/signin")} className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-4 border-b-transparent ${pathMathRoute("/signin") && "text-black border-b-red-500"} `}>Sign-in</li>
    )}
    
</ul>
</div>
</header>

    </div>
  )
}

export default Header