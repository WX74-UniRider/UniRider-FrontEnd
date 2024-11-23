<script setup>
import { ref, onMounted } from "vue";
import ToolbarDriverComponent from "../../public/toolbar-driver.component.vue";
import axios from "axios";

// Variables de estado
const trips = ref([]);
const selectedStatus = ref("PENDING"); // Estado inicial (solo PENDING)
const userId = ref(localStorage.getItem("userId")); // Obtener el driverId del local storage

// Nombres de pasajeros falsos
const fakePassengers = ["Juan Pérez", "Ana López", "Carlos García", "María Rodríguez", "Pedro Sánchez"];

// Obtener viajes por estado
const fetchTripsByStatus = async () => {
  if (!userId.value) {
    console.error("No se encontró el ID del conductor en el local storage.");
    return;
  }

  try {
    const response = await axios.get(
        `http://localhost:8080/api/v1/trips/status/${selectedStatus.value}`,
        {
          params: { driverId: userId.value }, // Filtrar por driverId
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
    );

    trips.value = response.data.map((trip) => ({
      ...trip,
      passenger: fakePassengers[Math.floor(Math.random() * fakePassengers.length)], // Asignar pasajero falso
    }));
  } catch (error) {
    console.error("Error obteniendo viajes:", error);
    trips.value = [];
  }
};

// Cambiar estado seleccionado
const changeStatus = (status) => {
  selectedStatus.value = status;
  fetchTripsByStatus();
};

// Llamar a la función al montar el componente
onMounted(fetchTripsByStatus);
</script>

<style scoped>
/* Personaliza el diseño según tu necesidad */
</style>


<template>
  <toolbar-driver-component />

  <div class="flex flex-col items-center bg-gray-900 text-white min-h-screen py-8">
    <h1 class="text-3xl font-bold text-blue-500 mb-6">Mis Viajes</h1>

    <!-- Botones de filtro -->
    <div class="flex gap-4 mb-6">
      <button
          v-for="status in ['PENDING', 'ACTIVE', 'FREQUENT']"
          :key="status"
          @click="changeStatus(status)"
          :class="[
          'px-5 py-3 rounded-full font-semibold transition-transform transform',
          selectedStatus === status
            ? 'bg-blue-500 text-white shadow-lg scale-105'
            : 'bg-gray-700 text-gray-300 hover:bg-blue-400 hover:text-white'
        ]"
      >
        {{ status }}
      </button>
    </div>

    <!-- Lista de viajes -->
    <div v-if="trips.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
      <div
          v-for="trip in trips"
          :key="trip.id"
          class="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-200"
      >
        <h2 class="text-xl font-semibold text-blue-400 mb-2">{{ trip.destination }}</h2>
        <p class="text-gray-300 mb-1"><span class="font-bold">Precio:</span> ${{ trip.price }}</p>
        <p class="text-gray-300 mb-1"><span class="font-bold">Fecha y hora:</span> {{ trip.departureTime }}</p>
        <p class="text-gray-300 mb-1"><span class="font-bold">Pasajero:</span> {{ trip.passenger }}</p>
        <p class="text-gray-300">
          <span class="font-bold">Estado:</span>
          <span
              :class="{
              'text-green-400': trip.status === 'ACTIVE',
              'text-yellow-400': trip.status === 'PENDING',
              'text-blue-400': trip.status === 'FREQUENT'
            }"
          >
            {{ trip.status }}
          </span>
        </p>
      </div>
    </div>

    <!-- Mensaje si no hay viajes -->
    <div v-else class="text-gray-500 text-lg">
      No hay viajes disponibles para el estado seleccionado.
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
}

/* Botón hover efecto */
button {
  cursor: pointer;
}

button:hover {
  transform: translateY(-2px);
}

/* Tarjetas */
div.bg-gray-800:hover {
  transform: scale(1.02);
}

/* Transiciones suaves */
.transition-transform {
  transition: transform 0.2s;
}
</style>
