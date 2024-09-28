<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="tripId">ID del Viaje:</label>
      <input type="number" v-model="reservationData.tripId" required />
    </div>

    <div>
      <label for="passengerId">ID del Pasajero:</label>
      <input type="number" v-model="reservationData.passengerId" required />
    </div>

    <div>
      <label for="driverId">ID del Conductor:</label>
      <input type="number" v-model="reservationData.driverId" />
    </div>

    <div>
      <label for="tripStartTime">Fecha y Hora de Inicio del Viaje:</label>
      <input type="datetime-local" v-model="reservationData.tripStartTime" required />
    </div>

    <div>
      <label for="destination">Destino:</label>
      <input type="text" v-model="reservationData.destination" required />
    </div>

    <button type="submit">Crear Reserva</button>
  </form>

  <div v-if="successMessage" class="success-message">
    {{ successMessage }}
  </div>
</template>

<script>
import { BooksApiService } from "../../services/User-books.service.js";

export default {
  data() {
    return {
      reservationData: {
        tripId: null,
        passengerId: null,
        driverId: null, // Opcional
        tripStartTime: '',
        destination: ''
      },
      successMessage: '' // Estado para el mensaje de éxito
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await BooksApiService.createReservation(this.reservationData);
        console.log('Reserva creada:', response);
        this.successMessage = 'Reserva creada exitosamente'; // Actualizar el mensaje de éxito
      } catch (error) {
        console.error('Error creando reserva:', error);
      }
    }
  }
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-container {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.success-message {
  margin-top: 20px;
  color: green;
  font-weight: bold;
}
</style>
