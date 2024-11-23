<script setup>
import { ref, computed, onMounted } from "vue";
import ToolbarDriverComponent from "../../public/toolbar-driver.component.vue";
import axios from "axios";

// Variables de estado
const trips = ref([]); // Todos los viajes obtenidos
const paginatedTrips = ref([]); // Viajes visibles en la página actual
const selectedStatus = ref("PENDING"); // Estado inicial (solo PENDING)
const userId = ref(localStorage.getItem("userId")); // Obtener el driverId del local storage
const currentPage = ref(1); // Página actual
const rowsPerPage = ref(3); // Número de viajes por página

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
    updatePaginatedTrips(); // Actualizar la lista paginada
  } catch (error) {
    console.error("Error obteniendo viajes:", error);
    trips.value = [];
    paginatedTrips.value = [];
  }
};

// Cambiar estado seleccionado
const changeStatus = (status) => {
  selectedStatus.value = status;
  currentPage.value = 1; // Reiniciar a la primera página
  fetchTripsByStatus();
};

// Actualizar los viajes visibles según la página actual
const updatePaginatedTrips = () => {
  const start = (currentPage.value - 1) * rowsPerPage.value;
  const end = start + rowsPerPage.value;
  paginatedTrips.value = trips.value.slice(start, end);
};

// Manejar el cambio de página
const onPageChange = (event) => {
  currentPage.value = event.page + 1; // event.page es base 0
  updatePaginatedTrips();
};

// Llamar a la función al montar el componente
onMounted(fetchTripsByStatus);
</script>

<style scoped>
/* Personaliza el diseño según tu necesidad */
</style>


<template>
  <toolbar-driver-component />

  <div class="!flex !flex-col !items-center !bg-[#4088C6] !text-white !min-h-screen !py-8">
    <h1 class="!text-4xl !font-extrabold !text-white !mb-8 !drop-shadow-lg">Mis Viajes</h1>

    <!-- Botones de filtro -->
    <div class="!flex !gap-4 !mb-8">
      <pv-button
          v-for="status in ['PENDING', 'ACTIVE', 'FREQUENT']"
          :key="status"
          @click="changeStatus(status)"
          :class="[
          '!px-6 !py-3 !rounded-full !font-semibold !text-sm !transition-transform !transform',
          selectedStatus === status
            ? '!bg-white !text-blue-600 !shadow-lg !scale-105 !ring-4 !ring-blue-500'
            : '!bg-blue-700 !text-gray-300 hover:!bg-white hover:!text-blue-600 hover:!shadow-md'
        ]"
      >
        {{ status }}
      </pv-button>
    </div>

    <!-- Lista de viajes -->
    <div v-if="paginatedTrips.length > 0" class="!grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3 !gap-6 !w-full !max-w-6xl !px-4">
      <div
          v-for="trip in paginatedTrips"
          :key="trip.id"
          class="!bg-white !p-6 !rounded-xl !shadow-lg hover:!shadow-2xl !transition-transform !duration-200 !transform hover:!scale-105 !text-black"
      >
        <h2 class="!text-xl !font-bold !text-black !mb-3">{{ trip.destination }}</h2>
        <p class="!text-black !mb-2"><span class="!font-semibold">Precio:</span> ${{ trip.price }}</p>
        <p class="!text-black !mb-2"><span class="!font-semibold">Fecha y hora:</span> {{ trip.departureTime }}</p>
        <p class="!text-black !mb-2"><span class="!font-semibold">Pasajero:</span> {{ trip.passenger }}</p>
        <p class="!text-black">
          <span class="!font-semibold">Estado:</span>
          <span
              :class="{
              '!text-green-600': trip.status === 'ACTIVE',
              '!text-yellow-600': trip.status === 'PENDING',
              '!text-blue-600': trip.status === 'FREQUENT'
            }"
          >
            {{ trip.status }}
          </span>
        </p>
      </div>
    </div>

    <!-- Mensaje si no hay viajes -->
    <div v-else class="!text-blue-200 !text-lg !text-center !font-semibold">
      No hay viajes disponibles para el estado seleccionado.
    </div>

    <!-- Paginador -->
    <div class="!mt-8">
      <pv-paginator
          :rows="3"
          :total-records="trips.length"
          :first="(currentPage - 1) * rowsPerPage"
          :rows-per-page-options="[3]"
          @page="onPageChange"
          class="!bg-white !rounded-md !py-3 !px-6 !shadow-lg !text-blue-600 !font-semibold"
      />
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
