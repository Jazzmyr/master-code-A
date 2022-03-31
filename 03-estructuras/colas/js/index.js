'use strict'

class Queue{
    
    constructor(){
        this.queue = [];
    }

    print(){
        return this.queue;
    }
 
    empty(){
        if(this.queue.length === 0){
            return true;
        } else {
            return false;
        }
    }

    enqueue(dato){
        this.queue.push(dato);
    }

    dequeue(){
        let eliminado = this.queue.shift();
        return eliminado;
    }

    peek(){
        return this.queue[0];
    }

    back(){
        return this.queue[this.queue.length -1];
    }

    

}


queue.enqueue('abr');



