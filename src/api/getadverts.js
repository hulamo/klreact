export async function getadverts(nombreanuncio,precio,compra,tags)
{
 

  const Token=localStorage.getItem("token");
    const registrar = async (nombreanuncio,precio,compra,file,tags) => {
    let mensaje=""
    

  const rawResponse = await fetch("http://localhost:3001/api/v1/adverts", {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "accept":"*/*",
        'Authorization': 'Bearer ' + Token ,
      },
      
    });
    const content = await rawResponse.json();
  
    console.log(content);
    
if (content[0].id) {
    mensaje="Lectura Exitosa"
    return content
   
} else {
    mensaje="registro No exitoso Else"
    return content
}   //console.log(mensaje) 
     

       
  
  
  
return content
  };
    let mensaje2=""

   mensaje2=registrar(nombreanuncio,precio,compra,tags)

   console.log("Paso por el segundo try")

 
    return mensaje2 
  }
    