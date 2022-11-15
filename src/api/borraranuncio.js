export async function borraranuncio(id)
{
 

  const Token=localStorage.getItem("token");
    const registrar = async (id,Token) => {
    let mensaje=""
    

  const rawResponse = await fetch("http://localhost:3001/api/v1/adverts/"+id, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "accept":"*/*",
        'Authorization': 'Bearer ' + Token ,
      },
      
    });
    const content = await rawResponse.json();
  
    //console.log(content);
    
if (content.name) {
    mensaje="Borrado Exitoso Exitosa"
    return content
   
} else {
    mensaje="Borrado No exitoso Else"
    return content
}   //console.log(mensaje) 
     

       
  
  
  
return content
  };
    let mensaje2=""

   mensaje2= await registrar(id,Token)

   //console.log("Mensaje2: ",mensaje2)

 
    return mensaje2 
  }