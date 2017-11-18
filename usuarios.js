const usuarios = {
    login(usuario){
      let dato = DB[usuario];
      
      if(dato === undefined) {
        $(this).trigger('fracaso');
      } else {
        $(this).trigger('exito', DB[usuario]);
      }
    },
    registrar(usuario) {
      if(!DB.hasOwnProperty(usuario)){
        DB[usuario] = {
          nombre: usuario,
          creditos: 50
        }
      } else {
        console.log('Usuario ya existe');
      }
    }
  };
  
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