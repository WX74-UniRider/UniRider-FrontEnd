<script setup>
import { ref } from 'vue';
import { ProfileService } from "../../../../public/server/profile.service.js";
import { BooksApiService } from "../services/User-books.service.js";
import ToolbarComponent from "../../public/toolbar.component.vue";

const searchQuery = ref('');
const drivers = ref([]);
const selectedDriver = ref(null);
const tripPrice = ref(null); // Almacena el costo único generado
const selectedDate = ref(''); // Fecha seleccionada
const selectedTime = ref(''); // Hora seleccionada

const generateRandomTripPrice = () => {
  return { amount: (Math.random() * 50 + 10).toFixed(2), currency: 'S/' };
};

const fetchDrivers = async (destination) => {
  try {
    const profileService = new ProfileService();
    const result = await profileService.getDriversByDestination(destination);
    drivers.value = result;
  } catch (error) {
    console.error('Error fetching drivers:', error);
  }
};

const handleSearchClick = () => {
  if (searchQuery.value && selectedDate.value && selectedTime.value) {
    fetchDrivers(searchQuery.value);
  } else {
    alert('Debe ingresar destino, fecha y hora para buscar una reserva');
  }
};

const selectDriver = (driver) => {
  selectedDriver.value = driver;
  tripPrice.value = generateRandomTripPrice(); // Genera un costo único al seleccionar conductor
};

const handleRequestReservation = async () => {
  if (selectedDriver.value && tripPrice.value && selectedDate.value && selectedTime.value) {
    const passengerId = localStorage.getItem('userId');
    const driverId = selectedDriver.value.userId;

    const reservationData = {
      tripId: selectedDriver.value.id, // Usar el id del viaje seleccionado
      passengerId: passengerId,
      driverId: driverId,
      tripStartTime: `${selectedDate.value}T${selectedTime.value}`,
      destination: selectedDriver.value.destino,
    };

    try {
      // Uso del servicio para crear la reserva
      const response = await BooksApiService.createReservation(reservationData);
      console.log('Reserva creada:', response);
      alert('Reserva creada exitosamente');
    } catch (error) {
      console.error('Error al crear la reserva:', error);
      alert('Error al crear la reserva. Intente nuevamente.');
    }
  } else {
    alert('Debe completar todos los campos antes de solicitar la reserva');
  }
};
</script>


<template>
  <div class="!flex !flex-col !min-h-screen bg-gray-100">
    <ToolbarComponent />

    <div class="!flex !flex-col lg:!flex-row !gap-6 !p-6">
      <!-- Contenedor de búsqueda -->
      <div class="!flex-1 !bg-white !rounded-lg !shadow-md !p-6">
        <!-- Barra de búsqueda -->
        <pv-input-text
            v-model="searchQuery"
            placeholder="Buscar destino"
            class="!w-full !p-4 !mb-4 !border !rounded-lg focus:!outline-none focus:!ring focus:!ring-primary !text-lg"
        />

        <!-- Inputs de fecha y hora -->
        <pv-input-text
            v-model="selectedDate"
            type="date"
            placeholder="Seleccione fecha"
            class="!w-full !p-4 !mb-4 !border !rounded-lg focus:!outline-none focus:!ring focus:!ring-primary !text-lg"
        />
        <pv-input-text
            v-model="selectedTime"
            type="time"
            placeholder="Seleccione hora"
            class="!w-full !p-4 !mb-4 !border !rounded-lg focus:!outline-none focus:!ring focus:!ring-primary !text-lg"
        />

        <!-- Botón de búsqueda -->
        <pv-button
            @click="handleSearchClick"
            class="!w-full !px-6 !py-3 !bg-gradient-to-r !from-green-500 !to-green-700 !text-white !rounded-lg !hover:from-green-600 !hover:to-green-800 !text-lg !shadow-lg !font-semibold"
        >
          Buscar Reserva
        </pv-button>

        <!-- Mensaje si no hay conductores -->
        <div v-if="drivers.length === 0" class="!text-gray-600 !text-lg !mt-6">
          <p>No hay conductores para este destino.</p>
        </div>

        <!-- Tarjetas de conductores -->
        <div
            v-else
            class="!max-h-96 !overflow-y-auto !pr-2 !mt-6"
        >
          <div
              v-for="driver in drivers"
              :key="driver.id"
              class="!bg-gray-50 !border !rounded-lg !p-6 !mb-6 !cursor-pointer hover:!shadow-lg"
              @click="selectDriver(driver)"
          >
            <h3 class="!font-semibold !text-xl !text-gray-700">
              {{ driver.user.firstName }} {{ driver.user.lastName }}
            </h3>
            <p class="!text-lg !text-gray-500 !mt-2">Destino: {{ driver.destino }}</p>
            <p class="!text-lg !text-gray-500">Vehículo: {{ driver.vehicleModel }}</p>
            <p class="!text-lg !text-gray-500">Placa: {{ driver.vehiclePlate }}</p>
            <p class="!text-lg !text-gray-500 !mt-2">Fecha: {{ selectedDate }}</p>
            <p class="!text-lg !text-gray-500">Hora: {{ selectedTime }}</p>
          </div>
        </div>
      </div>

      <!-- Información del viaje -->
      <div class="!flex-1 !bg-white !rounded-lg !shadow-md !p-6">
        <h2 class="!text-2xl !font-bold !text-gray-700 !mb-6">Información del Conductor</h2>

        <div v-if="selectedDriver">
          <h3 class="!text-xl !font-semibold !text-gray-800">
            Conductor seleccionado: {{ selectedDriver.user.firstName }} {{ selectedDriver.user.lastName }}
          </h3>
          <div class="!mt-4">
            <p class="!text-lg !text-gray-600"><strong>Destino:</strong> {{ selectedDriver.destino }}</p>
            <p class="!text-lg !text-gray-600"><strong>Vehículo:</strong> {{ selectedDriver.vehicleModel }}</p>
            <p class="!text-lg !text-gray-600"><strong>Placa:</strong> {{ selectedDriver.vehiclePlate }}</p>
            <p class="!text-lg !text-gray-600"><strong>Fecha:</strong> {{ selectedDate }}</p>
            <p class="!text-lg !text-gray-600"><strong>Hora:</strong> {{ selectedTime }}</p>
          </div>

          <div class="!mt-6">
            <p class="!text-lg !text-gray-600">
              <strong>Costo del viaje:</strong> {{ tripPrice?.currency }} {{ tripPrice?.amount }}
            </p>
          </div>

          <div class="!mt-6">
            <pv-button
                @click="handleRequestReservation"
                class="!w-full !px-6 !py-3 !bg-gradient-to-r !from-blue-500 !to-blue-700 !text-white !rounded-lg !hover:from-blue-600 !hover:to-blue-800 !text-lg !shadow-lg !font-semibold"
            >
              Solicitar Reserva
            </pv-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-primary {
  background-color: #4CAF50;
}

.bg-primary-dark {
  background-color: #388E3C;
}
</style>
