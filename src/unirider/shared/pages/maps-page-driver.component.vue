<script setup>
import {ref} from 'vue';
import axios from 'axios'; // Importa axios
import ToolbarComponent from "../../public/toolbar.component.vue";
import {ProfileService} from "../../../../public/server/profile.service.js";

const searchQuery = ref('');
const drivers = ref([]);
const selectedDriver = ref(null);
const showOtherPaymentMethod = ref(false);
const tripPrices = ref([]);
const selectedPrice = ref(null); // Nueva variable para la tarifa seleccionada

const generateRandomTripPrices = () => {
  const prices = [
    {id: 1, amount: (Math.random() * 50 + 10).toFixed(2), currency: 'S/'},
    {id: 2, amount: (Math.random() * 50 + 10).toFixed(2), currency: 'S/'},
    {id: 3, amount: (Math.random() * 50 + 10).toFixed(2), currency: 'S/'}
  ];
  return prices;
};

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
  tripPrices.value = generateRandomTripPrices();
  selectedPrice.value = null; // Resetea la tarifa seleccionada al elegir un nuevo conductor
};

// Función para seleccionar una tarifa
const selectPrice = (price) => {
  selectedPrice.value = price;
  console.log('Tarifa seleccionada:', selectedPrice.value);
};

const handleRequestTrip = async (paymentMethod) => {
  if (selectedDriver.value && selectedPrice.value) { // Verifica si se ha seleccionado conductor y tarifa
    const passengerId = localStorage.getItem('userId');
    const driverId = selectedDriver.value.userId;

    const tripData = {
      destination: selectedDriver.value.destino,
      driverId: driverId,
      passengerId: passengerId,
      status: 'PENDING',
      price: selectedPrice.value.amount // Usa la tarifa seleccionada
    };

    try {
      await createTrip(tripData);
      alert('Viaje solicitado con éxito');
    } catch (error) {
      console.error('Error al solicitar el viaje:', error);
    }
  } else {
    alert('Debe seleccionar un conductor y una tarifa antes de solicitar el viaje');
  }
};

// Función para crear el viaje
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
              <p>Destino: {{ driver.destino }}</p>
              <p>Vehículo: {{ driver.vehicleModel }}</p>
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

          <div v-if="tripPrices.length > 0">
            <h4>Tarifas disponibles:</h4>
            <ul>
              <li v-for="price in tripPrices" :key="price.id">
                <button @click="selectPrice(price)">
                  {{ price.amount }} {{ price.currency }}
                </button>
              </li>
            </ul>
          </div>

          <div v-if="selectedPrice">
            <p>Tarifa seleccionada: {{ selectedPrice.amount }} {{ selectedPrice.currency }}</p>
          </div>

          <button @click="handleRequestTrip('Metodo Normal')" class="request-button">Solicitar Viaje</button>
          <button @click="handleRequestTrip('Otro Metodo')" class="request-button">Otro Método de Pago</button>
        </div>
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
