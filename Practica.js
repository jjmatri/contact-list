/* 📌 
1)Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido
 como una sola cadena de caracteres ok
2) Crea una función para añadir un nuevo contacto a una lista  ok
3) Crea una función para borrar un contacto existente de la lista  ok
4) Crea una función para imprimir en consola los contactos presentes en la lista ok
5) Publica tu código en Github, en tu repositorio contact-list crea un branch llamado
 project-1 y compártelo con nosotros.  
*/

/*const arreglo = ["jaime Salinas", "kely Pinto", "Iris Maria", "Yasmina Libreros"];
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

*/
let contactos = [
  {
    "id": 1,
    "nombres": "jaime jose",
    "apellido": "salinas libreros",
    "telefono": 3425365,
    "ubicacion": {
		"ciudad": 'pasto',
		"dirrecion": 'avenid 20'
	},
  },
  {
    "id": 2,
    "nombres": "yasmina isabel",
    "apellido": "salinas libreros",
    "telefono": 3425365,
    "ubicacion": {
		"ciudad": 'bogota',
		"dirrecion": 'circunvalar'
	},
  }
  ]
//imprimir el arreglo
  function imprimir() {

    for (let i = 0; i < contactos.length; i++) {
        console.log(contactos[i]);

    }

}

console.log(imprimir());



//agregamos otro objeto
let contacto = {
     "id": 3,
    "nombres": "natalia jose",
    "apellido": "salinas libreros",
    "telefono": 3425365,
    "ubicacion": {
		        "ciudad": 'medeliin',
		        "dirrecion": 'los sedro'
	}
}
contactos.push(contacto);

//console.log(carros);
imprimir();

//funcio actualizar
function actualizar(a,b,c,d,f) {

    const objetoubicacion={};
    
    contactos[a].nombres=b;  
    contactos[a].apellido=c;
    contactos[a].telefono=d;
    objetoubicacion.ciudad=f;
    contactos[a].ubicacion=objetoubicacion;
    console.log("Actualizamos ");
       
    }
    
    console.log(actualizar(2,"natalia judith","salinas",1234242,"monpos"));
    imprimir();
    


function borra(a) {

    for (const key in contactos){
        if(contactos[key].nombres === a) {
        //console.log('contacto ${carros[key].nombre} ${xxx[key].apellido} eliminado');
        console.log("eliminado "+contactos[key].nombres);
        
          contactos.splice(key,1);
        }
      //carros.pop();
      }

}

console.log(borra("yasmina isabel"));
console.log(imprimir());
