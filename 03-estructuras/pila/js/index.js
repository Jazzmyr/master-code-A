'use strict'

class Pila{

    constructor(){
        this.pila = [];

    }

    push(dato){
        this.pila.push(dato);
    }
    
    pop(dato){
        this.pila.pop(dato)
    }

    print(){
        return this.pila
    }

    peek(){
        return this.pila[this.pila.length - 1];
    }

    size(){
        return this.pila.length
    }

}

const pila = new Pila();

pila.push('dato1');
pila.push('dato2');
pila.push('dato3');
console.log('print ', pila.print());
console.log('peek', pila.peek());
console.log('size', pila.size());

console.log('pop', pila.pop());

console.log(pila.print());
console.log(pila.peek());
console.log('size', pila.size());




