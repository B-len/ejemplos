// console.log(navigator);
// if ('geolocation' in navigator){
//     console.log('Existe geolocalización')
// }
// else console.log('No existe geolocalización');
//
// // navigator.geolocation.getCurrentPosition(function (posicion) {
// var watchID=navigator.geolocation.watchPosition(
//     function (posicion) {
//        console.log(posicion.coords.latitude+','+posicion.coords.longitude);
//     },function (error) {
//         console.log(error);
//     },{
//     enableHighAccuracy:true,
//     timeout:Infinity,//en milisegundos es el valor por defecto
//     maximumAge:0
//     }
// );


// function miFuncion(a,callback) {
//     if(a){
//         callback(a);
//     }
//     else callback(undefined,'No existe el valor a');
// }
// miFuncion(undefined,function (res ,err) {
//     if (err) throw new Error('No existe el valor a');
//
//     console.log('Res=>',res);
// });

// setTimeout(function () {
//     navigator.geolocation.clearWatch(watchID);
//     console.log('Se ha cancelado el web position')
// },1000);
//
// setInterval(function () {
//     console.log('interval');
//
// },1000);
//
//
// console.log('id =>',watchID);
