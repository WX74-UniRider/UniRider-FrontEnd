<template>
  <div>
    <div v-if="trips.length > 0">
      <div v-for="trip in trips" :key="trip.id" class="card-container" @click="navigateToQualify(trip)">
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
  </div>
</template>

<script>
import {TripService} from '../../../../public/server/trip.service';
import TravelRecordContainer from "../components/travel-record/travel-record-container.vue";

export default {
  components: {TravelRecordContainer},
  data() {
    return {
      trips: [],
    };
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
    navigateToQualify(trip) {
      // Pasar también el driverId al navegar a la página de calificación
      this.$router.push({name: 'Qualify', params: {tripId: trip.id, driverId: trip.driver.id}});
    }
  },
  created() {
    this.fetchTrips();
  }
};
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

@media (min-width: 768px) {
  .card-container {
    flex-direction: row;
  }
}
</style>
