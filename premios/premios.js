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
            let probabilidadPositiva = 0;

            Premios.listaPremios = respuesta;
            $.each(respuesta, function(clave, valor) {
                console.log(valor.probabilidad);
                probabilidades.push(valor.probabilidad);
                probabilidadPositiva += valor.probabilidad;
            });

            probabilidades.push(1 - probabilidadPositiva);

            Premios.probabilidades = probabilidades;
        },
        imprimirError($xhr) {
            console.error($xhr.status, 'cargando premios');
        },
        calcularPremio: function() {
            let pesos = [];
            
            for (i = 0; i < Premios.probabilidades.length; i++) {
                for (j = 0; j < (Premios.probabilidades[i] * 100); j++) {
                    pesos.push(i);
                }
            }

            numeroAleatorio = aleatorioEntre(0, 99);

            let premio = pesos[numeroAleatorio];
            return premio;
        }
    }
})();

function aleatorioEntre(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}