let r1 = localStorage.getItem("respuesta1");
let r2 = localStorage.getItem("respuesta2");
let r3 = localStorage.getItem("respuesta3");

let suma = parseInt(r1) + parseInt(r2) + parseInt(r3);

document.getElementById("resultados").innerHTML = suma;