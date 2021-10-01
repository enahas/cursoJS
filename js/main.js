class Servicio {
    constructor(id, nombre, meses, precioContado, img, descripcion) {
        this.id = id;
        this.name = nombre;
        this.time = meses;
        this.price = precioContado;
        this.img = img;
        this.descripcion=descripcion;
    }
}
const servicios = [];
servicios.push(new Servicio(1, "Coaching ontológico: sesión personal", 6, 5000, '../assets/img/servicio1.jpg', "En este camino, yo te acompañaré con distintas herramientas y técnicas, siendo la más importante la pregunta, para instarte a reflexionar y que puedas descubrir fortalezas, debilidades y oportunidades encontrando por vos mismo la/s respuesta/s que te permitan transitar de tu situación actual a la situación deseada, aquella en que tu objetivo o meta se encuentra cumplido."));
servicios.push(new Servicio(2, "Mentoría de propósito para jóvenes", 1, 1000, '../assets/img/servicio3.jpg', "La Mentoría de Propósito para Jóvenes está compuesta de seis (6) encuentros de dos (2) horas máximo cada uno, con una duración total de un (1) mes."));
servicios.push(new Servicio(3, "Sesión de lectura de mapa personal de eneagrama", 5, 3500, '../assets/img/servicio4.png', "Es un proceso uno a uno en el que como facilitadora en Eneagrama te acompañaré a explorar el símbolo y sus interrelaciones para que descubras por vos mismo tu esencia. Como siempre digo, el autoconocimiento es un camino que transitamos toda vida. Este puede ser tu inicio, el momento donde tomes la punta del ovillo y comiences a desandar."));
servicios.push(new Servicio(4, "Workshop de eneagrama", 1, 1500, '../assets/img/servicio2.png', "En este curso vas a comenzar a explorar la sabiduría del Eneagrama y todo su potencial como herramienta de autoconocimiento: qué es, cuál es su origen, para que sirve, cómo podes utilizarlo en tu camino de evolución personal y profesional así como también para mejorar tu relación con vos mismo y tu entorno."));

for (const servicio of servicios) {
    let contenedorProductos = document.getElementById('divDinamico')
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<div class="container d-none d-sm-none d-md-block">
                                <div class="row align-items-center m-5">
                                    <div class="col-lg-4 col-xs-12">
                                        <img src=${servicio.img} class="logoServicios img-fluid">
                                    </div>
                                    <div class="col-lg-8 col-xs-12">
                                        <div class="row"><h5>${servicio.name}</h5></div>
                                        <div class="row"><p>${servicio.descripcion}</p></div>
                                        <div class="row">
                                            <div class="col-auto pl-0"><button class="btn btn-outline-dark" id="${servicio.id}">Agregar</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
    contenedorProductos.appendChild(contenedor);
}
const carritoDeCompras = []

let botones = document.getElementsByClassName("btn");
for (const boton of botones) {
    boton.addEventListener("click", function(){
        let servicioAgregar = servicios.find(elemento => elemento.id == this.id);
        carritoDeCompras.push(servicioAgregar);
        let contenedorCarrito = document.getElementById('carrito')
        let contenedor2 = document.createElement("div");
        contenedor2.innerHTML += `<h3> ID: ${servicioAgregar.id}</h3>
                                  <p>  El servicio que adquiriste es: ${servicioAgregar.name}</p>
                                  <p> La duración del programa es: ${servicioAgregar.time} mes</p>
                                  <p> El precio es: ${servicioAgregar.price}</p>`;
        contenedorCarrito.appendChild(contenedor2);
    });
}

class Cliente {
    constructor(apellido, nombre, email, servicio) {
        this.apellido = apellido;
        this.nombre = nombre;
        this.email = email;
        this.servicio = servicio;
    }
}
const clientes = [];


const divClientes = document.getElementById('divClientes');
function clientesHTML(clientes) {
    for (const cliente of clientes) {
        let contenedorClientes = document.createElement("div");
        contenedorClientes.innerHTML = `<h5> Apellido: ${cliente.apellido} - Nombre: ${cliente.nombre} - Email de contacto: ${cliente.email} - Servicio que le interesa: ${cliente.servicio}</h5>`;
        divClientes.appendChild(contenedorClientes);
        
    }
}

let formulario = document.getElementById('elijoServicioForm');
formulario.onsubmit=(event) => {
    event.preventDefault();
    let hijos = formulario.children;
    clientes.push(new Cliente(hijos[0].value, hijos[1].value, hijos[2].value, hijos[4].children[0].value));
    divClientes.innerHTML = "";
    clientesHTML(clientes);
    localStorage.setItem('clientes', JSON.stringify(clientes));
    let clientesStorage = JSON.parse(localStorage.getItem('clientes'));    
    console.log(clientesStorage);
}


  
