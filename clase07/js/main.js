document.addEventListener("DOMContentLoaded", function () {
    escuchaEventosHtml();
    eventoSubmit();
    crearHtml(pelicula);
});
const escuchaEventosHtml = () => {
    const btn1 = document.getElementById("boton1");
    const btn2 = document.getElementById("boton2");
    const btn3 = document.getElementById("boton3");
    const elementoPadre = document.getElementById("elementoPadre");
    elementoPadre.addEventListener("click", function (e) {
        console.log(e.target);
    });
    btn1.addEventListener("click", function () {
        InformacionPelicula(btn1.dataset.pelicula);
    });
    btn2.addEventListener("click", function (e) {
        console.log(e);
        console.log(btn2);
    });
    btn3.addEventListener("click", function () {
        console.log(btn3);
    });
    const enlace = document.getElementById("enlaceFacebook");
    enlace.addEventListener("click", function (e) {
        console.log(e);
        e.preventDefault();
        alert("No quiero");
    });
};

const InformacionPelicula = (titulo) => {
    const FormularioPelicula = document.getElementById("FormularioPelicula");
    FormularioPelicula.value = titulo;
    FormularioPelicula.disabled = true;
};

const eventoSubmit = (e) => {
    const submit = document.getElementById("FormularioSubmit");
    submit.addEventListener("click", function (e) {
        console.log(e);
        e.preventDefault();
        console.log("hola");
    });
};

