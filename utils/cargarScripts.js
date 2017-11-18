function cargarScripts(unListadoDeScripts) {
    var indice = 0;
    
    function cargarProximoScript(){
      var script = document.createElement('script');
      document.body.appendChild(script);
      script.src = unListadoDeScripts[indice];
      if(unListadoDeScripts[++indice]){ 
        script.addEventListener('load', cargarProximoScript);
        script.addEventListener('error', cargarProximoScript);
      }
    }
    
cargarProximoScript();
}