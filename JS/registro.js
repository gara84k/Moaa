function validacion() {


    validarNombre();
    validarApellido();
    validarfecha()
    validarmovil()
    validardireccion()
    validarcorreo()
    validarclave()
    validarRedireccion()


}
function validarNombre() {
    if (formulario.nombre.value == 0) {
        alert("Falta nombre");
    }
}
function validarApellido() {
    if (formulario.apellido.value == 0) {
        alert("Falta apellido");
    }
}
function validarfecha() {
    if (formulario.fecha.value == 0) {
        alert("ingrese fecha")
    }
}
function validarmovil() {
    if (formulario.movil.value == 0) {
        alert("ingrese su número de celular")
    }
}
function validardireccion() {
    if (formulario.direccion.value == 0) {
        alert("ingrese su dirección")
    }
}
function validarcorreo() {
    if (formulario.correo.value == 0) {
        alert("ingrese su correo electronico")
    }
}
function validarclave() {
    if (formulario.clave.value == 0) {
        alert("ingrese su contraseña")
    }
}
function validarRedireccion() {
    if(formulario.correo.value != 0 &&  formulario.apellido.value !=0 && formulario.fecha.value !=0 && formulario.movil.value !=0 && formulario.nombre.value !=0 && formulario.direccion.value !=0 && formulario.clave.value !=0){
        window.location = "./dashboard.html";
    }
    else{
        alert("complete los campos");
    }
    
}