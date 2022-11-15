import React,{useState,useEffect} from 'react'
import {getadverts} from "../api/getadverts"
export default function AdvertsPage() {
  
  const [anuncios, setAnuncios] = useState([]);
  const [anunciosf, setAnunciosf] = useState([]);
  const [contenido, setContenido] = useState([]);
  const [filtro, setFiltro] = useState("");
  
  /// Ir por los anuncios y renderizarlos

  async function jsonAnuncios(){
 const valor= await getadverts()
    return valor

  }


 
    function irAnuncio(id){
      console.log("Paso por irAnuncio")
      const path = "/anuncio?id="+id
      window.location.replace(path)
      }
      

  /*useEffect(() => {
    // Update the document title using the browser API
    setAnuncios(jsonAnuncios())
    const tempanuncios = jsonAnuncios()
    
    setAnunciosf(tempanuncios)
    getanuncios(tempanuncios)
    
  
  

  },[]);*/

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await jsonAnuncios()

      // set state when the data received
      setAnuncios(data);
      setAnunciosf(data)
    };

    dataFetch();
    getanuncios(anuncios)
  }, []);
  


  function getanuncios(tempanuncios) {
   //setAnuncios(await getadverts())
  
   console.log("tempanuncios",tempanuncios)

   
   const results = [];
   setContenido(results)
    
    tempanuncios.map(anuncio => {
      let compra="Venta"
      if (anuncio.sale===true){
        compra="Compra"
      }
      console.log("AnuncioID:",anuncio.id)
      results.push(
        <div className='w-full mt-2 justify-center' key={anuncio.id}>
          <h2>name: <a className='underline text-blue-700' onClick={()=>irAnuncio(anuncio.id)}>{anuncio.name}</a></h2>
          <h2>precio: {anuncio.price}</h2>
          <h2>compra: {compra}</h2>
          
          <h2>tags: {anuncio.tags[0]}</h2>
        

          <hr className='mb-2 mt-2' />
        </div>,
      );
      setContenido(results)
    });
    
  }


  function onChange(e){
    console.log(e.target.value)
    setFiltro(e.target.value)
    const tempfiltro=e.target.value
     const tempfiltrar = anuncios.filter(l => {
        return l.name.toLowerCase().includes( tempfiltro.toLowerCase() );
      })

      //const tempfiltrar = anuncios.filter(function (str) { return str.includes(filtro); });
      //var tempfiltrar = anuncios.filter(name => name.includes(e.target.value))
      console.log("Filtro: ",tempfiltrar)
   if (e.target.value !== ""){
 getanuncios(tempfiltrar)} else {
  getanuncios(anuncios)
 }
}

  return (
    <div className='w-full ml-2 mr-2 mt-5 justify-center'>    
    <h1 >Anuncios</h1>
    <div>
<input className='mt-2 w-64 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' type="text" id="filtro" value={filtro} onChange={onChange} placeholder="Filtrar" />

</div>

    <div className='w-full justify-center   mt-4'>
    {contenido}
    </div>
    
    
    </div>

  )
}
