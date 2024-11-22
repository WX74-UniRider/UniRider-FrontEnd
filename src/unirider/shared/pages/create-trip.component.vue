<template>
  <ToolbarComponent />
  <div class="flex justify-center items-center !min-h-screen bg-blue-100">
    <!-- Contenedor del Formulario -->
    <div class="!w-full !max-w-2xl !bg-white !p-6 !rounded-lg !shadow-lg">
      <h1 class="!text-xl !font-semibold !text-center !text-teal-700 !mb-6">Crear Viaje</h1>
      <form @submit.prevent="createTrip" class="!flex !flex-col !gap-4">
        <div>
          <label for="destination" class="!block !text-gray-600 !text-sm">Destino:</label>
          <pv-input-text
              type="text"
              id="destination"
              v-model="destination"
              class="!w-full !border !border-gray-300 !p-2 !rounded-md !focus:outline-none !focus:ring-1 !focus:ring-teal-400 !text-sm"
              placeholder="Ej: Miraflores"
              required
          />
        </div>
        <div>
          <label for="price" class="!block !text-gray-600 !text-sm">Precio:</label>
          <pv-input-text
              type="number"
              id="price"
              v-model="price"
              class="!w-full !border !border-gray-300 !p-2 !rounded-md !focus:outline-none !focus:ring-1 !focus:ring-teal-400 !text-sm"
              placeholder="Ej: 150"
              required
          />
        </div>
        <div>
          <label for="tripDate" class="!block !text-gray-600 !text-sm">Fecha:</label>
          <pv-select
              v-model="tripDate"
              :options="weekdays"
              optionLabel="label"
              class="!w-full !border !border-gray-300 !rounded-md !focus:outline-none !focus:ring-1 !focus:ring-teal-400 !text-sm"
              placeholder="Selecciona un día"
          />
        </div>
        <div>
          <label for="tripTime" class="!block !text-gray-600 !text-sm">Hora:</label>
          <pv-input-text
              type="time"
              id="tripTime"
              v-model="tripTime"
              class="!w-full !border !border-gray-300 !p-2 !rounded-md !focus:outline-none !focus:ring-1 !focus:ring-teal-400 !text-sm"
              required
          />
        </div>
        <div class="!flex !gap-4">
          <pv-button
              type="submit"
              class="!w-full !bg-gradient-to-r !from-teal-400 !to-teal-600 !hover:from-teal-500 !hover:to-teal-700 !text-white !py-2 !rounded-lg !text-base !font-semibold !shadow-lg !hover:shadow-xl !transition-all !duration-300 !ease-in-out !transform !hover:scale-105"
          >
            Crear Viaje
          </pv-button>
          <pv-button
              type="button"
              @click="addToFrequentTrips"
              class="!w-full !bg-gradient-to-r !from-purple-400 !to-purple-600 !hover:from-purple-500 !hover:to-purple-700 !text-white !py-2 !rounded-lg !text-base !font-semibold !shadow-lg !hover:shadow-xl !transition-all !duration-300 !ease-in-out !transform !hover:scale-105"
          >
            Crear Viaje Frecuente
          </pv-button>
        </div>
      </form>

      <!-- Viajes Frecuentes -->
      <div v-if="frequentTrips.length > 0" class="!mt-6">
        <h2 class="!text-lg !font-semibold !text-teal-700 !mb-4 !text-center">Viajes Frecuentes</h2>
        <div class="!h-40 !overflow-y-auto !border !border-gray-300 !rounded-md !p-2">
          <ul class="!space-y-3">
            <li
                v-for="(trip, index) in frequentTrips"
                :key="index"
                @click="fillFormWithFrequentTrip(trip)"
                class="!p-3 !bg-gray-50 !hover:bg-teal-50 !border !border-gray-200 !rounded-md !shadow-sm !cursor-pointer !text-base !transition !duration-200"
            >
              <p class="!text-teal-700 !font-semibold !text-lg">{{ trip.destination }}</p>
              <p class="!text-gray-700 !text-base">Precio: ${{ trip.price }}</p>
              <p class="!text-gray-600 !text-sm">{{ trip.tripDate.label }} - {{ trip.tripTime }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
        v-if="showModal"
        class="!fixed !inset-0 !bg-black !bg-opacity-50 !flex !justify-center !items-center !z-50"
    >
      <div class="!bg-white !p-6 !rounded-lg !shadow-lg !max-w-sm !w-full">
        <h2 class="!text-xl !font-semibold !text-center !text-teal-700 !mb-4">{{ modalMessage }}</h2>
        <pv-button
            @click="closeModal"
            class="!w-full !bg-gradient-to-r !from-teal-400 !to-teal-600 !hover:from-teal-500 !hover:to-teal-700 !text-white !py-2 !rounded-lg !text-base !font-semibold !shadow-md !hover:shadow-lg !transition-transform !duration-300 !ease-in-out !transform !hover:scale-105"
        >
          Cerrar
        </pv-button>
      </div>
    </div>
  </div>
</template>



<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import ToolbarComponent from "../../public/toolbar.component.vue";

const destination = ref("");
const price = ref("");
const tripDate = ref("");
const tripTime = ref("");
const frequentTrips = ref([]);
const showModal = ref(false);
const modalMessage = ref("");
const userId = ref(localStorage.getItem("userId")); // Obtener userId del local storage
const router = useRouter();

const weekdays = [
  { label: "Lunes", value: "Lunes" },
  { label: "Martes", value: "Martes" },
  { label: "Miércoles", value: "Miércoles" },
  { label: "Jueves", value: "Jueves" },
  { label: "Viernes", value: "Viernes" },
  { label: "Sábado", value: "Sábado" },
  { label: "Domingo", value: "Domingo" },
];

// Crear viaje
const createTrip = () => {
  if (!userId.value) {
    alert("Error: No se encontró el ID de usuario en el local storage.");
    return;
  }

  const newTrip = {
    destination: destination.value,
    price: price.value,
    tripDate: tripDate.value,
    tripTime: tripTime.value,
    userId: userId.value,
  };

  console.log("Viaje creado:", newTrip);

  modalMessage.value = "Viaje creado exitosamente";
  showModal.value = true;

  setTimeout(() => {
    showModal.value = false;
    router.push("/home");
  }, 3000);
};

// Crear viaje frecuente
const addToFrequentTrips = () => {
  if (destination.value && price.value && tripDate.value && tripTime.value) {
    frequentTrips.value.push({
      destination: destination.value,
      price: price.value,
      tripDate: tripDate.value,
      tripTime: tripTime.value,
    });

    modalMessage.value = "Viaje frecuente creado exitosamente";
    showModal.value = true;
  } else {
    alert("Por favor, completa todos los campos antes de agregar el viaje a frecuentes.");
  }
};

// Llenar el formulario con datos de un viaje frecuente
const fillFormWithFrequentTrip = (trip) => {
  destination.value = trip.destination;
  price.value = trip.price;
  tripDate.value = trip.tripDate;
  tripTime.value = trip.tripTime;
};

// Cerrar el modal
const closeModal = () => {
  showModal.value = false;
};
</script>

<style>
/* Puedes agregar estilos personalizados si lo necesitas */
</style>
