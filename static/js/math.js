// Evento que se dispara cuando se termina de carga el DOM
//DOM: Document Object Model
document.addEventListener("DOMContentLoaded", function() {

       //Declaramos las variable en JavaScript que representa los botones "btn-sumar", "btn-restar", "btn-multiplicar", "btn-division"  en HTML
        var btnSuma = document.getElementById("btn-sumar")
        var btnResta = document.getElementById("btn-restar")
        var btnMultiplicar = document.getElementById("btn-multiplicar")
        var btnDivision = document.getElementById("btn-division")

        //Declaramos un evento click al boton sumar
        btnSuma.addEventListener("click", function() {
            

            //Aquí agarramos el valor (o contenido) de la caja de texto input
            //El cual retorna un tipo string
            var value1 = document.getElementById("input-value1").value;

            //Transforma el valor de la caja de texto a tipo float
            var value1Number = parseFloat(value1)

            //En una sola linea obtiene el valor del texto del input y lo transforma a float
            var value2Number = parseFloat(document.getElementById("input-value2").value);

            //isNan = is not a number
            if(isNaN(value1Number) || isNaN(value2Number)){
                //Alert es un mensaje para el usuario
                alert("Introduce solamente valores numéricos");

                //console son mensajes para el desarrollador
                console.error("El usuario ingresó un valor inválido");
                return;

            }

            var result = value1Number + value2Number;
            alert("La suma de los valores es " + result);

        })


        //Declaramos un evento click al boton restar
        btnResta.addEventListener("click", function() {
            

            //Aquí agarramos el valor (o contenido) de la caja de texto input
            //El cual retorna un tipo string
            var value1 = document.getElementById("input-value1").value;

            //Transforma el valor de la caja de texto a tipo float
            var value1Number = parseFloat(value1)

            //En una sola linea obtiene el valor del texto del input y lo transforma a float
            var value2Number = parseFloat(document.getElementById("input-value2").value);

            //isNan = is not a number
            if(isNaN(value1Number) || isNaN(value2Number)){
                //Alert es un mensaje para el usuario
                alert("Introduce solamente valores numéricos");

                //console son mensajes para el desarrollador
                console.error("El usuario ingresó un valor inválido");
                return;

            }

            var result = value1Number - value2Number;
            alert("La resta de los valores es " + result);

        })


        //Declaramos un evento click al boton multiplicar
        btnMultiplicar.addEventListener("click", function() {
            

            //Aquí agarramos el valor (o contenido) de la caja de texto input
            //El cual retorna un tipo string
            var value1 = document.getElementById("input-value1").value;

            //Transforma el valor de la caja de texto a tipo float
            var value1Number = parseFloat(value1)

            //En una sola linea obtiene el valor del texto del input y lo transforma a float
            var value2Number = parseFloat(document.getElementById("input-value2").value);

            //isNan = is not a number
            if(isNaN(value1Number) || isNaN(value2Number)){
                //Alert es un mensaje para el usuario
                alert("Introduce solamente valores numéricos");

                //console son mensajes para el desarrollador
                console.error("El usuario ingresó un valor inválido");
                return;

            }

            var result = value1Number * value2Number;
            alert("La multiplicación de los valores es " + result);

        })


        //Declaramos un evento click al boton division
        btnDivision.addEventListener("click", function() {
            

            //Aquí agarramos el valor (o contenido) de la caja de texto input
            //El cual retorna un tipo string
            var value1 = document.getElementById("input-value1").value;

            //Transforma el valor de la caja de texto a tipo float
            var value1Number = parseFloat(value1)

            //En una sola linea obtiene el valor del texto del input y lo transforma a float
            var value2Number = parseFloat(document.getElementById("input-value2").value);

            //isNan = is not a number
            if(isNaN(value1Number) || isNaN(value2Number)){
                //Alert es un mensaje para el usuario
                alert("Introduce solamente valores numéricos");

                //console son mensajes para el desarrollador
                console.error("El usuario ingresó un valor inválido");
                return;

            }

            var result = value1Number / value2Number;
            alert("La division de los valores es " + result);

        })



})