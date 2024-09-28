<script setup>
import { ref } from 'vue';
import axios from 'axios'; // Import axios
import ToolbarComponent from "../../public/toolbar.component.vue";
import { ProfileService } from "../../../../public/server/profile.service.js";

const searchQuery = ref('');
const drivers = ref([]);
const selectedDriver = ref(null);
const showOtherPaymentMethod = ref(false);

const fetchDrivers = async (destination) => {
  try {
    const profileService = new ProfileService();
    const result = await profileService.getDriversByDestination(destination);
    console.log(result); // Verifica lo que se está recibiendo
    drivers.value = result;
  } catch (error) {
    console.error('Error fetching drivers:', error);
  }
};

const handleSearchClick = () => {
  if (searchQuery.value) {
    fetchDrivers(searchQuery.value);
  } else {
    drivers.value = [];
  }
};

// Manejamos la selección de un conductor
const selectDriver = (driver) => {
  selectedDriver.value = driver;
};

const handleRequestTrip = async (paymentMethod) => {
  if (selectedDriver.value) {
    const passengerId = localStorage.getItem('userId'); // Recupera el userId del localStorage
    const driverId = selectedDriver.value.userId; // Obtén el userId del conductor

    const tripData = {
      destination: selectedDriver.value.destino, // O cualquier destino que desees usar
      driverId: driverId,
      passengerId: passengerId,
      status: 'PENDING', // O el estado que quieras establecer
      price: 0 // Establece un precio según sea necesario
    };

    try {
      // Aquí deberías tener una función en tu servicio para crear el viaje
      await createTrip(tripData);
      console.log('Viaje solicitado con éxito');
      // Aquí puedes añadir lógica adicional como mostrar un mensaje o redirigir
    } catch (error) {
      console.error('Error al solicitar el viaje:', error);
    }
  } else {
    console.log('No se ha seleccionado ningún conductor');
  }
};

// Función para crear el viaje (deberás implementar esto)
const createTrip = async (tripData) => {
  const token = localStorage.getItem('token'); // Asegúrate de obtener el token
  const response = await axios.post('http://localhost:8080/api/v1/trips', tripData, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return response.data;
};

</script>

<template>
  <div class="app-container">
    <ToolbarComponent/>
    <div class="card-container">
      <div class="search-container">
        <div class="search-wrapper">
          <input
              v-model="searchQuery"
              type="text"
              placeholder="Buscar destino"
              class="search-bar"
          />
          <span class="search-icon" @click="handleSearchClick">&#128269;</span>
        </div>
        <div v-if="drivers.length === 0">
          <p>No hay conductores para este destino.</p>
        </div>
        <div
            v-for="driver in drivers"
            :key="driver.id"
            class="mat-card driver-card"
            @click="selectDriver(driver)"
        >
          <mat-card>
            <mat-card-title>{{ driver.user.firstName }} {{ driver.user.lastName }}</mat-card-title>
            <mat-card-content>
              [...]
              <p>Placa: {{ driver.vehiclePlate }}</p>
            </mat-card-content>
          </mat-card>
        </div>
      </div>

      <div class="trip-info-container">
        <h2>Información de Usuarios Disponibles</h2>
        <div v-if="selectedDriver">
          <h3>Conductor seleccionado: {{ selectedDriver.user.firstName }} {{ selectedDriver.user.lastName }}</h3>
          <p><strong>Destino:</strong> {{ selectedDriver.destino }}</p>
          <p><strong>Vehículo:</strong> {{ selectedDriver.vehicleModel }}</p>
          <p><strong>Placa:</strong> {{ selectedDriver.vehiclePlate }}</p>
          <p><strong>Teléfono:</strong> {{ selectedDriver.phoneNumber }}</p>
          <p><strong>Seguro:</strong> {{ selectedDriver.insurance }}</p>
        </div>
        <button @click="handleRequestTrip('Metodo Normal')" class="request-button">Solicitar Viaje</button>
        <button @click="handleRequestTrip('Otro Metodo')" class="request-button">Otro Método de Pago</button>
        <div v-if="showOtherPaymentMethod">
          <p>Campos para otro método de pago</p>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.card-container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;
}

.search-container {
  flex: 1;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.search-wrapper {
  position: relative;
}

.search-bar {
  width: 100%;
  padding: 10px;
  padding-right: 40px; /* Add space for the icon */
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  color: #ccc;
  cursor: pointer;
}

.driver-card {
  background-color: #f9f9f9;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
}

.trip-info-container {
  flex: 2;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.request-button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  margin-top: 10px;
}

@media (max-width: 768px) {
  .card-container {
    flex-direction: column;
  }
}
</style>
