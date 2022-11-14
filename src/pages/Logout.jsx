import React from 'react'
import { Link } from 'react-router-dom';

function Logout() {


    
    localStorage.setItem("email", "");
        localStorage.setItem("token", "");
        localStorage.setItem("name", "");
         localStorage.setItem("id", "");
         localStorage.setItem("logueado", false);
         window.location.reload(false)    
     window.location.replace("/")   
         
    return (
    <div className='mt-2 w-full px-5'>Su cesión quedó cerrada <Link to="/login" className='text-blue-500 underline' >Login</Link>  </div>
  )
}

export default Logout