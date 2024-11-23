<script setup>
import { ref } from 'vue';
import axios from 'axios'; // Importa axios
import ToolbarComponent from "../../public/toolbar.component.vue";
import { ProfileService } from "../../../../public/server/profile.service.js";

const searchQuery = ref('');
const drivers = ref([]);
const selectedDriver = ref(null);
const showOtherPaymentMethod = ref(false);
const tripPrices = ref([]);
const selectedPrice = ref(null); // Nueva variable para la tarifa seleccionada
const selectedCampus = ref(null);
const universities = ref([
  {
    name: 'Universidad Nacional Mayor de San Marcos (UNMSM)',
    code: 'UNMSM',
    campuses: [
      { name: 'Sede Central', code: 'UNMSM-Central' },
    ],
  },
  {
    name: 'Pontificia Universidad Católica del Perú (PUCP)',
    code: 'PUCP',
    campuses: [
      { name: 'Sede Principal', code: 'PUCP-Principal' },
      { name: 'Sede Facultad de Derecho', code: 'PUCP-Derecho' },
    ],
  },
  {
    name: 'Universidad Peruana Cayetano Heredia (UPCH)',
    code: 'UPCH',
    campuses: [
      { name: 'Sede Principal', code: 'UPCH-Principal' },
      { name: 'Sede Facultad de Medicina', code: 'UPCH-Medicina' },
      { name: 'Sede Facultad de Ciencias de la Salud', code: 'UPCH-CienciasSalud' },
    ],
  },
  {
    name: 'Universidad de Lima (UL)',
    code: 'UL',
    campuses: [
      { name: 'Sede Principal', code: 'UL-Principal' },
    ],
  },
  {
    name: 'Universidad Peruana de Ciencias Aplicadas (UPC)',
    code: 'UPC',
    campuses: [
      { name: 'Sede San Isidro', code: 'UPC-SanIsidro' },
      { name: 'Sede San Miguel', code: 'UPC-SanMiguel' },
      { name: 'Sede Villa', code: 'UPC-Villa' },
      { name: 'Sede Monterico', code: 'UPC-Monterico' },
    ],
  },
  {
    name: 'Universidad Nacional de Ingeniería (UNI)',
    code: 'UNI',
    campuses: [
      { name: 'Sede Principal', code: 'UNI-Principal' },
    ],
  },
  {
    name: 'Universidad de San Martín de Porres (USMP)',
    code: 'USMP',
    campuses: [
      { name: 'Sede Central', code: 'USMP-Central' },
      { name: 'Sede Surco', code: 'USMP-Surco' },
      { name: 'Sede de Medicina', code: 'USMP-Medicina' },
      { name: 'Sede de Miraflores', code: 'USMP-Miraflores' },
    ],
  },
  {
    name: 'Universidad Ricardo Palma (URP)',
    code: 'URP',
    campuses: [
      { name: 'Sede Principal', code: 'URP-Principal' },
    ],
  },
  {
    name: 'Universidad de Ciencias y Humanidades (UCH)',
    code: 'UCH',
    campuses: [
      { name: 'Sede Principal', code: 'UCH-Principal' },
    ],
  },
  {
    name: 'Universidad Tecnológica del Perú (UTP)',
    code: 'UTP',
    campuses: [
      { name: 'Sede San Isidro', code: 'UTP-SanIsidro' },
      { name: 'Sede Jesús María', code: 'UTP-JesusMaria' },
      { name: 'Sede Centro de Lima', code: 'UTP-CentroLima' },
      { name: 'Sede La Molina', code: 'UTP-LaMolina' },
      { name: 'Sede Callao', code: 'UTP-Callao' },
    ],
  },
]);

const generateRandomTripPrices = () => {
  const prices = [
    { id: 1, amount: (Math.random() * 50 + 10).toFixed(2), currency: 'S/' },
    { id: 2, amount: (Math.random() * 50 + 10).toFixed(2), currency: 'S/' },
    { id: 3, amount: (Math.random() * 50 + 10).toFixed(2), currency: 'S/' }
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

const handleCampusSelect = () => {
  if (selectedCampus.value) {
    // Actualizamos el searchQuery solo con el código de la sede seleccionada
    searchQuery.value = selectedCampus.value.code;
    handleSearchClick(); // Ejecuta la búsqueda
  }
};

</script>

<template>
  <div class="!flex !flex-col !min-h-screen bg-gray-100">
    <ToolbarComponent />

    <div class="!flex !flex-col lg:!flex-row !gap-6 !p-6">
      <!-- Contenedor de búsqueda -->
      <div class="!flex-1 !bg-white !rounded-lg !shadow-md !p-6">
        <div class="!relative !mb-6">
          <input
              v-model="searchQuery"
              type="text"
              placeholder="Buscar destino"
              class="!w-full !p-4 !pr-12 !border !rounded-lg focus:!outline-none focus:!ring focus:!ring-primary !text-lg"
          />
          <span
              class="!absolute !right-4 !top-1/2 !transform -!translate-y-1/2 !text-gray-400 !text-2xl !cursor-pointer"
              @click="handleSearchClick"
          >
            🔍
          </span>
        </div>

        <!-- Select para elegir universidad -->
        <pv-cascade-select
            v-model="selectedCampus"
            :options="universities"
            optionLabel="name"
            optionGroupLabel="name"
            :optionGroupChildren="['campuses']"
            showClear
            placeholder="Seleccione una universidad y su sede"
            class="!w-96 sm:!w-64 !mb-6 !text-lg"
            @change="handleCampusSelect"
        />

        <div v-if="drivers.length === 0" class="!text-gray-600 !text-lg">
          <p>No hay conductores para este destino.</p>
        </div>

        <!-- Tarjetas de conductores con scroll -->
        <div
            v-else
            class="!max-h-96 !overflow-y-auto !pr-2"
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
          </div>
        </div>
      </div>

      <!-- Información del viaje -->
      <div class="!flex-1 !bg-white !rounded-lg !shadow-md !p-6">
        <h2 class="!text-2xl !font-bold !text-gray-700 !mb-6">Información de Usuarios Disponibles</h2>

        <div v-if="selectedDriver">
          <h3 class="!text-xl !font-semibold !text-gray-800">
            Conductor seleccionado: {{ selectedDriver.user.firstName }} {{ selectedDriver.user.lastName }}
          </h3>
          <div class="!mt-4">
            <p class="!text-lg !text-gray-600"><strong>Destino:</strong> {{ selectedDriver.destino }}</p>
            <p class="!text-lg !text-gray-600"><strong>Vehículo:</strong> {{ selectedDriver.vehicleModel }}</p>
            <p class="!text-lg !text-gray-600"><strong>Placa:</strong> {{ selectedDriver.vehiclePlate }}</p>
            <p class="!text-lg !text-gray-600"><strong>Teléfono:</strong> {{ selectedDriver.phoneNumber }}</p>
            <p class="!text-lg !text-gray-600"><strong>Seguro:</strong> {{ selectedDriver.insurance }}</p>
          </div>

          <div v-if="tripPrices.length > 0" class="!mt-6">
            <h4 class="!text-xl !font-semibold !text-gray-700 !mb-4">Tarifas disponibles:</h4>
            <div class="!grid !grid-cols-1 sm:!grid-cols-2 !gap-4">
              <pv-button
                  v-for="price in tripPrices"
                  :key="price.id"
                  class="!px-6 !py-3 !bg-primary !text-black !rounded-lg hover:!bg-primary-dark !text-lg !shadow-lg"
                  @click="selectPrice(price)"
              >
                {{ price.amount }} {{ price.currency }}
              </pv-button>
            </div>
          </div>

          <div v-if="selectedPrice" class="!mt-6">
            <p class="!text-lg !text-gray-600">
              <strong>Tarifa seleccionada:</strong> {{ selectedPrice.amount }} {{ selectedPrice.currency }}
            </p>
          </div>

          <div class="!mt-6 !flex !gap-4">
            <pv-button
                @click="handleRequestTrip('Metodo Normal')"
                class="!flex-1 !px-6 !py-3 !bg-primary !text-black !rounded-lg hover:!bg-primary-dark !text-lg !shadow-lg"
            >
              Solicitar Viaje
            </pv-button>
            <pv-button
                @click="handleRequestTrip('Otro Metodo')"
                class="!flex-1 !px-6 !py-3 !bg-secondary !text-white !rounded-lg hover:!bg-secondary-dark !text-lg !shadow-lg"
            >
              Otro Método de Pago
            </pv-button>
          </div>
        </div>

        <div v-if="showOtherPaymentMethod" class="!mt-6">
          <p class="!text-lg">Campos para otro método de pago</p>
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

.bg-secondary {
  background-color: #FFA000;
}

.bg-secondary-dark {
  background-color: #FF8F00;
}

.text-primary {
  color: #4CAF50;
}

.text-secondary {
  color: #FFA000;
}

/* Barra de desplazamiento personalizada */
.max-h-96::-webkit-scrollbar {
  width: 8px;
}

.max-h-96::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 4px;
}

.max-h-96::-webkit-scrollbar-thumb:hover {
  background-color: #aaa;
}
</style>

