//* ------ datos de contacto ---------- *//

function validar(formulario) {
    //comprobaremos la longitud del nombre y del apellido//

    if ((formulario.nombre.value.length == 0) || (formulario.apellidos.value.length == 0)) {
        alert("Los campos nombre y apellidos son obligatorios"); return false;

    }

    //comprobaremos si el telefono es un valor numerico//

    if ((formulario.telefono.value <= 1) || (isNaN(formulario.telefono.value))) {
        alert("FAVOR INTRODUCIR UN NUMERO DE TELEFONO VALIDO "); return false;
    }

    //esta lista de caracteres lo que hace es comprobar que se le introduce caracteres validos seguidos de un "@"con más texto para terminar con un ".com"por ejemplo "[a-z]"significa de la "a"a la "Z"y {2,3} la longitud de esta palabra final.//
    listacar = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,3})$/

    if (!listacar.test(document.getElementById('email').value)) {
        alert("Debe indicar un email valido"); return false;
    }

    
    //comprobamos que el checkbox de politicas de privacidad  esta marcado.//
    if ((!formulario.politica.checked)) {
        alert("Favor aceptar la politica de privacidad para poder continuar "); return false;
    }


}

//* ------ calculo presupuesto ---------- *//

$(function () {
    $("input[type=radio]").click(function () {
        calcular();
    });
    $("input[type=checkbox]").click(function () {
        calcular();
    });
    $("input[type=number]").click(function () {
        entrega();
    });

});
function calcular() {
    $radios = $("input[type=radio]:checked");
    var coste1 = 0;
    $radios.each(function () {
        coste1 = coste1 + parseInt($(this).val());

    })

    $checkbox = $("input[type=checkbox]:checked");
    var coste2 = 0;
    $checkbox.each(function () {
        coste2 = coste2 + parseInt($(this).val());

    })



    coste_total = coste1 + coste2;

    $(".resultado").html(coste_total)


}

function entrega() {
    var num1 = document.getElementById('num1').value;
    var num2 = coste_total

    if (num1 <= 5) {
        num3 = 2 * 1.5;
    }
    else {
        num3 = 2 * 2;
    }




    var sumar = num3 + parseInt(num2);

    document.getElementById('rest').value = sumar;

}
