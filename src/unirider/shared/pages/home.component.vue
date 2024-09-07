<script setup>

import AppUniversityCard from "../components/app-university-card/app-university-card.component.vue";
import AppInformationCard from "../components/app-information-card/app-information-card.component.vue";
import AppDestinosCard from "../components/app-destinos-card/app-destinos-card.component.vue";
import ToolbarComponent from "../../public/toolbar.component.vue";
</script>

<template>
  <toolbar-component/>
  <div class="cards">
    <div>
      <AppInformationCard/>
    </div>
    <div>
      <AppUniversityCard/>
    </div>
    <div>
      <AppDestinosCard/>
    </div>
  </div>
</template>

<style>
body{
  background-color: #3F7AA4;
  margin: 0;
}



.cards{
  display: flex;
  justify-content: space-between;
}

</style>