<script >
import ProfileCard from '../components/profile-user-card/Profile-Card.vue';
import ToolbarComponent from "../../public/toolbar.component.vue";
import ToolbarDriverComponent from "../../public/toolbar-driver.component.vue";

export default {
  name: 'ProfileUser',
  components: {
    ToolbarDriverComponent,
    ToolbarComponent,
    ProfileCard
  },
  data() {
    return {
      userRole: localStorage.getItem("role")
    };
  },
}
</script>

<template>
  <!-- Mostrar la toolbar según el rol -->
  <toolbar-component v-if="userRole === 'ROLE_PASAJERO'" />
  <toolbar-driver-component v-else-if="userRole === 'ROLE_CONDUCTOR'" />
  <div class="centered">
    <ProfileCard/>
  </div>
</template>

<style scoped>
.centered {
  margin-top:20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>