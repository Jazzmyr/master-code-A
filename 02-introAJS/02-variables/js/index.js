//1. Datos de entrada que necesito
var nombre, apellido, añoNacimiento, añoActual;
/*var nombre
var apellido
var añoNacimiento
var añoActual */
nombre = prompt('Ingresa tu Nombre');
apellido = prompt('Ingresa tu Apellido');
añoNacimiento = Number(prompt('Ingresa tu año de nacimiento'));
añoActual = Number(prompt('Ingresa tu año actual'));

//2. Qué tengo que hacer con los datos
edad = añoActual - añoNacimiento;
mitad = añoNacimiento / añoActual

//3. Cómo y que tengo que mostrar al usuario
document.write("Hola ${nombre} ${apeliido}, tu edad es: ${edad}, la división arroja ${mitad}");