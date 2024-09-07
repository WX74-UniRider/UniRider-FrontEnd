<script>
import ToolbarComponent from "../../public/toolbar.component.vue";
import PassengerInfoCardWithPrice from '../components/confirmation-passenger-info-card/confirmation-passenger-info-card.vue';

export default {
  name: 'confirmationPassenger',
  components: {PassengerInfoCardWithPrice, ToolbarComponent},
  data() {
    return {
      distance: '9 KM',
      pickupPoint: 'Av. Gral. Salaverry, Jesús María 15072',
      passengerName: 'Maria Belen',
      price: 20
    }
  },
  methods: {
    atHome() {
      this.$router.push('/home');
    }
  }
}
</script>

<template>
  <toolbarComponent/>
  <div class="config-container">
    <PassengerInfoCardWithPrice
        :distance="distance"
        :pickupPoint="pickupPoint"
        :passengerName="passengerName"
        :price="price"
    />
    <router-link to="/chat" class="chat-button">Acceder al chat</router-link>
    <button class="cancel-button" @click="$router.go(-1)">Cancelar</button>
    <button class="cancel-button" @click.prevent="atHome">Terminar viaje</button>
  </div>
</template>