import React, { useState } from 'react'
import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai"
import { Link } from "react-router-dom";
import {registro} from "../api/registrarse"
export default function Signin() {
// Hook para enseñar el password

const[showPassword,setShowPassword] = useState(false);

// Mensaje para login OK

const[showMensaje,setMensaje] = useState("");


  const[formData, setFormData]= useState({
  email: "",
  password:"",
  nombre:"",
});
const {email, password,nombre} = formData;
function onChange(e){
  console.log(e.target.value)
  setFormData((prevState)=>({
    ...prevState,
    [e.target.id]:e.target.value,
  }))

}
async function  registrarse() {
  setMensaje("")
  //console.log(nombre)
//console.log(email)
//console.log(password)
let mensaje = await registro(nombre,email,password)
console.log("Dando Mensaje")
console.log(mensaje)
setMensaje(mensaje)
}
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold '>Registrarse</h1>
      <div className='mt-2 justify-center flex'><p>{showMensaje}</p></div>
      <div className='mt-10 flex justify-center flex-wrap   '>
  <form >
<div><input className='justify-center mt-2 w-64 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' type="text" id="nombre" value={nombre} onChange={onChange} placeholder="Nombre" />
</div>
  
<div>
<input className='mt-2 w-64 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' type="email" id="email" value={email} onChange={onChange} placeholder="Email" />

</div>

<div className='mt-2 relative'>
<input className='w-64 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' type={showPassword ? "text" : "password" } id="password" value={password} onChange={onChange} placeholder="Password" />

{showPassword ? (<AiFillEyeInvisible className='absolute right-3 top-3 text-xl cursor-pointer' onClick={()=>setShowPassword((prevState)=>!prevState)}/>):(<AiFillEye className='absolute right-3 top-3 text-xl cursor-pointer' onClick={()=>setShowPassword((prevState)=>!prevState)}/>)}
</div>

<div className='mt-3 justify-center flex'>
  <p>Ya está registrado ? <Link to="/login" className='text-blue-600 cursor-pointer underline'>Login</Link> 

  </p>
</div>

  </form>
    
</div>
<div className='mt-3 wrap justify-center flex'>
  <button className='w-64 mt-4 bg-gray-300 uppercase rounded shadow-md hover:bg-gray-400  transition duration-150 ' type="submit" onClick={()=>registrarse()}>Registrar</button>
  </div>
  
    </section>
  
  )
}
