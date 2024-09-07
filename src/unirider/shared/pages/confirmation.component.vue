<script>
import ToolbarComponent from "../../public/toolbar.component.vue";
import TravelInfoCardWithPrice from '../components/confirmation-info-card/confirmation.card.vue';

export default {
  name: 'confirmation',
  components: {TravelInfoCardWithPrice, ToolbarComponent},
  data() {
    return {
      distance: '9 KM',
      pickupPoint: 'Av. Gral. Salaverry, Jesús María 15072',
      carModel: 'KIA-CERATO',
      carPlate: 'A1B-234',
      driverName: 'Juan Pérez',
      driverRating: 4.5,
      price: 20
    }
  },
  methods: {
    atQualify() {
      this.$router.push('/qualify');
    }
  }
}
</script>

<template>
  <toolbarComponent/>
  <div class="config-container">
    <TravelInfoCardWithPrice
        :distance="distance"
        :pickupPoint="pickupPoint"
        :carModel="carModel"
        :carPlate="carPlate"
        :driverName="driverName"
        :driverRating="driverRating"
        :price="price"
    />
    <router-link to="/chat" class="chat-button">Acceder al chat</router-link>
    <button class="cancel-button" @click="$router.go(-1)">Cancelar</button>
    <button class="cancel-button" @click.prevent="atQualify">Terminar viaje</button>
  </div>
</template>