

import {

  crearCuenta,
    auth,
   
    
  } from "./firebase.js";
  

  const formCrearCuenta = document.getElementById("signup-form2");


 
  
  // inicio de sesión





  //crear cuenta de inicio de sesión
  
  formCrearCuenta.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nombre = formCrearCuenta["name2"];
    const cedula = formCrearCuenta["cedula2"];
    const phone = formCrearCuenta["phone2"];
    const correo = formCrearCuenta["email2"];
    const contrasena = formCrearCuenta["password2"];
    
   
   
   try {
  //  console.log(nombre.value)
   
  
        
      //return nombre;
   await  crearCuenta(auth,correo.value,contrasena.value,nombre.value,cedula.value,phone.value)
  
    //  window.location.href = 'home.html';
       
    } catch (error) {
      console.log(error);
      alert(error)
    }
  //  window.location.href = 'home.html';
  });
  