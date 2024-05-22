const contenedorPrincipal = document.getElementById("contenedorPrincipal");
console.log(plantas);
const botonCarro = document.getElementById("botonCarro");
const carro = document.getElementById("carro");
const contenedorFiltro = document.getElementById("contenedorFiltro");


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarAlCarrito(id) {
    //se busca el producto y se compara
    const productoAgregar = plantas.find(el => el.id === id);

    if (carrito.some(element => element.id === productoAgregar.id)) {
       
    } else {
        carro.innerHTML = ""
        carrito.push(productoAgregar);
        // guardo el carrito en localstorage ,,, json stringify para guardarlo
        localStorage.setItem("carrito", JSON.stringify(carrito));
        carrito.forEach(el => crearCarta(el, "carro"));
    }
};

function eliminar(id) {
    carro.innerHTML = ""; // lo primero que hace es limpiar el carro 
    let nuevoCarrito = carrito.filter(el => el.id !== id);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    carrito = nuevoCarrito;
    carrito.forEach(el => crearCarta(el, "carro")); // aca renderiza de nuevo 
}

// esta funcion crea las cartas en DOM 
function crearCarta(plantas, contenedor) {

    const card = document.createElement("div");
    card.className = "card";

    const nombre = document.createElement("p");
    nombre.className = "nombre";
    nombre.innerText = plantas.nombre;

    const imagen = document.createElement("img");
    imagen.className = "imagen";
    imagen.src = plantas.imagen;

    const precio = document.createElement("p");
    precio.innerText = `$${plantas.precio}`;
    precio.className = "precio";

    const botonCompra = document.createElement("button");
    botonCompra.innerText = contenedor === "contenedorPrincipal" ? "Agregar" : "Eliminar";
    botonCompra.className = "botonAdd";
    if (contenedor === "contenedorPrincipal") {
        botonCompra.onclick = () => agregarAlCarrito(plantas.id);
    } else {
        botonCompra.onclick = () => eliminar(plantas.id);
    }

    card.appendChild(imagen);
    card.appendChild(nombre);
    card.appendChild(precio);
    card.appendChild(botonCompra);

    const contenedorAgregar = document.getElementById(contenedor)

    contenedorAgregar.appendChild(card);
}

// esto recorre el array del productos.js, es decir pasa uno por uno para crear la carta de arriba//
plantas.forEach(el => crearCarta(el, "contenedorPrincipal"));
carrito.forEach(el => crearCarta(el, "carro"));


let mostrar = false
// se crea el array carrito donde van a entrar los agregados 
const botonAbrirCerar = document.createElement("button");
botonAbrirCerar.innerText = "Carrito";
botonAbrirCerar.onclick = () => abrirCerrar(mostrar);
botonCarro.appendChild(botonAbrirCerar);


function abrirCerrar(estadoCarrito) {
    if (estadoCarrito) {
        mostrar = false;
        carro.innerHTML = ""
        botonAbrirCerar.innerText = "Abrir carrito"
    } else {
        carro.innerHTML = ""
        mostrar = true;
        carrito.forEach(el => crearCarta(el, "carro"));
        botonAbrirCerar.innerText = "Cerrar Carrito"
    }
};



// function filtro(categoria){
//     if (categoria === 1) {
//         const plantafiltro = plantas.slice(0, 5);
//         plantafiltro.forEach(el => crearCarta(el, "contenedor"));
//     } else if (categoria === 2) {
//         const plantas = plantas.slice(5, 8);
//         plantas.forEach(el => crearCarta(el, "contenedorPrincipal"));
//     } else if (categoria === 3) {
//         const plantas = plantas.slice(8, 10);
//         plantas.forEach(el => crearCarta(el, "contenedorPrincipal"));
//     };

// };
//  const btnC = document.createElement("button");
//  const btnF = document.createElement("button");
//  const btnA= document.createElement("button");

//  btnC.innerText = "Calathea";
//  btnF.innerText = "Floral";
//  btnA.innerText = "Aromatica";

//  btnC.onclick = () =>plantas(1);
//  btnF.onclick = () =>plantas(2);
//  btnA.onclick = () =>plantas(3);

// contenedorFiltro.appendChild(btnC);
// contenedorFiltro.appendChild(btnF);
// contenedorFiltro.appendChild(btnA);




