/*let carro ={
    llantas: 4,
    color: 'rojo',
    puertas: 5,
    usaGasolina: true,   

};

console.log(carro.color);
console.log(carro.puertas);

console.log(carro['usaGasolina']);
console.log(carro['puertas']);
*/

let perro = {
    nombre: 'Canelo',
    color: 'Cafe',
    edad: 3,
    raza: 'pug',
    ladrar: function(){
        return(`${this.nombre} ladra`)
    },
    comer: function(){
        console.log('yomi yomi')
    }
}

console.log(perro.ladrar())
console.log(perro.comer())


//añadir valores
perro.tamaño = 'grande';

console.log(perro)

//modificar valores
perro.edad = 5;

//eliminar un valor
delete perro.raza;

//destructuracion

const animales =['conejo', 'gato', 'perro', 'rana'];
const [animal1, animal2, animal3, animal4] = animales;

console.log(`Mi primer mascota fue: ${animal1}, la segunda: ${animal2}, tercera: ${animal3}, cuarta: ${animal4}`)


//--desestructura lo que necesites--

const nombres = ['Zanahoria', 'Mei', 'Taco', 'Rene']

const [nombre0, , nombre2]=nombres;

console.log(`Mis mascotas son: ${nombre0} y ${nombre2}`)


//Uso del operador rest
const empleado = ['Emilio', 24, 'Puebla', 'Desarrollador'];

const [nombre, edad, ...rest] = empleado;

console.info(`${nombre} tiene ${edad}`);
console.log(`los datos completos son: ${rest}`)


