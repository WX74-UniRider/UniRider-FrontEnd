<script>
import AutoImage from '../../../../assets/auto.jpg';
import OtherPaymentMethod from "../other-payment-method-card/other-payment-method.component.vue";
export default {
  name: 'TravelInfoCard',
  components: {
    OtherPaymentMethod
  },
  data() {
    return {
      autoImage: AutoImage,
      selectedOption: 'Cash',
      options: ['Cash', 'Yape/Plin', 'Otro Metodo'],
      showOtherPaymentMethod: false
    }
  },
  watch: {
    selectedOption(newVal) {
      this.$emit('request-trip', newVal);
      if (newVal === 'Otro Metodo') {
        this.showOtherPaymentMethod = true;
      } else {
        this.showOtherPaymentMethod = false;
      }
    }
  },
  methods: {
    atConfirm() {
      this.$router.push('/confirm');
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
        <td>9 KM</td>
      </tr>
      <tr>
        <th colspan="2"><h2>Conductor disponible</h2></th>
      </tr>
      <tr>
        <td>Punto de recojo:</td>
        <td>Av. Gral. Salaverry, Jesús María 15072</td>
      </tr>
      <tr>
        <td rowspan="2"><img class="auto-image" :src="autoImage" alt="Auto"/></td>
        <td>KIA-CERATO</td>
      </tr>
      <tr>
        <td>A1B-234</td>
      </tr>
      <tr>
        <td colspan="2">
          <span class="driver-name">Juan Pérez</span>
          <span class="driver-rating">4.5</span>
          <span class="star-icon">⭐</span>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <div class="payment-method">
            <span>Método de Pago:</span>
            <select v-model="selectedOption" class="styled-select">
              <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
            </select>
          </div>
        </td>
      </tr>
      <tr v-if="showOtherPaymentMethodModal">
        <td colspan="2">
          <OtherPaymentMethod/>
        </td>
      </tr>
    </table>
    <button @click.prevent="atConfirm" class="request-trip-button">Solicitar viaje</button>
  </div>
</template>

<style>
.travel-info-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.travel-info-card table td {
  text-align: center;
}

.auto-image {
  width: 70px;
  height: auto;
}

.driver-name {
  margin-right: 10px;
}

.star-icon {
  margin-left: 5px;
}

.request-trip-button {
  background-color: #39BFBF;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
}

.payment-method {
  display: flex;
  align-items: center;
  gap: 10px;
}

.styled-select {
  font-size: 16px;
  width: 50%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: transparent;
  appearance: none; /* This is to remove the default arrow of select element */
}

.styled-select:focus {
  border-color: #007bff;
  outline: none;
}
</style>
