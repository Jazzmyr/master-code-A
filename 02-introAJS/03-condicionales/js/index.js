//variables
var nombreCompleto, añoNacimiento, añoActual, edad, cantidadCaracteres;

nombreCompleto = prompt('Ingresa tu nombre');
if (nombreCompleto == '' || typeof(nombreCompleto) == "number")
{
    alert('Necesitas escribir el dato faltante o no es del tipo correcto')
}
añoNacimiento = Number(prompt('Ingresa tu año de nacimiento'));
if (añoNacimiento == '' || typeof(añoNacimiento) != "number")
{
    alert('Necesitas escribir el año de nacimiento')
}
añoActual = Number(prompt('Ingresa tu año actual'));
if (añoActual == '')
{
    alert('Necesitas escribir el año actual')
}




//proceso lógico
if(nombreCompleto === '' || añoNacimiento === 0 || añoActual === 0 )
{
    msg = "Te faltaron datos, por favor ingrésalos todos"
}
else{
    edad = añoActual - añoNacimiento;

if (edad <= 12)
{
    msg = `Hola ${nombreCompleto} eres un niño`;
}
else if (edad > 12 && edad < 18)
{
    msg = `Hola ${nombreCompleto} eres un adulto`;
}
else if (edad >=18 < 65)
{
    msg = `Hola ${nombreCompleto} eres un adulto`;
}
else
{
    msg = `Hola ${nombreCompleto} eres un adulto mayor`
}






//Salida de datos
alert(msg);



