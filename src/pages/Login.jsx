import React, { useState } from 'react'
import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai"
import { Link } from "react-router-dom";
import {login} from "../api/login"

export default function Login() {
// Hook para enseñar el password

const[showPassword,setShowPassword] = useState(false);

const[recordar,setRecordar] = useState(false);


  const[formData, setFormData]= useState({
  email: "",
  password:"",

});
const {email, password} = formData;
function onChange(e){
  console.log(e.target.value)
  setFormData((prevState)=>({
    ...prevState,
    [e.target.id]:e.target.value,
  }))

}

function check(e){

  console.log(e.target.checked)
  setRecordar(!recordar)

}

async function hacerlogin(){
  const logeado=await login(email,password)
  console.log(logeado)
  
  window.location.reload();
  window.location.replace("/")
}

  return (
    
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold '>Login</h1>
      
      <div className='mt-10 flex justify-center flex-wrap   '>
  <form >
  
<div>
<input className='mt-2 w-64 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' type="email" id="email" value={email} onChange={onChange} placeholder="Email" />

</div>

<div className='mt-2 relative'>
<input className='w-64 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' type={showPassword ? "text" : "password" } id="password" value={password} onChange={onChange} placeholder="Password" />

{showPassword ? (<AiFillEyeInvisible className='absolute right-3 top-3 text-xl cursor-pointer' onClick={()=>setShowPassword((prevState)=>!prevState)}/>):(<AiFillEye className='absolute right-3 top-3 text-xl cursor-pointer' onClick={()=>setShowPassword((prevState)=>!prevState)}/>)}
</div>

<div className='mt-3 justify-center flex'>
  <p>No está registrado ? <Link to="/signin" className='text-blue-600 cursor-pointer underline'>Registrarse</Link> 

  </p>
</div>

<div className='mt-3 justify-center flex' > <label>
        <input className='mr-2 ml-2' type="checkbox" name="recordar" id="recordar" checked={recordar} onChange={check}  />
        Recordar Usuario
      </label></div>

  </form>
    
</div>


<div className='mt-3 wrap justify-center flex'>
  <button className='w-64 mt-4 bg-gray-300 uppercase rounded shadow-md hover:bg-gray-400  transition duration-150 ' type="submit" onClick={()=>hacerlogin()}>Login</button>
  </div>
  
    </section>
 
  
  )
}
