'use strict'

const arregloPrimero = [{
    nombre: 'Alan',
    lugarNaclimiento: [{
        Pais: '',
        Ciudad: '',
    }]
}, {
    nombre: 'Enrique',
    apellido: 'Maya',
    lugarNaclimiento: [{
        Pais: '',
        Ciudad: '',
    }]
}, {
    nombre: 'Ariadne',
    lugarNaclimiento: [{
        Pais: '',
        Ciudad: '',
    }]
}, {
    nombre: 'Beatriz',
    lugarNaclimiento: [{
        Pais: '',
        Ciudad: '',
    }]
}]


const arregloBasico = [1,2,3, 5, 7, 1, 5, 7];


//aregglarlo de forma descendente
console.log(arregloBasico.sort((a,b) =>{
    return b-a;
}));


const filtrado1 = arregloBasico.filter(arreglo => arreglo ===5);
const filtrado2 = arregloBasico.find(arreglo => arreglo === 5);

console.log(filtrado1)
console.log(filtrado2)

//map
const filtrado = arregloBasico.map(arreglo => arreglo)
console.log(filtrado)

//manejo de memoria con arreglos
let arreglo = [1,2,3,4,5];
let arreglo1 = arreglo.map(arr => arr);

arreglo[0] = 6;
arreglo1[1] = 7;

console.log(arreglo);
console.log(arreglo1)



const arregloa = [{dato: 1}, {dato:2}, {dato:3}];
const arreglob = arregloa.map(arr => ({...arr}));

//Lo de arriba nos lo asigna a un nuevo espacio de memoria

arregloa[0].dato = 6;
arreglob[1].dato = 7;

console.log('arregloa ', arregloa);
console.log('arreglob ', arreglob);
