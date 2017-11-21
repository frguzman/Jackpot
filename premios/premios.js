const Premios = (function () {
    let listaPremios = [];
    const rutaPremios = 'premios/premios.json';
    let probabilidades = [];

    return {
        cargarPremios: function(){
            $.get(rutaPremios)
                .done(Premios.almacenarPremios)
                .fail(Premios.imprimirError);
        },
        almacenarPremios: function(respuesta) {
            let probabilidades = [];
            Premios.listaPremios = respuesta;
            $.each(respuesta, function(clave, valor) {
                console.log(valor.probabilidad);
                probabilidades.push(valor.probabilidad);
            });
            Premios.probabilidades = probabilidades.sort();
        },
        imprimirError($xhr) {
            console.error($xhr.status, 'cargando premios');
        },
        calcularPremio: function() {

        }
    }
})();

function aleatorioEntre(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}