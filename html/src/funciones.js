//
// function suma(a,b) {
//
//     return a+b;
// }
// function cuadrado(number){
//         return number*number;
// }
// console.log(cuadrado(5));
//
// var resultado=cuadrado(10);
// console.log(resultado);
// var suma=function (a,b) {
//     console.log('argumentos',arguments[2]);
//     return a+b;
// }
//
// console.log(suma(2,5,100));
//
//
// function concat(separador) {
//     var result=" ";
//     for(var i=1;i<arguments.length;i++){
//         result+=arguments[i]+separador;
//     }
// return result;
// }
// console.log(concat('| ',2,'7','5'));
// alert('funciona');
//
//
// var input=prompt("Introduzca una cadena");
//
// // var inputCodificado=escape(input);
// // //1+5
// //
// // alert("cadena codificada  "+inputCodificado);
//
// var resultado=eval(input);
// alert(resultado);
//
//
// console.log(isFinite(0),isFinite(-1),isFinite(123123123));
// console.log(isFinite(Infinity),isFinite(-Infinity));
// console.log(isFinite(1e308),isFinite(1e309));//64 bits
//
// var url="https://localhost/mi -pagina!.html";
// var enc=encodeURI(url);
// var dec=decodeURI(url);
// console.log(enc,url,dec);
//
//
// var num=1.49;
// console.log(Math.round(num),Math.round(1.51));//mas cercano
// console.log(Math.ceil(num));//siguiente
// console.log(Math.floor(num));//el numero anterior





function una(f) {

    var e=parseFloat(Math.ceil(prompt("Dime un numero")));
    return e+f;
}
console.log(una(2));