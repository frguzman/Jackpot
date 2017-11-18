const ServicioUsuarios = (function CrearServicioUsuarios() {
  let nombre = '';
  let saldo = 0;

  return {
    login: function(usuario){
      let dato = DB[usuario];
      
      if(dato === undefined) {
        $(this).trigger('fracaso', usuario);
      } else {
        this.nombre = dato.nombre;
        this.saldo = dato.creditos;
        $(this).trigger('exito', dato);
      }
    },
    registrar: function(usuario) {
      if(!DB.hasOwnProperty(usuario)){
        DB[usuario] = {
          nombre: usuario,
          creditos: 50
        }
        this.login(usuario);
      } else {
        console.log('Usuario ya existe');
      }
    }
  }
}
)();

/*const usuarios = {
  login(username){
    const ruta = `https://istea-jackpot.firebaseio.com/usuarios/${username}.json`;
    return $.get(ruta).done( data => $(this).trigger('exito', data) );
  }
};*/

const DB = {
  Pepe: {
    nombre: 'Pepe',
    creditos: 100
  },
  Silvia: {
    nombre: 'Silvia',
    creditos: 500
  }
}