//Nombre de carrera
let titulo = document.getElementById ("title");
titulo.style.backgroundColor = "black";
titulo.style.color = "white";
console.log (titulo.innerHTML);
let nombre = prompt("Ingrese la carrera que esta estudiando:");
titulo.innerHTML = "Estudio: <b>" + nombre + "</b>";
if (titulo = ""){
    alert ("ACTUALIZAR E INGRESAR CARRERA")
}
//Materias
var course = document.getElementsByTagName ("li");
console.log (course);
console.log (course[0].innerHTML);
console.log (course[1].innerHTML);
console.log (course[2].innerHTML);
console.log (course[3].innerHTML);
course[0].innerHTML = prompt ("Agregar Materias a cursar(Maximo 4, te quedan 3):");
alert ("Puntos 3000")
course[1].innerHTML = prompt ("Agregar Materias a cursar(Te quedan 2):");
alert ("Puntos 1500")
course[2].innerHTML = prompt ("Agregar Materias a cursar(Te quedan 1):");
alert ("Puntos 500")
course[3].innerHTML = prompt ("Agregar Materias a cursar(Restan 0)");
alert ("Puntos 250") 
//Promedio


/* const course = [0,1,2,3];
 
porCadaUno(course, (el)=> {
    promedio.push((el + el + el + el) / 4 )
})
console.log(course); */
 
//For Of

for (const materia of title) {
    console.log(materia.innerHTML);
}
for (const li of course) {
    console.log(li.innerHTML);
}

let section = document.createElement ("section");
let paragraph = document.createElement ("p");
paragraph.innerHTML =  ("")