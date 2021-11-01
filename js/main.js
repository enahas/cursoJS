$(window).on('load', function () {
    $("#espera").remove();
});

class Servicio {
    constructor(id, nombre, meses, precioContado, img, descripcion) {
        this.id = id;
        this.name = nombre;
        this.time = meses;
        this.price = precioContado;
        this.img = img;
        this.descripcion = descripcion;
        this.cantidad = 1;
    }
    subtotal() {
        return this.cantidad * this.price;
    }
    agregarCantidad(valor) {
        this.cantidad += valor;
    }
}
const servicios = [];

$.get("../data/servicios.json", function (respuesta, estado) {
    if (estado == "success") {
        for (const objeto of respuesta) {
            servicios.push(new Servicio(objeto.id, objeto.name, objeto.time, objeto.price, objeto.img, objeto.descripcion));
        }
        serviciosUI(servicios);
    } else {
        console.log('Los datos no se cargaron correctamente');
    }
});

function serviciosUI(servicios) {
    $('#divDinamico').empty();
    for (const servicio of servicios) {
        $('#divDinamico').append(`<div class="container d-md-block">
                                        <div class="row align-items-center m-5">
                                            <div class="col-lg-4 col-xs-12">
                                                <img src=${servicio.img} class="logoServicios img-fluid">
                                            </div>
                                            <div class="col-lg-8 col-xs-12">
                                                <div class="row"><h5>${servicio.name}</h5></div>
                                                <div class="row"><p>${servicio.descripcion}</p></div>
                                                <div class="row">
                                                    <div class="col-auto pl-0"><button class="btn btn-outline-dark btn-compra" id="compra${servicio.id}">Agregar</button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`);
        $(`#compra${servicio.id}`).on('click', function () {
            comprarServicio(`${servicio.id}`)
        });
    };
}

let carritoDeCompras = []

function comprarServicio(id) {
    const idServicio = id;
    const existe = carritoDeCompras.find(elemento => elemento.id == idServicio)
    if (existe == undefined) {
        carritoDeCompras.push(servicios.find(elemento => elemento.id == idServicio));
    }
    else {
        existe.agregarCantidad(1);
    }
    carritoUI(carritoDeCompras);
}

function carritoUI(servicios) {
    $("#carritoCantidad").html(servicios.length);
    $('#carrito').empty();
    for (const servicio of servicios) {
        $('#carrito').append(`<p> ${servicio.name} <span class="badge badge-warning">$${servicio.price}</span><span class="badge badge-warning">Cantidad: ${servicio.cantidad}</span><span class="badge badge-warning">Subtotal $${servicio.subtotal()}</span></p>`);
    }
    $('#carrito').append(`<button class="btn btn-outline-dark btn-compra" id="btnConfirmar">Confirmar</button>`);
    $("#btnConfirmar").on("click", enviarCompra);
}

function enviarCompra() {
    $.post("https://jsonplaceholder.typicode.com/posts", JSON.stringify(carritoDeCompras), function (respuesta, estado) {
        if (estado == "success") {
            $('#carrito').empty();
            $('#carritoCantidad').html("0");
            carritoDeCompras = [];
            localStorage.clear()
            Swal.fire({
                icon: 'success',
                title: 'Ok',
                text: 'Compra Realizada!',
                footer: '<p>N° de Orden : 5465454sd5vv54654</p>'
            })
        } else {
            console.log('Los datos no se enviaron correctamente');
        }
    })
}

