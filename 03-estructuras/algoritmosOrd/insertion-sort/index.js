'use strict'

const insertionSort = numeros =>{
    for (let i = 0; i < numeros.length; i++) {
        
        let j = i;
        while(j > 1 && numeros[j] < numeros[j-1]){
            numeros[j-1], numeros[j] = numeros[j], numeros[j-1]
            j--
        }
    }
    return numeros
}

console.log(insertionSort([3,0,1,9,8,5,7,4,2,6,6,7]))