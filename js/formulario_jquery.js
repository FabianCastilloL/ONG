

$.validator.setDefaults({
    submitHandler: function () {
        alert("submitted!");
    }
});


$(document).ready(function () {
    $('#formulario_contacto').validate({
        rules: {
            nombre: {
                required: true,
                minlength: 3,
                maxlength: 40
            },
            email: {
                required: true,
                email: true
            },
            comentario: {
                required: true,
                minlength: 20
            },
            telefono: {
                required: true,
                number: true,
                minlength: 8,
                maxlength: 8
            },
            ciudad: {
                required: true,
                minlength: 3,
                maxlength: 20
            },

        },
        messages: {
            nombre: {
                required: "Debes ingresar el nombre",
                minlength: "El nombre debe tener mas de 3 letras",
                maxlength: "El nombre exece la cantidad de letras o caracteres (40)"
            },
            email: {
                required: "Debes ingresar un email",
                email: "Debes ingresar un email válido ej: 'abcd@gmail.com'"
            },
            comentario: {
                required: "Debes ingresar un comentario",
                minlength: "El comentario debe tener mas de 20 letras o caracteres"
            },
            telefono: {
                required: "debes ingresar un telefono",
                number: "El telefono debe contener 8 números",
                minlength: "El telefono ingresado debe contener 8 numeros",
                maxlength: "El telefono ingresado debe contener 8 numeros"
            },
            ciudad: {
                required: "Debes ingresar la ciudad",
                minlength: "Los datos del campo ciudad deben contener mas de 3 letras o caracteres",
                maxlength: "Los datos del campo ciudad no deben contener mas de 20 letras o caracteres"
            },

        },
    });
});

