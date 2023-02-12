

import {
  onGetTasks,
  saveTask,
  deleteTask,
  getTask,
  getTasking,
  onGetEvents,
  getTaskingName,
  saveDate,
  updateTask,
  onGetTareas,
  cerrarSesion,
  getTasks,
  auth,
  onGetTareas2,
  onGetEnero,
  onGetFebrero,
  onGetMarzo,
  onGetAbril,
  onGetMayo,
  onGetJunio,
  onGetJulio,
  onGetAgosto,
  onGetSeptiembre,
  onGetOctubre,
  onGetNoviembre,
  onGetDiciembre

} from "./firebase.js";


const taskForm = document.getElementById("task-form");
const tasksContainer = document.getElementById("tasks-container");
const botonCerrar = document.getElementById("cerrar");

const menu3 = document.getElementById("menu3");
const botonVerTodo = document.getElementById("vertodo");






botonCerrar.addEventListener("click", async (e) => {
  e.preventDefault();




  try {
    //  console.log(correo.value)
    //console.log(contrasena.value)

    await cerrarSesion()
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
  //  console.log(task);
  document.getElementById('nombre').innerHTML = task;


  onGetTareas2((querySnapshot) => {
    tasksContainer.innerHTML = "";

    querySnapshot.forEach((doc) => {
      const task = doc.data();

      tasksContainer.innerHTML += `
          <tr>
         
            <td>${task.date}</td>    
             
            <td>${task.hour}</td>
            <td>${task.nombre}</td>
            <td>${task.networker}</td>
     
    </tr>
       `;
    });
  });

  const arrtotal = [];
  //enero
  onGetEnero((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const task = doc.data();

      arrtotal.push(task);
    })
  });



  //feb
  onGetFebrero((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const task = doc.data();

      arrtotal.push(task);
    })
  });

  //marzo
  onGetMarzo((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const task = doc.data();

      arrtotal.push(task);
    })
  });

  //abril
  onGetAbril((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const task = doc.data();

      arrtotal.push(task);
    })
  });

  //mayo
  onGetMayo((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const task = doc.data();

      arrtotal.push(task);
    })
  });

  //junio
  onGetJunio((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const task = doc.data();

      arrtotal.push(task);
    })
  });

  //julio
  onGetJulio((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const task = doc.data();

      arrtotal.push(task);
    })
  });

  //agosto
  onGetAgosto((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const task = doc.data();

      arrtotal.push(task);
    })
  });

  //septiembre
  onGetSeptiembre((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const task = doc.data();

      arrtotal.push(task);
    })
  });

  //octubre
  onGetOctubre((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const task = doc.data();

      arrtotal.push(task);
    })
  });

  //noviembre
  onGetNoviembre((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const task = doc.data();

      arrtotal.push(task);
    })
  });





  //diciembre
  onGetDiciembre((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const task = doc.data();
      arrtotal.push(task);
    })
  });

  console.log(arrtotal)

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


  botonVerTodo.addEventListener("click", async (e) => {
    e.preventDefault();
  
    tasksContainer.innerHTML = "";
  
    for (var i = 0; i < arrtotal.length; i++) {
      // console.log(arrtotal[i].category);
      tasksContainer.innerHTML += `
        <tr >
  
      
  
          <td>${arrtotal[i].date}</td>    
           
    <td>${arrtotal[i].hour}</td>
    <td>${arrtotal[i].nombre}</td>
    <td>${arrtotal[i].networker}</td>
     </tr>
     `;
    }
  
  });

  
  



});




