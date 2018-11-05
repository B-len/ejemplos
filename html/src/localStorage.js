// window.sessionStorage.setItem('twitter','8asdf');
// localStorage.setItem('linkedin','belen-bravo');

// var linkedin=localStorage.getItem('linkedin');
// console.log(linkedin);

// console.log({"name":"belen", "job":1});
// var miObjetoSon=    '{"name":"Belén","job":1}';
//
// var obj={
//     'a':'a',
//     b:'b'
// };
//
// console.log(obj,JSON.stringify(obj));
// localStorage.setItem('persona',miObjetoSon);
// console.log(miObjetoSon);
//
// console.log(JSON.parse(miObjetoSon),miObjetoSon);


// var obj={
//     'a':'a',
//     b:'b'
// };
//
// console.log(obj);
// localStorage.setItem('prueba',JSON.stringify(obj));
// var res= JSON.parse(localStorage.getItem('prueba'));
// console.log(res.a);
//
//
//
// var objeto={
//     'hola':'a',
//     adios:'b'
// };
//
// console.log(objeto);
// localStorage.setItem('prueba2',JSON.stringify(objeto));
// var resultado= JSON.parse(localStorage.getItem('prueba2'));
// console.log(resultado.adios);
//
// localStorage.removeItem('prueba');
// localStorage.clear();



function nextInLine(arr,item) {
    var ar=0;
    var eliminado=0;
    if(arr.length>0) {
        eliminado=arr[0];
        for (var i = 1; i <= arr.length; i++) {
            arr[ar] = arr[i];
            ar++;
        }
        arr[arr.length - 1] = item;
       return eliminado;
    }
    else
    {
        arr[0]=item;
        return item;
    }

    // Change this line
}
// var testArr = [1,2,3,4,5];
// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6)); // Modify this line to test
// console.log("After: " + JSON.stringify(testArr));

// if(arr[0]=="undefined"||'null')
// {
//     arr[arr.length-1]=1;
//     return item;
// }
//
// else {


var dos=[2,3,4,5,6];
console.log("Before: " + JSON.stringify(dos));
console.log(nextInLine(dos,12));
console.log("After: " + JSON.stringify(dos));
console.log("---------------");
var tres=[];
console.log("Before: " + JSON.stringify(tres));
console.log(nextInLine(tres,12));
console.log("After: " + JSON.stringify(tres));