function iniciarSesion(){
  var usuario, clave;
  usuario = document.getElementById("usuario").value;
  clave = document.getElementById("clave").value;

  if(usuario == "moaastyles@gmail.com" && clave =="123" ){
      window.location = "./dashboard.html";
  }else{
      alert("El usuario o contraseña es incorrecto");
  }
}