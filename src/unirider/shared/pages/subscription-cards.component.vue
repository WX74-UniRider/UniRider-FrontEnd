<script setup>

import FreeSubscriptionCard from "../components/free-subscription-card/free-subscription-card.component.vue";
import PremiumStudentCard from "../components/premium-student-card/premium-student-card.component.vue";
import PremiumConductorCard from "../components/premium-conductor-card/premium-conductor-card.component.vue";
import ToolbarComponent from "../../public/toolbar.component.vue";
</script>

<template>
  <toolbar-component/>
  <div class="text-align-center">
    <h1>PLANES DE SUBSCRIPCIÓN</h1>
  </div>
  <div class="subscription-card">
    <div>
      <FreeSubscriptionCard/>
    </div>
    <div>
      <PremiumStudentCard/>
    </div>
    <div>
      <PremiumConductorCard/>
    </div>
  </div>
</template>

<style>
body{
  background-color: #3F7AA4;
}

.text-align-center{
  text-align: center;
}

.subscription-card{
  display: flex;
  justify-content: space-around;
  padding-top: 30px;
}
</style>