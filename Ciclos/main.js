
// Ejercicio 1
// let index = 0;

// while (index < 11) {
//   console.log(index) //1
//   index = index + 1;
//   //index = 1
// }

// Ejercicio 2
// Inicializamos variables
// let arreglo = [];
// let userInput;

// while (!(userInput == '')) {
  // Pedimos informacion al usuario
  // userInput = prompt("Ingresar cualquier caracter");
  // Agregamos la informacion que nos suministra el usuario y lo guardamos en un arreglo o lista
  // arreglo.push(userInput);
// }
// Imprimir
// console.log("Introduciste estos valores: " + arreglo)

// Do While

// let contador = 0;

// do {
//   contador++
//   console.log('Conteo: ' + contador)
// } while (contador < 11)

// Contador

let contadorDeNumeroPares = 0

for (let i = 1; i <= 10; i++){
  if (i % 2 == 0){
    contadorDeNumeroPares++
    console.log(i + " es par")
  }
}

console.log('Del 0 al 10 hay ' + contadorDeNumeroPares + ' numeros pares')


