let nameCourse = prompt ("Ingrese el nombre de la carrera: ");
let carrera = document.getElementById ("title");
carrera.innerHTML = "Estudio: " + nameCourse;
const materias = [
    {id:1, nombre:"Matematicas", Puntaje:125},
    {id:2, nombre:"Ingles", Puntaje:100},
    {id:3, nombre:"Literatura", Puntaje:115},
    {id:4, nombre:"Filosofia", Puntaje:50}];

for (const materia of materias) {
    let contenedor = document.createElement("div");
    contenedor.className = "col-md-3";
    contenedor.innerHTML = `<h3>ID: ${materia.id}</h3>
                            <p>Puntaje: ${materia.nombre}<br>
                            <b> ${materia.Puntaje}</b></p>
                            <hr>`;
                            document.getElementById("resultado").prepend(contenedor); 
      
      class Alumno {
        constructor (nombre, email, password){
            this.nombre = nombre;
            this.email = email;
            this.password = password;
        }
      }
     }