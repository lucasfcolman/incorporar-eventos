let nameCourse = prompt ("Ingrese el nombre de la carrera: ");
let carrera = document.getElementById ("title");
carrera.innerHTML = "Estudio: " + nameCourse;
class datosMaterias {
    constructor (nombre, Puntaje, Nota1, Nota2, Nota3){
       this.nombre = nombre;
       this.Puntaje = parseFloat(Puntaje);
       this.Nota1 = parseFloat (Nota1);
       this.Nota2 = parseFloat (Nota2);
       this.Nota3 = parseFloat (Nota3);
    }
    promedio(){
     this.Nota1 + this.Nota2 + this.Nota3 / 3;
    }
}

const materias = [];
let nombre = prompt("Ingrese Materia a cursar")[0];
let Puntaje = prompt ("Ingrese el puntaje");[1];
let Nota1 = prompt ("Ingrese 1era nota"); [2];
let Nota2 = prompt ("Ingrese 2da nota ");[3];
let Nota3 = prompt ("Ingrese 3er nota ");[4];
materias.push (new datosMaterias)(nombre, Puntaje, Nota1, Nota2, Nota3);


for (const materia of materias) {
    let contenedor = document.createElement("div");
    contenedor.className = "col-md-3";
    contenedor.innerHTML = `<h3>ID: ${materia.nombre}</h3>
                            <p>Puntaje: ${materia.Puntaje}</p><br>
                            <p>Nota 1: ${materia.Nota1} </p><br> 
                            <p>Nota 2: ${materia.Nota2} </p><br>
                            <p>Nota 3: ${materia.Nota3} </p><br>
                            <p>Promedio: ${promedio}</p> 
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