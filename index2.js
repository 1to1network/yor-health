

import {
    onGetTasks,
    saveTask,
    deleteTask,
    getTask,
    getTasking,
    getTaskingName,
    saveDate,
    updateTask,
    onGetTareas,
    cerrarSesion,
    cerrarSesion2,
    getTasks,
    auth,
  
  } from "./firebase.js";
  
  
  const taskForm = document.getElementById("task-form");
  const tasksContainer = document.getElementById("tasks-container");
  
  const botonCerrar2 = document.getElementById("cerrar2");
  
  let editStatus = false;
  let id = "";
  const date = new Date();
  const currentMonth = date.getMonth() + 1;
  const fechaComp = date.getDate() + "/" + currentMonth + "/" + date.getFullYear();
  
  
  
  
  console.log(fechaComp);
  
  
  
  
  botonCerrar2.addEventListener("click", async (e) => {
    e.preventDefault();
  
  
  
  
    try {
      //  console.log(correo.value)
      //console.log(contrasena.value)
  
      await cerrarSesion2()
    } catch (error) {
      console.log(error);
    }
  });
  
  
  

  
  
  window.addEventListener("DOMContentLoaded", async (e) => {
    // const querySnapshot = await getTasks();
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.data());
    // });
  
  
  
  
    const docu = await getTasking();
    const task = docu.data().name;
   console.log(task)
  
  
    const inputString = docu.id
    const outputString1 = inputString.slice(1, 4);
  
  
  
    document.getElementById('nombre').innerHTML = task;
  
   // document.getElementById('boleto').innerHTML = outputString1;
  
  
    // document.getElementById('nombre2').innerHTML = task;
  
    /*
    
      onGetTareas((querySnapshot) => {
        // tasksContainer2.innerHTML = "";
    
        querySnapshot.forEach((doc) => {
          const task = doc.data();
          //console.log(doc.data());
    
          //  document.getElementById('nombre').innerHTML = doc.data().name;
    
    
        });
    
    
    
    
    
      });
    
      onGetTasks((querySnapshot) => {
        tasksContainer.innerHTML = "";
    
        querySnapshot.forEach((doc) => {
          const task = doc.data();
         
          tasksContainer.innerHTML += `
          <tr >
            <td>${task.date}</td>    
             
     <td>${task.category}</td>
     <td>${task.title}</td>
     <td>${task.cantidad}</td>
     <td>${task.description}</td>
     <td>  
    <button class="btn btn-secondary btn-edit" data-id="${doc.id}">
     🖉 Editar
    </button>
    <button class="btn btn-primary btn-delete" data-id="${doc.id}">
     🗑 Eliminar
    </button>
    </td> </tr>
       `;
        });
    
    
    
        const btnsDelete = tasksContainer.querySelectorAll(".btn-delete");
        btnsDelete.forEach((btn) =>
          btn.addEventListener("click", async ({ target: { dataset } }) => {
            try {
              await deleteTask(dataset.id);
            } catch (error) {
              console.log(error);
            }
          })
        );
    
        const btnsEdit = tasksContainer.querySelectorAll(".btn-edit");
        btnsEdit.forEach((btn) => {
          btn.addEventListener("click", async (e) => {
            try {
              const doc = await getTask(e.target.dataset.id);
              const task = doc.data();
              taskForm["task-title"].value = task.title;
              taskForm["task-category"].value = task.category;
              taskForm["task-description"].value = task.description;
              taskForm["task-number"].value = task.cantidad;
              editStatus = true;
              id = doc.id;
              taskForm["btn-task-form"].innerText = "Actualizar";
            } catch (error) {
              console.log(error);
            }
          });
        });
      });
    });
    
    
    
    
    taskForm.addEventListener("submit", async (e) => {
      e.preventDefault();
    
      const title = taskForm["task-title"];
      const categoria = taskForm["task-category"];
      const description = taskForm["task-description"];
      const cantidad = taskForm["task-number"];
      const uid = document.getElementById('nombre').innerHTML;
    
    
    
    
      try {
        if (!editStatus) {
          await saveTask(fechaComp, title.value, categoria.value, description.value, cantidad.value, uid);
        } else {
          await updateTask(id, {
            title: title.value,
            category: categoria.value,
            description: description.value,
            cantidad: cantidad.value,
    
          });
    
          editStatus = false;
          id = "";
          taskForm["btn-task-form"].innerText = "Save";
        }
    
        taskForm.reset();
        title.focus();
      } catch (error) {
        console.log(error);
      }
    });
    
    
    */
  
  
  
  
    //lectura de codigos qr
    let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
    scanner.addListener('scan', function (content) {
  
      const date2 = new Date();
      var hora = date2.getHours();
      var mins = date2.getMinutes();
      var secs = date2.getSeconds();
  
      var horaComp = hora + ":" + mins + ":" + secs
  
  
  
      async function f() {
  
  
        const docu2 = await getTaskingName(content);
        const username = docu2.data().name;
        saveDate(fechaComp, horaComp, username, content);
        // console.log(username)
        // return task2
        alert("¡Registro exitoso!, Bienvenid@ " + username)
      }
  
      f();
  
  
      console.log(horaComp)
  
  
  
  
      // alert("este es mi mensaje" + content);
    });
    Instascan.Camera.getCameras().then(function (cameras) {
      if (cameras.length > 0) {
        scanner.start(cameras[0]);
      } else {
        console.error('No cameras found.');
      }
    }).catch(function (e) {
      console.error(e);
    });
  
  
  });
  
  
  
  
  