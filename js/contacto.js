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

$('#elijoServicioForm').on('submit',function(event){
    event.preventDefault();
    clientes.push(new Cliente($('#elijoServicioForm').children[0].value, $('#elijoServicioForm').children[1].value, $('#elijoServicioForm').children[2].value));
    $('#divClientes').html = "";
    clientesHTML(clientes);
});


function clientesHTML(clientes) {
    for (const cliente of clientes) {
        $('#divClientes').append(`<h5> Apellido: ${cliente.apellido} - Nombre: ${cliente.nombre} - Email de contacto: ${cliente.email} - Servicio que le interesa: ${cliente.servicio}</h5>`);
    }
}

