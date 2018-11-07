

/*// var miArray=[];
// var miArray2=['adios','!'];
// var miArray3=[1,2,3];
// miArray.push(2);
//
// miArray.push('hola');
// console.log(miArray);
// var resJoin=miArray3.join('|');
// console.log("|"+resJoin);
// var resReverse=miArray3.reverse();
//
// var resConcat=miArray.concat(miArray2);
// console.log(resConcat);
// console.log(resReverse);
//
// var resUnsihft=miArray3.unshift('dos');
// console.log(miArray3);
// miArray3.shift();
// miArray3.pop();
// console.log(miArray3);

// var arr=[11,22,33,44,55,66,77,88,99];
//
// var e=arr.slice(0,0);
// console.log(e);

// var peliculas=["Superman","Superman3"];
// peliculas.splice(1,0,"Superman2");
// console.log(peliculas);

// var arr=[[1,2,3],[1,5,3],[1,7,3]];
// console.log("-------");
/
//
//
//
// var arr=['Ivan','Fran','Belen','Miguel'];
// arr.sort();
// console.log(arr);
//
// var ar2=[1,3,14,9,8];
// ar2.sort(function (a,b) {
//     return a-b;
// });
// console.log(ar2);



// var tablero=[
//     {col:0 ,row:0},{col: 0,row:1}, {col: 0,row:2},
//     {col: 1,row:0},{col:1 ,row:1},{col:1 ,row:2},
//     {col: 2,row:0},{col: 2,row:1},{col: 2,row:2}
// ];
//
// tablero.sort(function (a,b) {
//     return a.row-b.row||b.col-a.col;
//
// });
// console.log(tablero);

*/

/** map**/
// var numeros=[11,22,33,44];
//
// var res=numeros.map(function (num) {
//     return num*2;
// });
//
// console.log(numeros);
// console.log(res);

// var frutas=['manzanas','pera'];
//
// var resultado= frutas.map(function (num) {
//     return num+'s';
// })
// console.log(resultado);
//
// var res=frutas.filter(num =>num[num.length-1]=='s');
//  console.log(res);
//
//  var resultado=frutas.filter(function (fruta) {
//      return fruta[fruta.length-1]!='s';
//  })
// console.log(resultado);



 // var numero=[1,6,7,77,45];
 // var res=numero.filter(edad=>edad<40);
 // console.log(res);

// var numeros=[10,11,13];
// var res=numeros.reduce(function (valorAnterior,valorAcual,indice,array) {
//     console.log(valorAnterior,valorAcual,indice,array);
//     return valorAnterior+valorAcual;
// },1000);
// console.log(res);

// var puntuaciones=[
//         {nick:'Ivan',score:10},
//         {nick:'Pablo',score:'22'},
//         {nick:'Ivan',score:1},
//         {nick:'Pablo',score:'18'},
//         {nick:'Ivan',score:15}
//     ];
//
// var res=puntuaciones.map(function (partida) {
//     console.log(partida.score);
//     if(partida.score>=15)
//     {
//         partida.score=Math.ceil(partida.score*1.1);
//     }
//     return partida;
// });
//
// res=puntuaciones.filter(iv=>iv.nick=='Ivan');
//
// var r=res.map(function (s) {
//     return s.score;
// });
// console.log(r);
//
// r=r.reduce(function (a,b) {
//     return a+b;
// });
// console.log(res);
// console.log('Puntuación total de Iván:'+r);


/** .find()**/
var arr=[1,2,3,4,5,6,7];
var res=arr.find(function (element) {
    return element>3;
});
console.log(res);
