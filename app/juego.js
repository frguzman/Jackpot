Rutas.registrar('juego', controladorJuego);

let apuesta = 0;

function controladorJuego(vistaJuego){
    actualizarVistaDatos();

    const selectorVolver = $('#botonVolver');
    selectorVolver.click(irALogin);

    function actualizarVistaDatos(){
        const selectorNombreUsuario = $('#nombreUsuario', '#datosUsuario');
        const selectorSaldoUsuario = $('#saldoUsuario', '#datosUsuario');

        $(selectorNombreUsuario).text(ServicioUsuarios.nombre);
        $(selectorSaldoUsuario).text('$' + ServicioUsuarios.saldo + '.-');
    }

    $(ServicioUsuarios).on('saldoModificado', actualizarVistaDatos);

    function hacerApuesta(cantidad) {
        if (cantidad <= ServicioUsuarios.saldo){
            apuesta += cantidad;
            ServicioUsuarios.modificarSaldo(-cantidad);
        }
    }

    function cancelarApuesta() {
        ServicioUsuarios.modificarSaldo(apuesta);
        apuesta = 0;
    }

// ========== Botonera de apuesta
    let botones = $('.botonSumarApuesta');
    let cancelar = $('#botonCancelar');

    botones.each(element => {
        $(botones[element]).click(() => {
            hacerApuesta(parseInt($(botones[element])[0].innerText));
        });
    });

    cancelar.click(cancelarApuesta);

    function irALogin() {
        apuesta = 0;
        Rutas.cargar('login');
    }
}