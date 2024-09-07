<script >
import ProfileCard from '../components/profile-user-card/Profile-Card.vue';
import ToolbarComponent from "../../public/toolbar.component.vue";

export default {
  name: 'ProfileUser',
  components: {
    ToolbarComponent,
    ProfileCard
  }
}
</script>

<template>
  <toolbar-component/>
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