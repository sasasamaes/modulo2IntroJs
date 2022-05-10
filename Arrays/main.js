// Crear un arreglo vacio
let arregloVacio = [];

let frutas = ['pera', 'manzana', 'fresa', 'sandia', 'naranja', 'uva'];

let arregloMixto = ['tomate', 23,true,2.3,undefined,null];

// Como acceder a los valores de mis arreglos
// Acceder a un valor especifico de un arreglo con su posicion
let pera = frutas[0]

// Imprimiendo la lista de frutas
// console.log(frutas)

// Modificar un valor especifico de una posicion de un array de
frutas[2] = 'banana'


// let textVerdurasConComa = 'Cebolla@#Perejil@Tomate@Calabaza'

// let arraySubCadenas = textVerdurasConComa.split('@#')

// console.log('Aca estoy imprimiendo las subcadenas: ',arraySubCadenas)
//                 0          1          2          3            4       
let verduras = ['cebolla', 'perejil', 'tomate', 'calabaza', 'brocoli']

// const verdurasConst = ['cebolla', 'perejil', 'tomate', 'calabaza', 'brocoli']
// console.log('Array Original de Verduras: ', verdurasConst)

// let arrayNuevo = verduras.slice(1)

// console.log('Array Nuevo: ', arrayNuevo)

// let arrayNuevoConFinal = verduras.slice(1,3)

// console.log('Array Nuevo con Final: ', arrayNuevoConFinal)

// verduras.splice(1,2,'papa')

// console.log('Array Splice: ', verduras)

// verduras.sort()
// console.log('Verduras ordenadas: ', verduras)

let listaDeCompras = verduras.concat(frutas,arregloMixto)

console.log("Lista de compras: ", listaDeCompras)





