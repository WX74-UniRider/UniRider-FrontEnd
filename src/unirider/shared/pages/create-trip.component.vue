<template>
  <div class="flex justify-center items-center min-h-screen bg-blue-100">
    <!-- Contenedor del Formulario -->
    <div class="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
      <h1 class="text-xl font-semibold text-center text-teal-700 mb-6">Crear Viaje</h1>
      <form @submit.prevent="createTrip" class="flex flex-col gap-4">
        <div>
          <label for="tripName" class="block text-gray-600 text-sm">Nombre del Viaje:</label>
          <input
              type="text"
              id="tripName"
              v-model="tripName"
              class="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-400 text-sm"
              placeholder="Ej: Viaje a Miraflores"
              required
          />
        </div>
        <div>
          <label for="tripDate" class="block text-gray-600 text-sm">Fecha:</label>
          <input
              type="date"
              id="tripDate"
              v-model="tripDate"
              class="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-400 text-sm"
              required
          />
        </div>
        <div>
          <label for="tripTime" class="block text-gray-600 text-sm">Hora:</label>
          <input
              type="time"
              id="tripTime"
              v-model="tripTime"
              class="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-400 text-sm"
              required
          />
        </div>
        <div>
          <label for="destination" class="block text-gray-600 text-sm">Destino:</label>
          <input
              type="text"
              id="destination"
              v-model="destination"
              class="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-400 text-sm"
              placeholder="Ej: Miraflores"
              required
          />
        </div>
        <div class="flex gap-4">
          <button
              type="submit"
              class="w-full bg-gradient-to-r from-teal-400 to-teal-600 hover:from-teal-500 hover:to-teal-700 text-white py-2 rounded-lg text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Crear Viaje
          </button>
          <button
              type="button"
              @click="addToFrequentTrips"
              class="w-full bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700 text-white py-2 rounded-lg text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Crear Viaje Frecuente
          </button>
        </div>
      </form>

      <!-- Viajes Frecuentes -->
      <div v-if="frequentTrips.length > 0" class="mt-6">
        <h2 class="text-lg font-semibold text-teal-700 mb-4 text-center">Viajes Frecuentes</h2>
        <div class="h-40 overflow-y-auto border border-gray-300 rounded-md p-2">
          <ul class="space-y-3">
            <li
                v-for="(trip, index) in frequentTrips"
                :key="index"
                @click="fillFormWithFrequentTrip(trip)"
                class="p-3 bg-gray-50 hover:bg-teal-50 border border-gray-200 rounded-md shadow-sm cursor-pointer text-sm transition duration-200"
            >
              <p class="text-teal-600 font-medium">{{ trip.tripName }}</p>
              <p class="text-gray-600">{{ trip.destination }}</p>
              <p class="text-gray-500 text-xs">{{ trip.tripDate }} - {{ trip.tripTime }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
        v-if="showModal"
        class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 class="text-xl font-semibold text-center text-teal-700 mb-4">{{ modalMessage }}</h2>
        <p v-if="modalMessage === 'Viaje creado exitosamente'" class="text-gray-600 text-center mb-6">
          Serás redirigido al inicio en un momento.
        </p>
        <button
            @click="closeModal"
            class="w-full bg-gradient-to-r from-teal-400 to-teal-600 hover:from-teal-500 hover:to-teal-700 text-white py-2 rounded-lg text-base font-semibold shadow-md hover:shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          Cerrar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const tripName = ref("");
const tripDate = ref("");
const tripTime = ref("");
const destination = ref("");
const frequentTrips = ref([]);
const showModal = ref(false);
const modalMessage = ref("");
const router = useRouter();

  // Crear viaje
const createTrip = () => {
  modalMessage.value = "Viaje creado exitosamente";
  showModal.value = true;
  setTimeout(() => {
    showModal.value = false;
    router.push("/home");
  }, 3000);
};

// Función para agregar a viajes frecuentes
const addToFrequentTrips = () => {
  if (tripName.value && tripDate.value && tripTime.value && destination.value) {
    frequentTrips.value.push({
      tripName: tripName.value,
      tripDate: tripDate.value,
      tripTime: tripTime.value,
      destination: destination.value,
    });
    modalMessage.value = "Viaje frecuente creado exitosamente";
    showModal.value = true;
  } else {
    alert("Por favor, completa todos los campos antes de agregar el viaje a frecuentes.");
  }
};

const closeModal = () => {
  showModal.value = false;
};

// Función para llenar el formulario con un viaje frecuente
const fillFormWithFrequentTrip = (trip) => {
  tripName.value = trip.tripName;
  tripDate.value = trip.tripDate;
  tripTime.value = trip.tripTime;
  destination.value = trip.destination;
};
</script>
