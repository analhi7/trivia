function usuario(){
let valor = document.getElementById("nombre").value;
localStorage.setItem("nombreUsuario", valor);
//alert(localStorage.getItem("nombreUsuario"));
location.href = "C:/Users/Sandy/Desktop/Nuevo_Proyecto/bienvenida.html"; 
}