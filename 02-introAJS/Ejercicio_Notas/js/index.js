/*
Crera una aplicación que permita generar las otas definitivas de sus alumnos.

Debemos permitir al profesor que nos indique cuántos alumnos va a calificar
Debemos permitir al profesor ingresar la cantidad de notas a promediar.
Con esas notas vamos a obtener el promedio de cada estudiante
Mostrar al profesor al final una lista de estudiantes con su nombre y la definitiva

Necesitamos: 
- cantidad de alumnos
-cantidad de notas general
-nombre de los alumnos
-notas de alumnos

Procesos: 
- pedir cantidad de alumnos
- pedir la cantidad de notas con la que vamos a trabajar
- pedir nombre y notas del estudiante
- promediar por estudiante

Qué le vamos a mostrar al profe:
Mostrar nombres y calificación final

*/

//entradas y variables
var cantidadAlumnos, cantidadNotas, nombre, nota, promedio;
sumatoria = 0;
var alumno = [];
var resultados = [];

cantidadAlumnos = Number(prompt('Ingresa la cantidad de alumnos de tu clase: '));
cantidadNotas = Number(prompt('Ingresa la cantidad de notas a promediar de los alumnos: '));

//proceso logico
for(i = 0; i <= cantidadAlumnos; i++){
    nombre = prompt(`Ingresa el nombre del alumno ${i}: `);

    for(j=1;j<=cantidadNotas;j++){
        nota = Number(prompt(`Ingresa la nota ${j}: `))
        sumatoria = sumatoria + nota;
    }
    promedio = sumatoria / cantidadNotas;

    alumno = `Alumno: ${nombre} Calificación: ${Math.round(promedio)}`
    
    resultados.push(alumno);
   
}

function imprimeResultado(resultados)
{
    var lista = '';
    for(i = 0; i < resultados.length; i++ ){
        lista = lista + resultados[i] + "<br>";
    }

    return lista;
}


//impresión de resultados
var imprimir = imprimeResultado(resultados)
document.write(imprimir);


