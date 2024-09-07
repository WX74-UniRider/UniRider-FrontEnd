<script setup>
import MapCard from '../components/map-card/map-card.component.vue';
import TravelInfoCard from '../components/travel-info-card/travel-info-card.component.vue';
import ToolbarComponent from "../../public/toolbar.component.vue";
import OtherPaymentMethodCard from "../components/other-payment-method-card/other-payment-method.component.vue";
import {ref} from "vue";

const showOtherPaymentMethod = ref(false);

const handleRequestTrip = (selectedOption) => {
  if (selectedOption === 'Otro Metodo'){
    showOtherPaymentMethod.value = true;
  }else {
    showOtherPaymentMethod.value = false;
  }
}
</script>
<template>
  <toolbar-component/>
  <div class="card-container">
    <MapCard />
    <TravelInfoCard @request-trip="handleRequestTrip" />
    <OtherPaymentMethodCard v-if="showOtherPaymentMethod"/>
  </div>
</template>


<style scoped>
.card-container {
  display: flex;
  justify-content: space-between;
}
@media (min-width: 768px) {
  .card-container {
    flex-direction: row;
  }
}
</style>
