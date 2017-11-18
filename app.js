// === Vista ===
const formulario = $('.login');

formulario.submit(loginUsuario);

function loginUsuario() {
  const usuario = $('input', this).val();
  usuarios.login(usuario);
  return false; // Esto le da la señal al DOM de que este evento no tiene que suceder, evito que se recargue la pagina
}

// === Controlador ===

$(usuarios).on('exito', dibujarExito);

function dibujarExito(evento, usuario) {
  console.log('exito', usuario);
}

$(usuarios).on('fracaso', dibujarFracaso);

function dibujarFracaso(evento, usuario) {
  console.log('El usuario no existe, registrándolo...');
  usuarios.registrar(usuario);
}