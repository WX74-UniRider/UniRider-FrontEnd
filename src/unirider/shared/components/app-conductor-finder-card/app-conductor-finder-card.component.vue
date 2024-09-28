<script>
export default {
  props: {
    userInfo: {
      type: Object,
      required: true
    }
  },
  computed: {
    fullName() {
      return `${this.userInfo.nombre} ${this.userInfo.apellido}`;
    }
  }
};
</script>

<template>
  <div class="card">
    <div class="card-header">
      <p><strong>Nombre:</strong> {{ fullName }}</p>
    </div>
    <div class="card-content">
      <p><strong>Destino:</strong> {{ userInfo.destino }}</p>
      <div class="vehicle-info">
        <p><strong>Placa del Vehículo:</strong> {{ userInfo.placaVehiculo }}</p>
        <p><strong>Modelo del Vehículo:</strong> {{ userInfo.modeloVehiculo }}</p>
      </div>
    </div>
    <div class="card-footer">
      <p><strong>Número de Teléfono:</strong> {{ userInfo.numeroTelefono }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  display: inline-block; /* Adjust to text size */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  text-align: center;
  max-height: 200px;
}

.card-header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12); /* Line separating header from content */
  padding-bottom: 10px;
  margin-bottom: 10px;
}

.card-content {
  margin-bottom: 10px;
}

.vehicle-info {
  display: flex;
  justify-content: space-between;
}

.card-footer {
  margin-top: 10px;
}

h2 {
  margin: 10px 0;
  color: rgba(0, 0, 0, 0.87); /* High opacity text */
}

p {
  margin: 5px 0;
}
</style>