// var miArray=[];
//
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
// arr.forEach(function (num, index,array) {
//
//         var e=array[index].join("|");
//         console.log("|"+e+"|");
//         console.log("-------");
// })
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



var tablero=[
    {col:0 ,row:0},{col: 0,row:1}, {col: 0,row:2},
    {col: 1,row:0},{col:1 ,row:1},{col:1 ,row:2},
    {col: 2,row:0},{col: 2,row:1},{col: 2,row:2}
];

tablero.sort(function (a,b) {
    return a.row-b.row||b.col-a.col;

});
console.log(tablero);