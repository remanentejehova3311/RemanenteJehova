// Escuchar clic en las imágenes
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('imagen-ampliable')) {
      const imagenAmpliada = document.getElementById('imagen-ampliada');
      const imagenAmpliadaSrc = e.target.src;
      const imagenAmpliadaImg = document.querySelector('#imagen-ampliada img');
  
      // Mostrar la versión ampliada
      imagenAmpliada.style.display = 'block';
      imagenAmpliadaImg.src = imagenAmpliadaSrc;
  
      // Cerrar la versión ampliada al hacer clic en ella
      imagenAmpliada.addEventListener('click', function () {
        imagenAmpliada.style.display = 'none';
      });
    }
  });
  
