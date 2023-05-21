/* 📌 
1)Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido
 como una sola cadena de caracteres ok
2) Crea una función para añadir un nuevo contacto a una lista  ok
3) Crea una función para borrar un contacto existente de la lista  ok
4) Crea una función para imprimir en consola los contactos presentes en la lista ok
5) Publica tu código en Github, en tu repositorio contact-list crea un branch llamado
 project-1 y compártelo con nosotros.  
*/

const arreglo = ["jaime Salinas", "kely Pinto", "Iris Maria", "Yasmina Libreros"];
console.log(arreglo);

let a, b;
function agregar(a) {

    arreglo.push(a);
    //arreglo.push(b);
}

console.log(agregar("Karen Perez"));

console.log(arreglo);
//
let pos=0;
function borra() {

    //arreglo.pop();
    arreglo.splice(pos, 1);

}

console.log(borra());
console.log(arreglo);


//imprimir
function imprimir() {

    for (let i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i]);

    }

}

console.log(imprimir());

