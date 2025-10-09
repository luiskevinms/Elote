// Evento que se dispara cuando se termina de carga el DOM
//DOM: Document Object Model
document.addEventListener("DOMContentLoaded", function() {

       //Declaramos una variable en JavaScript que representa el boton "btn-ok" en HTML
        var btnOK = document.getElementById("btn-ok")

        //Declaramos un evento click a ese botón
        btnOK.addEventListener("click", function() {
            //Declaramos una variable que representa el input del HTML
            var name = document.getElementById("input-name");

            //Mostramos una alerta del navegador con el contenido del input
            alert("Hello World " +name.value);
            console.log("Se imprimió el Hola Mundo");
            console.error("Esto es un error");

        })

})