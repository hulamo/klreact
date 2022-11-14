import React,{useState,useEffect} from 'react'
import {getadverts} from "../api/getadverts"
export default function AdvertsPage() {
  console.log(getadverts())
  const [contenido, setContenido] = useState([]);
  async function getanuncios() {
   const anuncios = await getadverts()
   console.log("Anuncios",anuncios)
   const results = [];
    console.log("anuncios",anuncios.lenght)
    
    function Borrar(id){

    }
    
    
    function irAnuncio(id){
    console.log("Paso por irAnuncio")
    const path = "/anuncio?id="+id
    window.location.replace(path)
    }
    
    anuncios.map(anuncio => {
      let compra="Venta"
      if (anuncio.sale==true){
        compra="Compra"
      }
      console.log("AnuncioID:",anuncio.id)
      results.push(
        <div className='w-full mt-2 justify-center' key={anuncio.id}>
          <h2>name: <a className='underline text-blue-700' onClick={()=>irAnuncio(anuncio.id)}>{anuncio.name}</a></h2>
          <h2>precio: {anuncio.price}</h2>
          <h2>compra: {compra}</h2>
          
          <h2>tags: {anuncio.tags[0]}</h2>
          <div className='mt-3 wrap justify-center flex'>
  <button className='w-64 mt-4 bg-red-700 uppercase rounded shadow-md hover:bg-gray-400  transition duration-150 ' type="submit" onClick={()=>Borrar(anuncios.id)}>Borrar</button>
  </div>

          <hr className='mb-2 mt-2' />
        </div>,
      );
      setContenido(results)
    });
    
  }
  useEffect(() => {
    // Update the document title using the browser API
    const anuncios =getanuncios()
    
  
  

  },[]);

  

  return (
    <section className='w-full ml-2 mr-2 mt-5 justify-center'>    
    <h1 >Anuncios</h1>

    <div className='w-full justify-center   mt-4'>
    {contenido}
    </div>
    
    
    </section>

  )
}
