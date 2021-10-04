$(window).on('load',function () {
    $("#espera2").remove();
});

class Cliente {
    constructor(apellido, nombre, email, servicio) {
        this.apellido = apellido;
        this.nombre = nombre;
        this.email = email;
        this.servicio = servicio;
    }
}
const clientes = [];

$('#submitBtn').click(function(){
    $('#ventanaModal').modal();
});

