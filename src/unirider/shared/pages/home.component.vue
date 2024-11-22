<script setup>
import AppUniversityCard from "../components/app-university-card/app-university-card.component.vue";
import AppInformationCard from "../components/app-information-card/app-information-card.component.vue";
import AppDestinosCard from "../components/app-destinos-card/app-destinos-card.component.vue";
import ToolbarComponent from "../../public/toolbar.component.vue";
import ToolbarDriverComponent from "../../public/toolbar-driver.component.vue";

// Obtener el rol desde el localStorage
const userRole = localStorage.getItem("role");
</script>

<template>
  <!-- Mostrar la toolbar según el rol -->
  <toolbar-component v-if="userRole === 'ROLE_PASAJERO'" />
  <toolbar-driver-component v-else-if="userRole === 'ROLE_CONDUCTOR'" />
  <div class="cards">
    <div>
      <AppInformationCard />
    </div>
    <div>
      <AppUniversityCard />
    </div>
    <div>
      <AppDestinosCard />
    </div>
  </div>
</template>

<style>
body {
  background-color: #f3f6f9; /* Fondo más claro */
  margin: 0;
  font-family: "Inter", system-ui, -apple-system, sans-serif;
}

.cards {
  display: flex;
  justify-content: center;
  gap: 20px; /* Mantiene el espacio entre las tarjetas */
  flex-wrap: wrap;
  margin-top: 0; /* Asegura que no haya margen superior */
  min-height: calc(100vh - 67px);
}
</style>
