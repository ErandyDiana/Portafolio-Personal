function validar(){
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let tel = document.getElementById("tel").value;
    let mensaje = document.getElementById("mensaje").value;

    //RegExp

    let regexNombre =  /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
    let regexCorreo = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regexTel =   /^[0-9]{10}$/;
    let regexMensaje = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/; 
   
    //Variables boolean
    let nombreBoolean= true;
    let emailBoolean = true;
    let telBoolean = true;
    let mensajeBoolean = true;

    //Validar
    if (!regexNombre.test(nombre)){
        alert("Nombre invalido");
        return false;
    }
    else if (!regexCorreo.test(email)){
        alert("Email invalido");
        return false;
    }
    else if (!regexTel.test(tel)){
        alert("Telefono no es valido");
        return false;
    }
    else if (!regexMensaje.test(mensaje)){
        alert("Mensaje invalido");
        return false;}
    }


    /* ANIMACION */
    let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Desarrollo sitios web y soy diseñadora UX UI.')
  .pauseFor(200)
  .deleteChars(10)
  .start();