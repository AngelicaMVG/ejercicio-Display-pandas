var cerrar = document.getElementsByClassName('cerrar');

for(var i = 0; i < cerrar.length; i++){
  cerrar[i].addEventListener('click',quitarImagen);
};

function quitarImagen(){
  var padre = this.parentElement;
  padre.style.display = 'none';
}
