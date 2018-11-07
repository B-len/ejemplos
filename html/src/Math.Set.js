

/** .MAP **///No tiene usos comunes
// var miMap=new Map();
//
// var obj={name:'Ivan'};
// var funcion=function () {
//     return 'Funciona!';
//          };

// var numero=10;
//
// miMap.set(obj,funcion);
// miMap.set(numero,function (){return 'numero'});
// console.log(miMap.get(obj)());
// console.log(miMap);

// miMap.forEach(function(valor, cla,i){console.log('foreach->',valor,cla,i+"|")});

// miMap.delete(numero);
// console.log(miMap);

// console.log(miMap.has(obj));
// console.log(miMap.has(numero));
// miMap.clear();
// console.log(miMap);

// Map.prototype.has()   ->También se puede hacer

/** set**/
var miSet=new Set();

var a=2;
var b=3;

miSet.add(a);
miSet.add(a);
miSet.add(b);

console.log(miSet);
console.log(miSet.has(a),miSet.has(5));
console.log(miSet.size);
console.log(miSet.values());


//**Tambien puede funcinar así**//
//
// var valores=miSet.values();
//
// console.log(valores.next());
// console.log(valores.next());
// console.log(valores.next());

// var valor;
// do {
//     valor=valores.next();
//     console.log(valor);
// }
// while (!valor.done)


