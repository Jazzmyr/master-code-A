/*
Desafío: 
1. Solicitar los nombres de los nombres completos de los miembros de la familia separados por (,)
2. Convertir esos nombres a un array de nombres y mostrarlo en consola
3. Combinar los dos arrays y el de los otros miembros en un solo array
4. Agregar las validaciones paq no se rompa

*/ 

//variables y entradas
/*var nombre, apellido1, apellido2;
var arrayNombre = []; //inicializo arreglo vacio

nombre = prompt('Ingresa tu nombre');
apellido1 = prompt('Ingresa tu primer apellido');
apellido2 = prompt('Ingresa tu segundo apellido');

//lógica
arrayNombre.push(nombre);
arrayNombre.push(apellido1);
arrayNombre.push(apellido2);

nombreCompleto = `Tu nombre es: ${arrayNombre[0]} ${arrayNombre[1]} ${arrayNombre[2]}`;




//salida
console.log(arrayNombre);
alert(nombreCompleto);


var nombre, apellido1, apellido2;*/

//variables y entradas
var nombre1, nombre2,nombre3, arrayNombre1, arrayNombre2, arrayNombre3;

var arrayNombres = [];

nombre1 = prompt('Dime el nombre completo de la primera persona separado por comas: ');

nombre2 = prompt('Dime el nombre completo de la segunda persona: ');

nombre3 = prompt('Dime el nombre completo de la tercera persona: ');



//lógica
arrayNombre1 = nombre1.split(',')
arrayNombre2 = nombre2.split(',')
arrayNombre3 = nombre3.split(',')

arrayNombres.concat(arrayNombre1, arrayNombre2, arrayNombre3)

miembros = `los miembros son ${arrayNombres}`


//salida
alert(miembros)
