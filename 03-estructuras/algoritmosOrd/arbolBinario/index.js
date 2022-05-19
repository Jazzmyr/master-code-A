'use strict'

class Nodo{
    constructor(value, left, right){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class ArbolBinario{
    constructor(){
        this.root = null;
    }
    insertar(value){
        //Construir un nodo nodo que se va a agregar al árbol
        const nuevoNodo = new Nodo(value, null, null);

        //this.root -> soy nulo :( Entonces ya no seas nulo :) aweno ya no
        if (!this.root) {
            this.root = nuevoNodo;
        }else{
            let nodoActual = this.root;
            let bandera = true;

            while(bandera){
                if (value === nodoActual.value) {
                    bandera = false;
                    return '';
                }

                if (value !== nodoActual.value) {
                    if(value < nodoActual.value){
                        if(nodoActual.left){
                            nodoActual = nodoActual.left;
                        }else{
                            nodoActual.left = nuevoNodo;
                            bandera = false;
                        }
                    }

                    if(value > nodoActual.value){
                        if(nodoActual.right){
                            nodoActual = nodoActual.right;
                        }else{
                            nodoActual.right = nuevoNodo;
                            bandera = false
                        }
                    }
                }
            }
        }

        console.log(this.root);
        return `El valor ${value} fue agregado exitosamente`
        
    }
    print(){
        console.log(this.root);
    }

    find(value){
        let actual = this. root;
        let encontrado = false;

        while(actual && !encontrado){
            if(value < actual.value){
                actual = actual.left;
            }else if (actual > actual.value){
                actual = actual.right;
            }else{
                encontrado = `El valor ${actual.value} fue encontrado`
            }
        }

        if(!encontrado)

        
    }
}

const arbolBinario = new ArbolBinario;

arbolBinario.insertar(50);
arbolBinario.insertar(75);
arbolBinario.insertar(25);
arbolBinario.insertar(85);
arbolBinario.insertar(23);
arbolBinario.insertar(95);
arbolBinario.print();
arbolBinario.find(50);



