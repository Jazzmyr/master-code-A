//variables y entradas
var numero;
var sumatoria = 0;
//var aux = 0

//logica
do{
    numero = Number(prompt('Ingresa un número para continuar o nada para terminar'));

    if(numero > 0)
    {
        sumatoria = sumatoria + numero;
    }

}while(numero > 0)


//salida
alert(`La sumatoria de los numeros es ${sumatoria}`)