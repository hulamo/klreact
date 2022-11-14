
import React, { useContext, useState, useEffect } from 'react'



const AuthContext = React.createContext(localStorage.getItem("logueado"))

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }){

    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

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

    
   
    return (
        <AuthContext.Provider logueado={logueado}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
