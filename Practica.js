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
let carros = [
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
  
    for (let i = 0; i < carros.length; i++) {
      console.log(carros[i]);
  
    }
  
  }
  
  console.log(imprimir());
  
  
  
  //agregamos otro objeto
  let carro = {
    "id": 3,
    "nombres": "natalia jose",
    "apellido": "salinas libreros",
    "telefono": 3425365,
    "ubicacion": {
      "ciudad": 'medellin',
      "dirrecion": 'los sedro'
    }
  }
  carros.push(carro);
  
  //console.log(carros);
  imprimir();
  
  
  //funcio actualizar
  function actualizar(a,b,c,d,f) {
  
  const objetoubicacion={};
  
    carros[a].nombres=b;  
  carros[a].apellido=c;
  carros[a].telefono=d;
  objetoubicacion.ciudad=f;
  carros[a].ubicacion=objetoubicacion;
  console.log("Actualizamos ");
     
  }
  
  console.log(actualizar(2,"natalia judith","salinas",1234242,"monpos"));
  imprimir();
  
  //funcion borra
  function borra(a) {
    for (const key in carros){
      if(carros[key].nombres === a) {
      //console.log('contacto ${carros[key].nombre} ${xxx[key].apellido} eliminado');
      console.log("eliminado "+carros[key].nombres);
      
        carros.splice(key,1);
      }
    //carros.pop();
    }
  }
  
  console.log(borra("yasmina isabel"));
  imprimir();
  