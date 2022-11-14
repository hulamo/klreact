export function registro(nombre,email,password)
{
    
    const registrar = async (nombre,email,password) => {
    let mensaje=""
 try {
  const rawResponse = await fetch('http://localhost:3001/api/auth/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: nombre, email: email,username: email,password:password})
    });
    const content = await rawResponse.json();
  
    //console.log(content);
    
if (content.username) {
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

   mensaje2=registrar(nombre,email,password)

   console.log("Paso por el segundo try")

 
    return mensaje2 
  }
    
    
    
    
    
   