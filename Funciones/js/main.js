/* Formas de definir una funcion */

/* function saludar() {
    console.log("Hola");
}
saludar(); */

/* const saludar2 = function() {
    console.log("Hola 2");
}

saludar2(); */

/* const saludar3 = () => {
    console.log("Hola 3");
}
saludar3();

const saludar9 = () => console.log("Hola 3");
saludar9(); */


/* Funciones que reciben un parametro */

/* function saludar4(nombre) {
    console.log("Hola " + nombre);
}
saludar4("alejandro"); */
/* const suma = function(numero1 = 4, numero2 = 3) {
    const resultado = numero1 + numero2;
    return `el resultado es ${resultado}`
}
const respuesta = suma(1);
console.log(respuesta);
const saludar6 = (nombre) => {
    console.log("Hola " + nombre);
} */

/* function ObtenerMarcador(){
    var partido1 = 3;
    var partido2 = 3;
    return Agregar(partido1, partido2);
}

function Agregar(partido1, partido2){
    var nombre = 'alejandro';
    return nombre + " anoto " + (partido1 + partido2) + " goles";
}

const respuesta = ObtenerMarcador();
console.log(respuesta); */



/* function MayorEdad() {
    var edad = 19;
    var nombre = 'alejandro';
    if (edad >= 18) {
        return nombre + " es mayor de edad";
    } else if(edad < 18) {
        return nombre + " es menor de edad";
    }
}
const respuesta = MayorEdad();
console.log(respuesta);
console.log(edad); */

/* function miFuncion(){
    const unaVariable = "un poco de texto";
    
    return otraFuncion(unaVariable);
}
function otraFuncion(unaVariable){
    const modificoVariable = unaVariable + " y un poco mas";
    return modificoVariable;
}
console.log(miFuncion()); 
/* Objetos */
const objeto = {}
const persona = {
    nombre: "alejandro",
    apellido: "Perez",
    edad: 30,
    saludar: function() {
        console.log("Hola " + this.nombre);
    }
}

/* console.log(persona['nombre']);
console.log(persona.edad);

const {edad, nombre } = persona;
const {edad: edadNueva, nombre: nombreOtraForma } = persona;

console.log('desde la variable nombre: ' + nombreOtraForma);
console.log('desde la variable edad: ' + edadNueva); */
const {nombre, apellido, edad} = persona;
console.log(`mi nombre es ${persona.nombre} ${persona.apellido} y tengo ${persona.edad} años`);
console.log(`mi nombre es ${nombre} ${apellido} y tengo ${edad} años`);
