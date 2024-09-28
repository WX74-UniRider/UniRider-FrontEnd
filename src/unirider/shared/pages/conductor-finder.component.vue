<script>
import AppConductorFinderCard from "../components/app-conductor-finder-card/app-conductor-finder-card.component.vue";

export default {
  components: {
    AppConductorFinderCard
  },
  data() {
    return {
      destino: '',
      conductores: [
        { nombre: 'Juan', apellido: 'Pérez', destino: 'Lima', placaVehiculo: 'ABC123', modeloVehiculo: 'Toyota', numeroTelefono: '123456789' },
        { nombre: 'Ana', apellido: 'García', destino: 'Cusco', placaVehiculo: 'XYZ789', modeloVehiculo: 'Honda', numeroTelefono: '987654321' },
      ]
    };
  },
  computed: {
    conductoresFiltrados() {
      if (!this.destino.trim()) {
        return [];
      }
      return this.conductores.filter(conductor =>
          conductor.destino.toLowerCase().includes(this.destino.toLowerCase())
      );
    }
  }
};
</script>

<template>
  <div>
    <input v-model="destino" placeholder="Ingresa el destino" />
    <div v-for="conductor in conductoresFiltrados" :key="conductor.numeroTelefono">
      <AppConductorFinderCard :userInfo="conductor" />
    </div>
  </div>
</template>

<style scoped>
input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
</style>