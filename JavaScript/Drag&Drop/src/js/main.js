// alert('Funciona');

function miOndrag(event) {
    console.log('arrastrando el evento',event.target);
};
function miOnDragStart(event) {
    event.dataTransfer.setData('id',event.target.id);

    console.log('Drag start',event.target.id,' = ',event.dataTransfer.getData('id'));
}
function miOnDragEnter(event) {
   
    console.log('Drag enter');
}
function miOnDragLeave(event) {
    console.log('Drag leave');
}
function miOnDragOver(event) {
    event.preventDefault();
    // console.log('Drag over');
}
function miOnDrop(event) {
    event.preventDefault();
    var data=event.dataTransfer.getData('id');
    event.target.appendChild(document.getElementById(data));
    console.log('Drag drop',data);
}
function miOnDragDragEnd(event) {
    console.log('Drag end');
}

