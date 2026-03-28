function enviarCorreo(event) {
  event.preventDefault();

  var nombre = document.getElementById("nombreapellido").value;
  var email = document.getElementById("correoelectronico").value;
  var mensaje = document.getElementById("mensaje").value;

  var templateParams = {
    name: nombre,
    email: email,
    message: mensaje
  };

  emailjs.send(
    'service_mdjb4ym',
    'template_y7k3mtg',
    templateParams,
    'X6coyORehjBw2m_Ex'
  )
  .then(function() {
    alert('Mensaje enviado con éxito. Gracias por contactarnos.');
    document.getElementById("nombreapellido").value = '';
    document.getElementById("correoelectronico").value = '';
    document.getElementById("mensaje").value = '';
  })
  .catch(function(error) {
    alert('Error al enviar el mensaje.');
    console.error(error);
  });
}
