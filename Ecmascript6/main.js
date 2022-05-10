// function master(programa, ...senseis) {
//   // console.log("Bienvenido al " + programa);

//   console.log(`Bienvinido al: ${programa}`)

//   // console.log('Los senseis son: ' + senseis)

//   console.log(`Los senseis son: 
//   ${senseis}`)
// }

// master('Master en Coding','Alejandro','Francisco','Raul','Roberto','Juan')

// let texto = '🤡'
// console.log("El texto con emojis: " + texto)


// let numbers = [1,2,3,4,5,6,7,8,9,10]
// let [x,y,...z] = numbers

// console.log('x,y,z',x,y,z)
// function sum (x,y,z) {
//   return x + y + z;
// }

// let numbers = [1,2,3]
// console.log(sum(...numbers))

// Sintaxis de Class Es6
// class Persona {
//   constructor (nombre, apellido, edad) {
//     this.nombre = nombre
//     this.apellido = apellido
//     this.edad = edad
//   }
// }

// Funciones de flecha

// const funcionFlecha = () => {
//   console.log("Funcion de flecha")
// }
// Funcion de flecha de una linea
// const funciondeFlecha2 = () => console.log("Funcion de flecha")


// function sinFlecha(){
//   console.log("Funcion sin flecha")
// }

// const sinFlecha2 = function(){
//   console.log("Funcion sin flecha")
// }

// // Destructuring
// const persona = {
//   nombre: 'Alejandro',
//   apellido: 'Gonzalez',
//   edad: '23',
//   tel: '12123123',
//   altura: '1.70',
//   sexo: 'masculino',
//   nacionalidad: 'Mx'
// }

// let {tel,nombre} = persona

// console.log(persona.tel, nombre)

// function x (...args) {
//   return //se enviaron 3 params
// }


// x(1,2,44)



// const frutas = [
//   "Manzana",
//   "Uva",
//   "Fresa",
//   "Papaya",
//   "Durazno"
// ];


// const [,,,cuartaFruta] = frutas

// console.log(cuartaFruta)


// 1) Utilizando arrow function, plantillas de texto y desestructuración de objetos, crea una función llamada reproducirPelicula que reciba como argumento un objeto pelicula que contenga las propiedades titulo y director. Al ejecutar la función, debe mostrarse en consola un mensaje como el siguiente:
//“Reproduciendo Matrix , dirigida por las hermanas Wachowski”

// const pelicula = {
//   titulo: 'Titanic',
//   director: 'James Cameron',
// };

// const reproducirPelicula = (pelicula) => {
//   const { titulo, director } = pelicula
//   console.log(`Reproduciendo ${titulo}, dirigida por ${director}`)
// }

// reproducirPelicula(pelicula)



// 2) Utilizando arrow function, plantillas de texto y desestructuración de arreglos, crea una función llamada obtenerTerceraFruta que reciba como argumento un arreglo frutas que contenga los nombres de al menos cinco frutas distintas, como string. Al ejecutar la función, debe mostrarse en consola un mensaje como el siguiente:
//“La tercera fruta del arreglo es: Papaya”

const frutas2 = [
  'Manzana',
  'Uva',
  'Fresa',
  'Papaya',
  'Durazno'
];

const obtenerTerceraFruta = (arreglo) => {
  const [,,,terceraFruta] = arreglo

  return `La tercera fruta del arreglo es: ${terceraFruta}`
  

}
let resultado = obtenerTerceraFruta(frutas2)

console.log(resultado)