<script>
export default {
  name: 'PassengerInfoCardWithPrice',
  props: {
    distance: String,
    pickupPoint: String,
    passengerName: String,
    price: Number
  },
}
</script>

<template>
  <div class="passenger-info-card">
    <table>
      <tr>
        <th colspan="2"><h2>Información del Pasajero</h2></th>
      </tr>
      <tr>
        <td>Distancia:</td>
        <td>{{ distance }}</td>
      </tr>
      <tr>
        <th colspan="2"><h2>Pasajero:</h2></th>
        <td>{{ passengerName}}</td>
      </tr>
      <tr>
        <td>Punto de recojo:</td>
        <td>{{ pickupPoint }}</td>
      </tr>
      <tr>
        <td>Precio:</td>
        <td>{{ price }}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.passenger-info-card {
  color: white;
  background-color: black;
  max-width: 60%;
  margin:  auto;
  margin-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  text-align: center;
}

h2{
  color: white;
}
</style>