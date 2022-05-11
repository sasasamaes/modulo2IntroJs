window.addEventListener("DOMContentLoaded", () => {
    crearHtml();
    escuchaEventoComprar();
});
const carritoCompras = {};

const llamadaApi = () => {
    const ProductosTienda = [
        {
            id: 1,
            nombre: "Suero de Leche",
            precio: 10,
            cantidad: 10,
            imagen: "https://via.placeholder.com/200",
            descripcion: "Suero de Leche",
            ml: 100,
        },
        {
            id: 2,
            nombre: "Suero de Almendra",
            precio: 15,
            cantidad: 5,
            imagen: "https://via.placeholder.com/200",
            descripcion: "Suero de Almendra",
            ml: 50,
        },
        {
            id: 3,
            nombre: "Suero de Coco",
            precio: 20,
            cantidad: 1,
            imagen: "https://via.placeholder.com/200",
            descripcion: "Suero de Coco",
            ml: 1000,
        },
        {
            id: 4,
            nombre: "Gaseosa de Coca Cola",
            precio: 30,
            cantidad: 40,
            imagen: "https://via.placeholder.com/200",
            descripcion: "Gaseosa de Coca Cola",
            ml: 3000,
        },
        {
            id: 5,
            nombre: "Pepsi",
            precio: 25,
            cantidad: 30,
            imagen: "https://via.placeholder.com/200",
            descripcion: "Pepsi",
            ml: 1500,
        },
    ];
    return ProductosTienda;
};

const crearHtml = () => {
    const elementoPadre = document.getElementById("ElementoPadre");
    const productos = llamadaApi();
    productos.forEach((producto) => {
        const elementoHijo = document.createElement("div");
        elementoHijo.classList.add("col-4", "d-flex", "flex-column", "card");
        /* elementoHijo.id = `elementoHijo`; */
        elementoHijo.innerHTML = `
        <h3 data-id="${producto.id}">${producto.nombre}</h3>
        <img height="200" src="${producto.imagen}" alt="">
        <p>Precio: ${producto.precio}</p>
        <p>Cantidad: ${producto.cantidad}</p>
        <p>Descripcion: ${producto.descripcion}</p>
        <p>Ml: ${producto.ml}</p>
        <div class="d-flex justify-content-center">
        <button id="BotonComprar" class="btn btn-primary mx-2" id="producto-${producto.id}">Comprar</button>
        <button class="btn btn-warning" id="producto-${producto.id}">Detalles</button>
        </div>
        `;
        elementoPadre.appendChild(elementoHijo);
    });
};

const escuchaEventoComprar = () => {
    const ElementoPadre = document.getElementById("ElementoPadre");
    ElementoPadre.addEventListener("click", (event) => {
        console.log(event.target);
        if (
            event.target.tagName === "BUTTON" &&
            event.target.classList.contains("btn-primary")
        ) {
            /* console.log(event);
            console.log(event.target.tagName); */
            const padre = event.target.parentElement.parentElement;
            console.log(padre);
            const obj = {
                id: padre.children[0].dataset.id,
                nombre: padre.children[0].innerHTML,
                precio: padre.children[2].innerHTML,
                cantidad: 1,
            };
            crearCarritoCompra(obj);
        }
    });
};

const crearCarritoCompra = (item) => {
    /* carritoCompras.hasOwnProperty(item.id) ? (carritoCompras[item.id].cantidad += 1) : (carritoCompras[item.id] = item); */
    
    /* Se valida si el objeto tiene la llave con el id del item obtenido a traves de los parametros, en caso de existir se modifica la cantidad de productos seleccionados y en caso de no existir se crea la llave con el id y el valor del objeto total  */
    if (carritoCompras.hasOwnProperty(item.id)) {
        carritoCompras[item.id].cantidad++
    } else {
        carritoCompras[item.id] = item;
        carritoCompras[item.id].cantidad = 1;
    }
    console.log(carritoCompras);
    const tablaProductos = document.getElementById("tablaProductos");
    tablaProductos.innerHTML = "";
    for (const key in carritoCompras) {
        const elementoHijo = document.createElement("tr");
        elementoHijo.innerHTML = `
        <td>${carritoCompras[key].nombre}</td>
        <td>${carritoCompras[key].precio}</td>
        <td>${carritoCompras[key].cantidad}</td>
        `;
        tablaProductos.appendChild(elementoHijo);
    }
};
