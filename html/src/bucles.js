/**bucles while**/
// var contador=0;
//
// while(contador <10)
// {
//     console.log('Buble while /',contador);
//     contador ++;
// }


// var numero=4;
// var arr=[11,22,33];
// var res=arr[0]?arr[0]:numero;
// console.log(res, arr.length);
//
// var contador=0;
// while (contador<arr.length){
//     console.log('Bucle while',contador,arr[contador]);
//
//     //Vuestro codigo//
//
//     //Fin codigo//
//     contador++;
// }

/**Do while**/
// var contador=0;
//
// do{
//     console.log('Vez '+contador);
//     contador ++;
// }while(contador<10);


/**for**/
// for(i=0;i<10;i++)
// {
//     console.log('valor',i);
// }

// var numero=14;
// var arr=[11,22,33];
// for(i=0;i<arr.length;i++){
//     //Nuestro codigo para resolver el problema
//
// }



/**BUCLES FOR ANIDADOS**/
// var arr=[];
// for(i=0;i<3;i++){
//     //arr[i]=i+1;
//     arr[i]=[];
//     for(j=0;j<3;j++)
//     {
//         arr[i][j]=j+1;
//     }
//
// }
// console.log(arr);
// for (i=0;i<arr.length;i++)
// {
//     console.log('--------------');
//     var str="|";
//     for(j=0;j<arr[i].length;j++){
//         str+=' '+arr[i][j]+' |';
//     }
//     console.log(str);
//
//       if(i===arr.length-1){
//           console.log('--------------');
//       }
// }


/**Ejercicio clase**/
// var arr=[];
// var i=0;
//
// var cont=0;
// while(i<3){
//     arr[i]=[];
//     var j=0;
//     while(j<3)
//     {
//         arr[i][j]=j+1;
//         j++;
//     }
//     i++;
// }
// console.log(arr);
//
// var e=0;
// while(e<arr.length)
// {
//     console.log('--------------');
//     var str="|";
//     var f=0;
//     while(f<arr[e].length){
//         str+=' '+arr[e][f]+' |';
//         f++;
//     }
//     console.log(str);
//
//     if(e===arr.length-1){
//         console.log('--------------');
//     }
//     e++;
// }

/** For in**/
var obj={
    name:'ivan',
    job:'programmer'
}

for(var propiedad in obj)
{
 console.log(propiedad +':'+obj[propiedad]);
 console.log(obj[propiedad]);
}

/**For of**/
var arr=[11,22,33];
for (var valor of arr){
    console.log(valor);
}