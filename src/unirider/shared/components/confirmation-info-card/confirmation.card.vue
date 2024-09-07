<script>
import AutoImage from '../../../../assets/auto.jpg';
export default {
  name: 'TravelInfoCardWithPrice',
  props: {
    distance: String,
    pickupPoint: String,
    carModel: String,
    carPlate: String,
    driverName: String,
    driverRating: Number,
    price: Number
  },
  data() {
    return {
      autoImage: AutoImage
    }
  }
}
</script>

<template>
  <div class="travel-info-card">
    <table>
      <tr>
        <th colspan="2"><h2>Información del viaje</h2></th>
      </tr>
      <tr>
        <td>Distancia:</td>
        <td>{{ distance }}</td>
      </tr>
      <tr>
        <th colspan="2"><h2>Conductor:</h2></th>
      </tr>
      <tr>
        <td>Punto de recojo:</td>
        <td>{{ pickupPoint }}</td>
      </tr>
      <tr>
        <td rowspan="2"><img class="auto-image" :src="autoImage" alt="Auto"/></td>
        <td>{{ carModel }}</td>
      </tr>
      <tr>
        <td>{{ carPlate }}</td>
      </tr>
      <tr>
        <td colspan="2">
          <span class="driver-name">{{ driverName }}</span>
          <span class="driver-rating">{{ driverRating }}</span>
          <span class="star-icon">⭐</span>
        </td>
      </tr>
      <tr>
        <td>Precio:</td>
        <td>{{ price }}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.travel-info-card {

  color: white;
  background-color: black;
  max-width: 60%;
  margin:  auto;
  margin-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
}
</style>