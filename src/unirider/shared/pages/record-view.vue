<template>
  <toolbar-component></toolbar-component>
  <div class="cards-wrapper">
    <div v-if="paginatedTrips.length > 0">
      <div v-for="trip in paginatedTrips" :key="trip.id" class="card-container">
        <travel-record-container
            :nombre="trip.driver.username"
            :destino="trip.destination"
            :origen="'Origen por definir'"
            :duracion="'Duración por definir'"
            :estatus="trip.status"
            :fecha="new Date(trip.departureTime).toLocaleString()"
            :precio="trip.price || 'Precio no disponible'"
            :foto="'path/to/default/photo.png'"
            :estrellas="4"
            :estrella="'path/to/star/icon.png'"
        />
      </div>
    </div>
    <div v-else>
      <p>No hay viajes disponibles</p>
    </div>
    <div class="paginator-container">
      <pv-paginator
          :first="currentPage * rowsPerPage"
          :rows="rowsPerPage"
          :total-records="trips.length"
          @page="onPageChange"
          :template="'PrevPageLink PageLinks NextPageLink'"
      />
    </div>
  </div>
</template>

<script>
import { TripService } from '../../../../public/server/trip.service';
import TravelRecordContainer from "../components/travel-record/travel-record-container.vue";
import ToolbarComponent from "../../public/toolbar.component.vue";

export default {
  components: {
    ToolbarComponent,
    TravelRecordContainer,
  },
  data() {
    return {
      trips: [],
      currentPage: 0,
      rowsPerPage: 3, // Solo se mostrarán 3 cards por página
    };
  },
  computed: {
    paginatedTrips() {
      const start = this.currentPage * this.rowsPerPage;
      const end = start + this.rowsPerPage;
      return this.trips.slice(start, end);
    },
  },
  methods: {
    async fetchTrips() {
      try {
        const response = await TripService.getAllTrips();
        this.trips = response;
      } catch (error) {
        console.error('Error al obtener los viajes:', error);
      }
    },
    onPageChange(event) {
      this.currentPage = event.page;
    }
  },
  created() {
    this.fetchTrips();
  },
};
</script>

<style scoped>
.cards-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.card-container {
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
}

.paginator-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
}

@media (min-width: 768px) {
  .card-container {
    max-width: 600px;
  }
}
</style>
