// APS.JS
//EN ESTE EJEMPLO UTILIZAREMOS JAVASCRIPT Y EVENTOS PARA INTERACTUAR CON EL USUARIO.
// GRACIAS AL DOM PODEMOS MOSTRAR MENSAJES, SOLICITAR INFORMACION Y REACCIONAR
// A ACCIONES COMO CLICS, DOBLE CLIC O SELECCIONAR OPCIONES

//FUNCION PARA MOSTRAR UN MENSAJE DE CONFIRMACION
function mostrarConfirmacion() {
    const confirmacion = confirm('Estas seguro que deseas continuar?')
    if (confirmacion) {
        alert('has confirmado');
    } else {
        alert('has cancelado');
    }
}

//SOLICITA DATOS AL USUARIO
function solicitarDatos() {
    const nombre = prompt('me das tu nombre?')//PROMT ES UNA VENTANA EMERGENTE PARA PONER DATOS

    if (nombre !== null && nombre !== "") {
        alert('Hola, ' + nombre + "..!")
    } else if (nombre === "") {
        alert('No ingresaste niun nombre')

    } else {
        alert('Has cancelado')
    }
}

//MUESTRA UNA ALERTA
function mostrarAlerta(){
    alert("Bienvenido al repositorio de prueba");
}

//ABRIR VENTANA EMERGENTE
function mostrarVentana() {
    const ventana = window.open("", "_black", "width=400,height=400");
    ventana.document.write(
        "<html>" +
        "<head>" +
        "<tittle> Ventana emergente <tittle>" +
        "</head>" +
        "<body>" +
        "<h2> mensaje desde JavaScript </h2>" +
        "<button onclick='window.close()'>" +
        "<Cerrar>" +
        "</button>" +
        "</body>" +
        "</html>"

    )
}

//MOSTRAR UN MENSAJE TOOLTIP
function mostrarMensajeTooltip(){
    const elemento = document.getElementById('tooltip');
    elemento.setAttribute("title", "Este es un mensaje tooltip.");
}

//MOSTRAR UN MENSAJE TEMPORIZADO
function mostrarMensajeTemporizado(){
    setTimeout(function(){
        alert("Este es un mensaje que se mostrara despues de 3 segundos.")
    }, 3000);
}

//MOSTRAR UN MENSAJE AL HACER DOBLE CLIC EN EL BOTON
function mostrarDobleClick(){
    alert("Has hecho docle clic en el boton")
}

//MANEJAR EL CAMBIO DE BOTONES DE RADIO
function manejarBotonRadio(){
    const radios = document.getElementsByName("opcion");

    radios.forEach(function(radio){
        if (radio.checked){
            alert("Seleccionaste la opcion: " + radio.value);

        }
    });
}
    

//MANEJAR EL CAMBIO EN LAS CASILLAS DE VERIFICACION
function manejarCasillaVerificacion(){
    const casillas = document.querySelectorAll("input[type='checkbox']");

    const seleccionados = [];
    casillas.forEach(function(casilla){
        if(casilla.checked){
            seleccionados.push(casilla.value);
        }

    });

    if(seleccionados.length > 0){
        alert("Casillas seleccionadas: " + seleccionados.join(", "));
    }else{
        alert("No has seleccionado ninguna casilla");
    }
    }
