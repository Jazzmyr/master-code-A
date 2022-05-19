'use strict'

const numeros =[0,14,67,4,2,1];

//Hacemos una copia
const selectionSort = numeros =>{
    const arr2 = numeros.slice()

    //Sacamos su longitud
    const total = numeros.length;
    
    //Recorrer el arreglo completo
    for (let i = 0; i < total; i++) {
        //Almaceno la posición mínima
        let indiceMinimo = i
        for (let j = i+1; j < total; j++) {
            //Identifico la posición del número más pqueño
            if(arr2[j] < arr2[i]){
                indiceMinimo = j

            }
            
        }

        //Cambiando nuestro prunto de referrencia
        const temp = arr2[indiceMinimo]
        arr2[indiceMinimo] = arr2[i]
        arr2[i] = temp
        
    }
    return arr2
}

console.log(selectionSort(numeros));