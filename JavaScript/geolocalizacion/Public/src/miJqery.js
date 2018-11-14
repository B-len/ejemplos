// $(document).on('ready',function () {
//     console.log('Hola Jquery');
// });

var element=$('.contenedor')[0];
$(element).on('click',function (e) {
    e.preventDefault();
    $(element).hasClass('red')?$(element).removeClass('red'):$(element).addClass('red');
    console.log('Contenedor pulsado');
    // $(e.target).hide();poner el cuadro desaparecido
    $(e.target).fadeOut(2000);
});

// $('#id')[0].empty();
// console.log(element);
