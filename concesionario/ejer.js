

let autos = require('./listadoAutos');

const concesionaria = {
    /* completar */
   autos: autos,
   buscarAuto: function(patente){
      let listaAutos = autos.filter(function(lista){
        return lista.patente==patente ? lista : undefined;
      });
      return listaAutos[0] === undefined ? listaAutos[0] = null : listaAutos[0];
   },
   venderAuto: function(patente){
       let auto = this.buscarAuto(patente);
       return auto.vendido = true;
   },
   autosParaLaVenta: function(){
        return autos.filter(function(lista){
            return lista.vendido == false;
        });
   }, 
   autosNuevos: function(){
        let autosParaLaVenta = this.autosParaLaVenta();
        return autosParaLaVenta.filter(function(lista){
            return lista.km < 100 && lista;
        });
   },
   listaDeVentas: function(){
        let resultado = []; 
        let listaVentas = autos.filter(function(lista){
            return lista.vendido == true;
        });
        
       for(let i=0; i<listaVentas.length;i++){  
           resultado[i] = listaVentas[i].precio;
        } 
        return resultado;
   },
   totalDeVentas: function(){
    let listaVentas = this.listaDeVentas(); 
    let totalVentas = listaVentas.reduce(function(acum, num){
        return acum + num;
    },0);
    return totalVentas;
    },
    puedeComprar : function (auto, persona){
        let cuota = auto.precio / auto.cuotas;
        return auto.precio <= persona.capacidadDePagoTotal && 
        cuota <= persona.capacidadDePagoEnCuotas ? true:false;
    },
    autosQuePuedeComprar : function (persona){
        let listadoAutos = [];
        let resultado = [];
        let autosVenta = this.autosParaLaVenta();
        for (let i = 0;i < autosVenta.length; i++){
            listadoAutos = this.puedeComprar(autosVenta[i],persona)
            listadoAutos == true && resultado.push(autosVenta[i]);
        }
        return resultado;
    }
};
let persona = {
    nombre : "Juan",
    capacidadDePagoEnCuotas : 20000,
    capacidadDePagoTotal : 100000
}

let auto = {
    marca : 'Toyota',
    modelo :'Corolla', 
    precio : 100000,
    km :0, 
    color :'Blanco', 
    cuotas :14, 
    anio :2019, 
    patente :'JJK116', 
    vendido: false
}
console.log(concesionaria.venderAuto('JJK116'));