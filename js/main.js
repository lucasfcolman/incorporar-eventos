
/* let nameCourse = prompt ("Ingrese el nombre de la carrera: ");
let carrera = document.getElementById ("title");
carrera.innerHTML = "Estudio: " + nameCourse;
const materias = [
    {id:1, nombre:"Matematicas", Puntaje:125},
    {id:2, nombre:"Ingles", Puntaje:100},
    {id:3, nombre:"Literatura", Puntaje:115},
    {id:4, nombre:"Filosofia", Puntaje:50}];

/* for (const materia of materias) {
    let contenedor = document.createElement("div");
    contenedor.className = "col-md-3";
    contenedor.innerHTML = `<h3>ID: ${materia.id}</h3>
                            <p>Puntaje: ${materia.nombre}<br>
                            <b> ${materia.Puntaje}</b></p>
                            <hr>`;
                            document.getElementById("resultado").prepend(contenedor); */
      
      class Alumno {
        constructor (nombre, email, password){
            this.nombre = nombre;
            this.email = email;
            this.password = password;
        }
      }

   let arrayAlumnos  =  [];
   let miFormulario = document.querySelector ("#formulario");
   let inputNombre = document.querySelector ("#iNombre");

   let nombreI = formulario.children [1].value;
   let emailI = formulario.children [3].value;
   let passwordI = formulario.children [5].value;
   

   let contenedor = document.querySelector ("#alumnoIngresado");
   let displayTodos = document.querySelector ("#displayTodos");
   let parrafos = displayTodos.getElementsByTagName ("p");
   let flag = false;

   miFormulario.addEventListener ("submit", agregarAlumnos);
   btnMostrar.addEventListener ("click", MostrarTodosAlumnos);
   inputNombre.focus();


   function validarForm(){
   nombreI = formulario.children[1].value;
   emailI = formulario.children[3].value;
   passwordI = formulario.children[5].value;
   console.log(nombreI);
   console.log(emailI);
   console.log(passwordI);
   }
   if (nombreI =="" || emailI == "" || passwordI ==""){
    alert ("ERROR - COMPLETAR LOS CAMPOS PARA CONTINUAR: ");
    inputNombre.focus();
    flag = false;
   } else {
    flag = true;
   }


   function agregarAlumnos (e){
    e.preventDefault ();
    validarForm();
    if (flag == true) {
        let opcion = confirm ("Seguro que quiere agregar alumno?");
        if (opcion == true){
            let formulario = e.target;
            arrayAlumnos.push (new Alumno (nombreI, emailI, passwordI));
        } else{
            alert ("El usuario no se agregara");
        }
    }
   }

   formulario.children[1].value= "";
   formulario.children[3].value="";
   formulario.children[5].value="";
   contenedor.innerHTML ="";
   AgregarAlDom();
   input.Nombre.focus();
   


   function AgregarAlDom (){
    contenedor.innerHTML = "<h3>Ultimo Alumno Ingresado: </h3><p><strong> Nombre: </strong> ${nombreI}</p> <p><strong> Email: </strong> ${emailI}</p><p><strong> Password: </strong> ${passwordI}</p> <hr>";
         }


 function MostrarTodosAlumnos (){
    e.preventDefault();
    let i = 0;
    displayTodos.innerHTML = '<h3> Listado de todos los Alumnos: </h3>';
    for (const alumno of arrayAlumnos){
        displayTodos.innerHTML += ' <p><strong> Nombre: </strong> ${alumno.nombre}</p> <p><strong> Email: </strong> ${alumno.email}</p><p><strong> Password: </strong> ${alumno.password}</p> <hr>'
    }
 }
