Rutas.registrar('login', controladorLogin);

function controladorLogin(vistaLogin) {
  const formulario = $('#login');
  const mensajes = $('#mensajes');
  
  formulario.submit(loginUsuario);
  
  function loginUsuario() {
    const usuario = $('input', this).val();
    if (usuario !== '')  {
      $('button, input').attr('disabled', 'disabled');
      $('#spinner').css('display', 'inline-block');
      ServicioUsuarios.login(usuario);
    } else {
      mensajes.text('El nombre de usuario no puede estar vacío!');
    }
    return false;
  }

  $(ServicioUsuarios).on('exito', dibujarExito);

  function dibujarExito(evento, usuario) {
    console.log('exito', usuario);
    mensajes.html('Ingresando como <em>' + usuario.nombre + '</em>.')
    setTimeout(() => {Rutas.cargar('app')}, 3000);
  }

  $(ServicioUsuarios).on('fracaso', dibujarFracaso);

  function dibujarFracaso(evento, usuario) {
    mensajes.html('El usuario no existe, registrándolo...');
    ServicioUsuarios.registrar(usuario);
  }
}

Rutas.cargar('login');