import React,{useState, useEffect }  from 'react'
import {mostraranuncio} from "../api/mostraranuncio"
export default function Anuncio() {
  const[anuncio,setAnuncio] = useState("Venta");
  const[compra,setCompra] = useState("");
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id')
  
  React.useEffect(() => {
    function Borrar()
    {
  
    }

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
      <div className='w-full ml-5 mr-5 mt-5'><h2>Tags: {anuncio.tags[0]}</h2></div>


    </div>
  )
}
