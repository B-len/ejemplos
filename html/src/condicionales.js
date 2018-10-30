// console.log('a');


//undefined -> false
//Numeros-> true excepto el 0
//string->true excepto string vacios
//objetos-> true siempre
//array ->true siempre
//null ->false siempre
// if(10<=resultado||5 === resultado){
//     console.log('Ha entrado el if');
// }
// else if (10>resultado)
// {
//     console.log('Ha entrado en el else if');
// }
//
// if(15 === resultado){
//     console.log('Resultado es 15');
// }
// else{
//     console.log('No ha entrado el if');
// }

//function->
var resultado=101;
if(10>resultado)
{
    console.log('El número es menor que 10');
}
else if(10<=resultado&&25>=resultado)
{
    console.log('El número es mayor que 10 y menor que 25');
}
else if(25<resultado&&100>=resultado){
    console.log('El número es mayor que 25 y menor que 100');
}
else{
    console.log('Es un else');
}