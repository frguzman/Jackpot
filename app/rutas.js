const Rutas = {
    contenedor: $('#app'),
    
    listadoDeRutas: {
        'error': function() {}
    },
    registrar: function(nombreRuta, controlador) {
        Rutas.listadoDeRutas[nombreRuta] = controlador;
    },
    cargar: function(nombreRuta) {
        if(!Rutas.listadoDeRutas[nombreRuta]) {
            Rutas.cargar('error');
            return;
        }
        Rutas.cargarPantalla(nombreRuta, Rutas.listadoDeRutas[nombreRuta], Rutas.contenedor);
    },
    cargarPantalla: function(pantalla, controlador, contenedor) {
        let template = 'templates/' + pantalla + '.html';

        $.get(template)
            .done(dibujarPantalla)
            .done(llamarControlador)
            .fail(imprimirError);
        
        function imprimirError($xhr) {
            console.error($xhr.status, 'cargando el template ', template)
        }

        function dibujarPantalla(respuesta) {
            $(contenedor).html(respuesta);
        }

        function llamarControlador() {
            controlador(contenedor);
        }
    }
}