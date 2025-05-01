const usuario = document.querySelector("#usuario");
const contrasena = document.querySelector("#contrasena");
const btn = document.querySelector("#boton");
const mensaje = document.querySelector("#mensaje");

const usuariocorrecto = "SandraGomez";
const contrasenaCorrecta = "sandra1974";

btn.addEventListener("click", function(){
    event.preventDefault();

if(usuario.value == null || contrasena.value == null){
    mensaje.textContent = "Porfavor Complete todos los campos";
}else if(usuario.value == usuariocorrecto && contrasena.value == contrasenaCorrecta){
    mensaje.textContent = "Bienvenido al sistema";
    window.location.href = "manejoproductos.html";
    }else{
    mensaje.textContent = "Usuario o contraseña incorrectos";
    }
});

