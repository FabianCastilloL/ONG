
$("#formulario_contacto").validate({
    rules: {
        nombre: {
            required: true,
            minlength: 3,
            maxlength: 30
        },
        email: {
            required: true,
            email: true
        },
        comentario: {
            required: true,
            minlength: 3,
            maxlength: 200
        },
        telefono: {
            number: true,
            minlength:8,
            maxlength: 8
        },
        ciudad: {
            required: true,
            minlength: 3,
            maxlength: 10
        },
        
    }
    
})


$("#guardar").click(function(){
    if($("#formulario_contacto").valid() == false){
        return;
    }
    let nombre = $("#nombre").val()
    let email = $("#email").val()
})