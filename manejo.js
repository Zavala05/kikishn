const imagen = document.querySelector("#imagen");
const nombre = document.querySelector("#nombre");
const descripcion = document.querySelector("#descripcion");
const boton = document.querySelector("#agregar");
const mensaje = document.querySelector("#respu");
const tarjetasContainer = document.querySelector("#tarjetas");

boton.addEventListener("click", function(event) {
    event.preventDefault();

    if (!imagen.files[0] || nombre.value === "" || descripcion.value === "") {
        mensaje.textContent = "Por favor, complete todos los campos";
        mensaje.style.color = "red";
        return;
    }

    // Crear URL temporal de la imagen
    const imageURL = URL.createObjectURL(imagen.files[0]);

    const cardHTML = `
    <div class="col s12 m6">
        <div class="card">
            <div class="card-image">
                <img src="${imageURL}" alt="${nombre.value}">
                <span class="card-title">${nombre.value}</span>
            </div>
            <div class="card-content">
                <p>${descripcion.value}</p>
            </div>
        </div>
    </div>
    `;

    tarjetasContainer.innerHTML += cardHTML;
    mensaje.textContent = "Producto agregado correctamente";
    mensaje.style.color = "green";

    // Limpiar campos
    nombre.value = "";
    descripcion.value = "";
    imagen.value = "";
});
