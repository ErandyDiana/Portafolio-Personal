/* Formulario */

function validar() {
    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    let mensaje = document.getElementById("mensaje");

    let regexNombre = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+([A-Za-zÑñÁáÉéÍíÓóÚú]{3,40}\s*)))*$/;
    let regexCorreo = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regexMensaje = /^(?!(\d)\1+$)[\s\S]{10,250}$/;



    let nombreValid = regexNombre.test(nombre.value);
    let emailValid = regexCorreo.test(email.value);
    let mensajeValid = regexMensaje.test(mensaje.value);

    let errorMessages = [];

    if (nombre.value.trim() === "") {
        errorMessages.push("El campo Nombre no puede estar vacío.");
        nombre.style.borderColor = "red";
    } else if (!nombreValid) {
        errorMessages.push("El nombre tiene que tener de 3 a 40 caracteres y solo debe contener letras y espacios.");
        nombre.style.borderColor = "red";
    } else {
        nombre.style.borderColor = "green";
    }

    if (email.value.trim() === "") {
        errorMessages.push("El campo Correo Electrónico no puede estar vacío.");
        email.style.borderColor = "red";
    } else if (!emailValid) {
        errorMessages.push("El correo electrónico solo debe contener letras, números, puntos y guiones.");
        email.style.borderColor = "red";
    } else {
        email.style.borderColor = "green";
    }


    if (mensaje.value.trim() === "") {
        errorMessages.push("El campo Comentarios no puede estar vacío.");
        mensaje.style.borderColor = "red";
    } else if (!mensajeValid) {
        errorMessages.push("El mensaje debe ser de 10 a 250 caracteres y solo debe contener números y letras (no repetidos más de 4 veces), puede contener caracteres especiales.");
        mensaje.style.borderColor = "red";
    } else {
        mensaje.style.borderColor = "green";
    }

    if (errorMessages.length > 0) {
        Swal.fire({
            icon: 'error',
            title: 'Corrige los siguientes errores:',
            html: errorMessages.join("<br>"),
        });
        return false;
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Tus datos serán enviados correctamente a Colibrí',
        });
        return true;
    }
}