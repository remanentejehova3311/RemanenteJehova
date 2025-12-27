function enviarCorreo() {
  var nombre = document.getElementById("nombreapellido").value;
  var email = document.getElementById("correoelectronico").value;
  var mensaje = document.getElementById("mensaje").value;

  // Realizar validación de campos aquí si es necesario

  // Crear un objeto para enviar los datos al servidor
  var datos = {
    nombre: nombre,
    email: email,
    mensaje: mensaje,
  };

  // Realizar una solicitud AJAX a tu servidor Python
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:5000/enviar-correo", true); // Ajusta la URL según sea necesario
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  xhr.onload = function () {
    if (xhr.status === 200) {
      alert("Correo enviado con éxito");
      // Puedes redirigir al usuario a una página de confirmación u otras acciones aquí
    } else {
      alert("Error al enviar el correo");
    }
  };

  xhr.onerror = function () {
    alert("Error de conexión al servidor");
  };

  xhr.send(JSON.stringify(datos));
}
