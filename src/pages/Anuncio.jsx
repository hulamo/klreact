import React,{useState, useEffect }  from 'react'
import {mostraranuncio} from "../api/mostraranuncio"
import {borraranuncio} from "../api/borraranuncio"
export default function Anuncio() {
  const[anuncio,setAnuncio] = useState("Venta");
  const[compra,setCompra] = useState("");
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id')
  
  function Borrar(id){
borraranuncio(id)
window.location.replace("/")
    console.log(id)
  }
  
  React.useEffect(() => {
   

    async function getanuncio(id) {
      const anuncio = await mostraranuncio(id)
      setAnuncio( anuncio)
    }
  
    getanuncio(id)
   

   
   if (anuncio.compra===true)
   {setCompra("Compra")}

    console.log("Anuncio: ",anuncio)}, []);
  
 
  return (
    <div className='w-full ml-5 mr-5 mt-5 justify-center'>
      <div className='w-full ml-5 mr-5 mt-5'><h1>Anuncio</h1></div>
      <div className='w-full ml-5 mr-5 mt-5'><h2>Nombre: {anuncio.name}</h2></div>
      <div className='w-full ml-5 mr-5 mt-5'><h2>Precio: {anuncio.price}</h2></div>
      <div className='w-full ml-5 mr-5 mt-5'><h2>Tags: {anuncio.tags}</h2></div>
      <div className='mt-3 wrap justify-center flex'>
  <button className='w-64 mt-4 bg-red-700 uppercase rounded shadow-md hover:bg-gray-400  transition duration-150 ' type="submit" onClick={()=>window.confirm("Ejemplo")?Borrar(anuncio.id):(console.log("No Borrar"))}>Borrar</button>
  </div>

    </div>
  )
}
