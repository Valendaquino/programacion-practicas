alert ("Bienvenidos a mi sitio!")

let continuar = confirm ("Está seguro de querer avanzar?");
let titulo = document.querySelector ("h2");

if (continuar == false){
   titulo.innerHTML = "Lamentamos que no quieras continuar tu visita por este sitio increíble.";
} else if (continuar == true){
    titulo.innerHTML = "¡Qué alegría que quieras seguir con tu visita por este maravilloso sitio!";
    
}

let nombre = prompt ("¿Cuál es tu nombre?");
let bienvenido = document.querySelector ("h1");
if(nombre==nombre){
    bienvenido.innerHTML = "Bievenido" + nombre;
}

let edad= prompt ("¿Qué edad tienes?");
let fondo= document.querySelector ("body")
if(edad >= 18){
    alert ("Puede continuar")
} else if (edad  <  18){
    alert ("Lo siento, no puede continuar")

   
    
}
let color = confirm("¿Desea utilizar el Modo oscuro?")
    
if(color== true){
    fondo.style.backgroundColor = "dimgray"
    fondo.style.color = "white"
}
let diaDeSemana= "Domingo"
if (diaDeSemana=="Domingo"){
    console.log("¡Hoy es día de descanso!")
}