

export async function login(email,password)
{

    //const textofetch= "http://localhost:8000/api/users?username=" + email
   
    //const getResponse = await fetch(textofetch);
    

  

    const rawResponse = await fetch('http://localhost:3001/api/auth/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: email, password:password})
    });
    
    const content = await rawResponse.json();
  
    console.log(content);
    let logueado=false
    if (content.accessToken) {
        
   
       
        localStorage.setItem("email", email);
        localStorage.setItem("token", content.accessToken);
        
        //const textofetch= "http://localhost:3001/api/auth/me"
   
        //const getResponse = await fetch(textofetch);
    
        //console.log(getResponse)
        
        const datoslog = await fetch('http://localhost:3001/api/auth/me', {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              "accept":"*/*",
            'Authorization': 'Bearer ' + content.accessToken 
            },
            //body: JSON.stringify({accessToken:content.accessToken,email: email, password:password})
          });
          
          const datos = await datoslog.json();
        
          localStorage.setItem("name", datos.name);
         localStorage.setItem("id", datos.id);
         localStorage.setItem("logueado", true);
        
          console.log(datos);



        
        logueado=true
    } else {
        localStorage.setItem("email", "");
        localStorage.setItem("token", "");
        localStorage.setItem("name", "");
         localStorage.setItem("id", "");
         localStorage.setItem("logueado", false);
        
        console.log("Hubo un error")
        logueado=false

}
return logueado
}