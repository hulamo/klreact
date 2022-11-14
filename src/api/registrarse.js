export async function registro(nombre,email,password)
{
    

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
    mensaje="Registro Exitoso"

   
} else {
    mensaje="Registro No Exitoso"
    
}   //console.log(mensaje) 
  
} catch (error) {
  mensaje=error
}
     

       
  
  
  
return mensaje
}
    
    
   