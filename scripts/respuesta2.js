window.onload = function(){
  let boton = document.getElementById("btn");
  boton.onclick = function(){
    var elem = document.formulario.resp;
    for(i=0; i<elem.length; i++){
      if(elem[i].checked){
        if(elem[i].value == "1"){
          localStorage.setItem("respuesta2", 1);
          alert("Tu respuesta es correcta");
        }else{
          localStorage.setItem("respuesta2", 0);
          alert("La respuesta correcta es " + elem[i].value);
        }
        
      }
    }
  }
}