var texto;

texto = prompt('Ingrese una oración');

function palindromo(texto){

    var cadenaPrincipal = texto.toLowerCase().toUpperCase();

    var letrasEspacios = cadenaPrincipal.split('');

    var cadenaSinEspacios = '';
    for(i in letrasEspacio){
        if(letrasEspacios[i] != " "){
            cadenaSinEspacios += letrasEspacios[i];

        }
    }

    var letras = cadenaSinEspacios;
    var reverse = cadenaSinEspacios.split('').reverse('');

    var igual = 
}

    

//--------------------Pares o impares-------------------
function pares(){
    var num = Number(prompt('Ingressa un número'));
    if(num % 2 == 0)
    {
        alert(`${num} es un número par`);
    }
    else{
        alert('No es par');
    }
}

//pares();
