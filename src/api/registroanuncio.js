export async function registroanuncio(nombreanuncio,precio,compra,file,tags)
{
  console.log(nombreanuncio)
  console.log(precio)
  console.log(compra)
  console.log(file)

  const Token=localStorage.getItem("token");
    const registrar = async (nombreanuncio,precio,compra,file,tags) => {
    let mensaje=""
    
 try {
  const rawResponse = await fetch("http://localhost:3001/api/v1/adverts", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "accept":"*/*",
        'Authorization': 'Bearer ' + Token ,
      },
      body: JSON.stringify({name: nombreanuncio, sale: compra,price: precio,tags:tags})
    });
    const content = await rawResponse.json();
  
    //console.log(content);
    
if (content.id) {
    mensaje="registro exitoso username"
    return mensaje
   
} else {
    mensaje="registro No exitoso Else"
    return mensaje
}   //console.log(mensaje) 
     
 } catch (error) {
  console.log("Paso por aqui en el error")
  mensaje="Registro No exitoso Catch"
 }finally{
  console.log("Paso por Aqui en el Finally")
  console.log(mensaje)
  return mensaje

 }
       
  
  
  
return mensaje
  };
    let mensaje2=""

   mensaje2=registrar(nombreanuncio,precio,compra,file,tags)

   console.log("Paso por el segundo try")

 
    return mensaje2 
  }
    
    
    
    
    
   