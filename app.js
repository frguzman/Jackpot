// === Vista ===
const formulario = $('.login');

formulario.submit(loginUsuario);

function loginUsuario() {
  const usuario = $('input', this).val();
  ServicioUsuarios.login(usuario);
  return false; // Esto le da la señal al DOM de que este evento no tiene que suceder, evito que se recargue la pagina
}

// === Controlador ===

$(ServicioUsuarios).on('exito', dibujarExito);

function dibujarExito(evento, usuario) {
  console.log('exito', usuario);
}

$(ServicioUsuarios).on('fracaso', dibujarFracaso);

function dibujarFracaso(evento, usuario) {
  console.log('El usuario no existe, registrándolo...');
  ServicioUsuarios.registrar(usuario);
}