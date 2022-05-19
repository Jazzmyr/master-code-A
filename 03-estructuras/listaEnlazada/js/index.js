'use strict'

//Creamos los nodos

class Node{
    constructor(data, next){
        this.data = data;
        this.next = next;
    }
}

//Implementamos una lista enlazada
class LinkedList{
    constructor(){
        this.head = null;
    }
    insertar(value){
        const node = new Node(value, this.head);
        this.head = node;
        console.log('Lista', this.head);
        
    }

    eliminar(){
        if(this.head){
            if(this.head.next){
                const nodos = this.head.next;
                this.head = nodos;
            }else{
                this.head = null;
            }
        }
        console.log(this.head);
    }

    recorrer(){
        let listaEnlazada = this.head;
        while(listaEnlazada){
            console.log(listaEnlazada);
            listaEnlazada = listaEnlazada.next;
        }
    }

    buscar(valor){
        if(!this.head){
            return null;
        }
        let listaEnlazada = this.head;
        let contador = 0;
        while(listaEnlazada){
            contador++;
            if(listaEnlazada.value == valor){
                return `El valor ${listaEnlazada.valor} sí fue encontrado en la vuelta ${contador}`;
            }
            listaEnlazada = listaEnlazada.next;
        }
        return `El valor ${valor} no fue encontrado`

    }
}




//Instanciar nuestra lista

const linkedList = new LinkedList();

linkedList.insertar('3');
linkedList.insertar('12');
linkedList.insertar('10');
console.log(linkedList.buscar('10'));
linkedList.recorrer();

console.log('**********************')



