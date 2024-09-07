<script>
import ToolbarComponent from './unirider/public/toolbar.component.vue';
import LoginUser from "./unirider/shared/pages/login-user.component.vue";
import ChooseUser from "./unirider/shared/pages/choose-user.vue";
import ChatUser from "./unirider/shared/pages/chat-user.vue";
import Confirmation from "./unirider/shared/pages/confirmation.component.vue";
import ProfileUser from "./unirider/shared/pages/Profile-user.component.vue";

export default {
  components: {
    ProfileUser,
    Confirmation,
    ChatUser,
    ChooseUser,
    LoginUser
  }
}
</script>

<template>
  <div id="app">
    <router-view/>
  </div>

  <!--ChatUser/>-->

</template>

<style scoped>

</style>
