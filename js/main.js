$(document).ready(function() {
    $(".btn-compra").on('click', comprarServicio);
});

$(window).on('load',function () {
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
    }
}
const servicios = [];
servicios.push(new Servicio(1, "Coaching ontológico: sesión personal", 6, 5000, '../assets/img/servicio1.jpg', "En este camino, yo te acompañaré con distintas herramientas y técnicas, siendo la más importante la pregunta, para instarte a reflexionar y que puedas descubrir fortalezas, debilidades y oportunidades encontrando por vos mismo la/s respuesta/s que te permitan transitar de tu situación actual a la situación deseada, aquella en que tu objetivo o meta se encuentra cumplido."));
servicios.push(new Servicio(2, "Mentoría de propósito para jóvenes", 1, 1000, '../assets/img/servicio3.jpg', "La Mentoría de Propósito para Jóvenes está compuesta de seis (6) encuentros de dos (2) horas máximo cada uno, con una duración total de un (1) mes."));
servicios.push(new Servicio(3, "Sesión de lectura de mapa personal de eneagrama", 5, 3500, '../assets/img/servicio4.png', "Es un proceso uno a uno en el que como facilitadora en Eneagrama te acompañaré a explorar el símbolo y sus interrelaciones para que descubras por vos mismo tu esencia. Como siempre digo, el autoconocimiento es un camino que transitamos toda vida. Este puede ser tu inicio, el momento donde tomes la punta del ovillo y comiences a desandar."));
servicios.push(new Servicio(4, "Workshop de eneagrama", 1, 1500, '../assets/img/servicio2.png', "En este curso vas a comenzar a explorar la sabiduría del Eneagrama y todo su potencial como herramienta de autoconocimiento: qué es, cuál es su origen, para que sirve, cómo podes utilizarlo en tu camino de evolución personal y profesional así como también para mejorar tu relación con vos mismo y tu entorno."));

for (const servicio of servicios) {
    $('#divDinamico').append(`<div class="container d-none d-sm-none d-md-block">
                                    <div class="row align-items-center m-5">
                                        <div class="col-lg-4 col-xs-12">
                                            <img src=${servicio.img} class="logoServicios img-fluid">
                                        </div>
                                        <div class="col-lg-8 col-xs-12">
                                            <div class="row"><h5>${servicio.name}</h5></div>
                                            <div class="row"><p>${servicio.descripcion}</p></div>
                                            <div class="row">
                                                <div class="col-auto pl-0"><button class="btn btn-outline-dark btn-compra" id="${servicio.id}">Agregar</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>`);
}
const carritoDeCompras = []

function comprarServicio(e) {
    e.preventDefault();
    const idServicio = e.target.id;
    const seleccionado = servicios.find(elemento => elemento.id == idServicio)
    carritoDeCompras.push(seleccionado);
    carritoUI(carritoDeCompras);
}

function carritoUI(servicios) {
    $("#carritoCantidad").html(servicios.length);
    $('#carrito').empty();
    for (const servicio of servicios) {
        $('#carrito').append(`<p> ${servicio.name} <span class="badge badge-warning">$${servicio.price}</span></p>`);   
    }
}



