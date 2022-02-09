let txtNombre, añoNac, edad, añoActual;

function capturaNombre()
{
    txtNombre = document.getElementById('nombre')
    
    alert(`Tu nombre es ${txtNombre.value}`)
}

function calcularEdad()
{
    let fecha = new Date();
    añoNac = Number(document.getElementById('fecha').value.slice(0,4));
    añoActual = fecha.getFullYear();   

    if(añoActual < añoNac)
    {
        alert('Elige un año de nacimiento válido')
    }
    else
    {
        edad = añoActual - añoNac;

        document.getElementById('edad').innerText = `Tu edad es ${edad}`
    }

}

document.getElementById('calcular').addEventListener('click', calcularEdad);

function cambiarColorAzul()
{
    if(document.getElementById('cuerpo').style.backgroundColor = '#b2dfdb')
    {
        document.getElementById('cuerpo').style.backgroundColor = '#90caf9'
    }
}


function cambiarColorVerde()
{
    if(document.getElementById('cuerpo').style.backgroundColor = '#90caf9' )
    {
        document.getElementById('cuerpo').style.backgroundColor = '#b2dfdb';
    }
    else(document.getElementById('cuerpo').style.backgroundColor = '#b2dfdb' )
    {
        cambiarColorAzul();
    }
}


