window.onload = function(){
  let boton = document.getElementById("btn");
  boton.onclick = function(){
    var elem = document.formulario.resp;
    for(i=0; i<elem.length; i++){
      if(elem[i].checked){
        if(elem[i].value == "2"){
          localStorage.setItem("respuesta3", 1);
          alert("Tu respuesta es correcta");
        }else{
          localStorage.setItem("respuesta3", 0);
          alert("La respuesta correcta es " + elem[i].value);
        }
        
      }
    }
  }
}