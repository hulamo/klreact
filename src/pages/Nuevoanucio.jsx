import React, { useState }  from 'react'
import {registroanuncio} from "../api/registroanuncio"
export default function Nuevoanucio() {
  const[showMensaje,setMensaje] = useState("");
  const[formData, setFormData]= useState({
    nombreanuncio: "",
    precio:"",
    compra:false,
    tags:"",
    file:0
  });
  const {nombreanuncio, precio,compra,file,tags} = formData;
  function onChange(e){
    console.log(e.target.value)
    //console.log(e.target)
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]:e.target.value,
    }))
  
  }

  function onChangeF(e){
    console.log(e.target.files[0])

    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]:e.target.files[0],
    }))
  
  }


  async function  nuevoanuncio() {
    setMensaje("")
    //console.log(nombre)
  //console.log(email)
  //console.log(password)
  console.log("compra ",compra)
  let mensaje = await registroanuncio(nombreanuncio,parseFloat(precio),compra,file,tags)
  console.log("Dando Mensaje")
  console.log(mensaje)
  setMensaje(mensaje)
  }

  return (
    <section>
     <h1 className='text-3xl text-center mt-6 font-bold '>Nuevo Anuncio</h1>
<form>
<div className='mt-4 w-full px-2 justify-center flex'><input className='justify-center mt-2 w-64 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' type="text" id="nombreanuncio" value={nombreanuncio} onChange={onChange} placeholder="Nombre del Anuncio" />
</div>

<div className='mt-4 w-full px-2 justify-center flex'><input className='justify-center mt-2 w-64 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' type="number" id="precio" value={precio} onChange={onChange} placeholder="Precio" />
</div>




<div className='mt-2 w-full justify-center flex space-x-2' onChange={onChange}>
        <input type="radio" value={true} name="compra" />   Venta
        <input type="radio" value={false} name="compra" />   Compra
       
      </div>
<div className='mt-4 justify-center flex'><h2>Tags</h2></div>
<div className='mt-4 justify-center flex'>
  
      <select name="tags" id="tags" onChange={onChange}>
  <option value="Casas">Casas</option>
  <option value="Terrenos">Terrenos</option>
  <option value="Autos">Autos</option>
  <option value="Otros">Otros</option>
</select>
</div>


<div className='mt-4 justify-center flex '>
			<input type="file" id="file" name="file" onChange={onChange} />
			</div>



</form>
<div className='mt-3 wrap justify-center flex'>
  <button className='w-64 mt-4 bg-gray-300 uppercase rounded shadow-md hover:bg-gray-400  transition duration-150 ' type="submit" onClick={nuevoanuncio}>Publicar</button>
  </div>

    </section>
  )
}
