import { createContext } from 'react';

const logueado1 = localStorage.getItem("logueado");

var logueado=false
if (logueado1==="true"){
    logueado=true
}

export const AuthContext = createContext(logueado);