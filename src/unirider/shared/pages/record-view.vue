<script>
import TravelRecordContainer from "../components/travel-record/travel-record-container.vue";
import ToolbarComponent from "../../public/toolbar.component.vue";

export default {
  name: 'RecordView',
  components: {
    ToolbarComponent,
    TravelRecordContainer,
  },
  data() {
    return {
      listaViajes: []
    };
  },
  created() {
    fetch('src/unirider/public/viajes.json')
        .then(response => response.json())
        .then(data => {
          this.listaViajes = data;
        });
  },
  methods: {
    esHoy(fechaViaje) {
      const fechaHoy = new Date().toISOString().split('T')[0];
      const fechaFormateada = fechaViaje.includes('/') ? fechaViaje.split('/').reverse().join('-') : fechaViaje;
      return fechaFormateada === fechaHoy;
    }
  }
};
</script>

<template>
  <div>
    <toolbar-component/>
    <div class="app-container">
      <img src="../../../img/logoUniRider.png" class="logoo" alt="LogoUniRider">
      <div>
        <h1>Historial</h1>
      </div>
      <div v-for="(viaje, index) in listaViajes" :key="index">
        <div>
          <h1 v-if="esHoy(viaje.fecha)">Hoy</h1>
        </div>
        <TravelRecordContainer
            :nombre="viaje.nombre"
            :destino="viaje.destino"
            :origen="viaje.origen"
            :duracion="viaje.duracion"
            :estrellas="viaje.estrellas"
            :estatus="viaje.estatus"
            :fecha="viaje.fecha"
            :precio="viaje.precio"
            :foto="viaje.foto"
            :estrella="viaje.estrella"
        />
      </div>
      <button class="btn-salir" @click="$router.go(-1)">Salir</button>
    </div>
  </div>
</template>

<style scoped>

.app-container {
  position: absolute;
  padding-left: 150px; /* Ajusta este valor para dejar espacio para el logo */

}

.logoo {
  position: absolute;
  top: 10px; /* Ajusta esta distancia desde la parte superior */
  left: 10px; /* Ajusta esta distancia desde el lado izquierdo */
  width: 80px; /* Ajusta el ancho del logo según sea necesario */
  height: auto; /* Permite que la altura se ajuste automáticamente según el ancho */

}

.btn-salir {
  background-color: #FF5733; /* Color de fondo */
  color: white; /* Color del texto */
  border: none; /* Sin borde */
  padding: 10px 20px; /* Espaciado interno */
  border-radius: 5px; /* Borde redondeado */
  cursor: pointer; /* Cursor apuntador */
  font-size: 16px; /* Tamaño de fuente */
}

.btn-salir:hover {
  background-color: #FF8743; /* Color de fondo al pasar el mouse */
}

</style>
<style>
body {
  background-color: #2DB3CB; /* Color de fondo */
}

@media screen and (max-width: 768px) {
  .container {
    padding: 0 20px; /* Adjust as needed */
  }
}

@media screen and (max-width: 576px) {
  .p-field {
    width: 100%; /* Make fields take full width */
  }
}

</style>

