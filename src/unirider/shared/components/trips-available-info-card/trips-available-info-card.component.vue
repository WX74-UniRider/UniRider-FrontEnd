<script>
export default {
  name: 'TripPassengerInfoCard',
  methods: {
    atConfirm() {
      this.$router.push('/confirmPassenger');
    }
  }
}
</script>

<template>
  <div class="trips-available-info-card">
    <table>
      <tr>
        <th colspan="2"><h2>Información de Usuarios Disponibles</h2></th>
      </tr>
      <tr>
        <td>Distancia:</td>
        <td>9 KM</td>
      </tr>
      <tr>
        <th colspan="2"><h2>Viaje de Usuario</h2></th>
      </tr>
      <tr>
        <td>Punto de recojo:</td>
        <td>Av. Gral. Salaverry, Jesús María 15072</td>
      </tr>
      <tr>
        <td>Pasajero:</td>
        <td colspan="2">
          <span class="passenger-name">Maria Belen</span>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <div class="payment-method">
            <span>Precio:</span>
            <input type="number" class="price-input">
          </div>
        </td>
      </tr>
    </table>
    <button @click.prevent="atConfirm" class="request-trip-button">Aceptar viaje</button>
  </div>
</template>

<style scoped>
.trips-available-info-card {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  padding: 10px;
  text-align: left;
}

th {
  background-color: #f4f4f4;
  font-size: 1.2em;
}

.passenger-name {
  font-weight: bold;
}

.payment-method {
  display: flex;
  align-items: center;
}

.payment-method span {
  margin-right: 10px;
  font-weight: bold;
}

.price-input {
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.request-trip-button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;
  transition: background-color 0.3s;
}

.request-trip-button:hover {
  background-color: #0056b3;
}
</style>
