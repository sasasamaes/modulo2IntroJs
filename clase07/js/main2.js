/* Se utiliza el windows.addEventListener para esperar a la carga del DOM (Body) y dentro de la funcion se mandan a llamar las funciones principales que se necesitan ejecutar*/
window.addEventListener("DOMContentLoaded", function () {
    crearHtml();
    const boleto = "";
    comprarBoletoModal();
    /* cerrarModal(); */
});
/* Funcion que permite utilizar una variable de tipo arreglo de objetos y returnarla para su posterior uso */
const cargarPelicula = () => {
    const pelicula = [
        {
            id: 1,
            titulo: "Pelicula 1",
            genero: "Accion",
            duracion: "1h",
            asientos: 5,
            disponible: true,
            precio: 100,
        },
        {
            id: 2,
            titulo: "Pelicula 2",
            genero: "Romantica",
            duracion: "1h",
            asientos: 10,
            disponible: true,
            precio: 50,
        },
        {
            id: 3,
            titulo: "Pelicula 3",
            genero: "Comedia",
            duracion: "1h",
            asientos: 0,
            disponible: false,
            precio: 25,
        },
    ];
    return pelicula;
};
/* Funcion que manda a llamar otra funcion CargarPelicula para obtener el arreglo de peliculas para posteriormente hacer un ciclo de estas y crear elementos con createElement y asignar a traves de template strings varios elementos html sin necesidad de utilizar varias veces createElement y appendchild */
const crearHtml = () => {
    const peliculas = cargarPelicula();
    const elementoPadre = document.getElementById("elementoPadre");
    /* Ciclo del arreglo de peliculas */
    peliculas.forEach((pelicula) => {
        const elementoHijo = document.createElement("div");
        elementoHijo.classList.add("col-4", "d-flex", "flex-column");
        elementoHijo.innerHTML = `
        <h3>${pelicula.titulo}</h3>
        <img src="https://via.placeholder.com/200" alt="">
        <p>Genero: ${pelicula.genero}</p>
        <p>Duracion: ${pelicula.duracion}</p>
        <p>Asientos: ${pelicula.asientos}</p>
        <p>Disponible: ${pelicula.disponible}</p>
        <p>Precio: ${pelicula.precio}</p>
        <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-primary" id="pelicula-${pelicula.id}" data-pelicula="${pelicula.titulo}">
            Comprar Boleto
        </button>
        `;
        elementoPadre.appendChild(elementoHijo);
    });
    /* Se ejecuta para activar la escucha de los eventos del elemento padre
     */
    escuchaEvento();
};

/* const escuchaEvento = () => {
    const elementoPadre = document.getElementById("elementoPadre");
    elementoPadre.addEventListener("click", function (e) {
        console.log(e.target);
        if (e.target.tagName === "BUTTON") {
            const button = e.target;
            const padre = button.parentElement;
            const pelicula = padre.children[0].innerHTML;
            const genero = padre.children[2].innerHTML;
            const duracion = padre.children[3].innerHTML;
            const asientos = padre.children[4].innerHTML;
            const disponible = padre.children[5].innerHTML;
            const precio = padre.children[6].innerHTML;
            console.log(pelicula);
            console.log(genero);
            console.log(duracion);
            console.log(asientos);
            console.log(disponible.split(" ")[1]);
            console.log(precio);
            const obj = {
                pelicula,
                genero,
                duracion,
                asientos,
                disponible: disponible.split(" ")[1],
                precio,
            };
            crearModal(obj);
        }
    });
}; */
const escuchaEvento = () => {
    const elementoPadre = document.getElementById("elementoPadre");
    elementoPadre.addEventListener("click", function (e) {
        console.log(e.target);
        /* Validamos al elemento que activo el click, en este caso usamos el boton para poder acceder al elemento padre y acceder a los elementos hermanos del boton */
        if (e.target.tagName === "BUTTON") {
            const button = e.target;
            const padre = button.parentElement;
            const obj = {
                pelicula: padre.children[0].innerHTML,
                genero: padre.children[2].innerHTML,
                duracion: padre.children[3].innerHTML,
                asientos: padre.children[4].innerHTML,
                disponible: padre.children[5].innerHTML.split(" ")[1],
                precio: padre.children[6].innerHTML,
            };
            crearModal(obj);
        }
    });
};

const crearModal = (obj) => {
    const modal = document.getElementById("modalBody");
    modal.innerHTML = '';
    const cuerpo = document.createElement("div");
    setBoletoAComprar(obj);
    cuerpo.innerHTML = `
        pelicula: ${obj.pelicula}
        <br>
        genero: ${obj.genero}
        <br>
        duracion: ${obj.duracion}
        <br>
        asientos: ${obj.asientos}
        <br>
        disponible: ${obj.disponible}
        <br>
        precio: ${obj.precio}`;
    modal.appendChild(cuerpo);
};
/* Para modificar el valor de la variable global */
const setBoletoAComprar = (obj) => {
    boleto = obj;
};
/* Para leer el valor de la variable global */
const getBoletoAComprar = () => {
    return boleto;
};
/* Se utiliza para escuchar el evento del modal y desarrollar la logica del programa para hacer la compra correspondiente */
const comprarBoletoModal = () => {
    const comprarBoleto = document.getElementById("comprarBoleto");
    comprarBoleto.addEventListener("click", function (e) {
        e.preventDefault();
        const FormularioPelicula =
            document.getElementById("FormularioPelicula");
        const FormularioMonto = document.getElementById("FormularioMonto");
        FormularioMonto.value = boleto.precio;
        const pelicula = (FormularioPelicula.value =
            getBoletoAComprar().pelicula);
    });
};
/* const cerrarModal = () => {
    const cerrar = document.getElementById("cerrarModal");
    cerrar.addEventListener("click", function () {
        setBoletoAComprar({});
        const pelicula = (FormularioPelicula.value = obj?.pelicula);
    });
}; */
const borrarHtml = () => {
    const elementoPadre = document.getElementById("elementoPadre");
    elementoPadre.innerHTML = "";
};
