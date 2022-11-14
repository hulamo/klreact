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
    anuncios.map(anuncio => {
      
      console.log("AnuncioID:",anuncio.id)
      results.push(
        <div className='w-full mt-2 justify-center' key={anuncio.id}>
          <h2>name: {anuncio.name}</h2>
          <h2>precio: {anuncio.price}</h2>
  
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
