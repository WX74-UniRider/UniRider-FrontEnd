<script>
import ToolbarComponent from './unirider/public/toolbar.component.vue';
import LoginUser from "./unirider/shared/pages/login-user.component.vue";
import ChooseUser from "./unirider/shared/pages/choose-user.vue";
import ChatUser from "./unirider/shared/pages/chat-user.vue";
import Confirmation from "./unirider/shared/pages/confirmation.component.vue";
import ProfileUser from "./unirider/shared/pages/Profile-user.component.vue";
import appConductorFinderCardComponent from "./unirider/shared/components/app-conductor-finder-card/app-conductor-finder-card.component.vue";
import AppConductorFinderComponent from "./unirider/shared/pages/conductor-finder.component.vue"
import AppBookingFastForm from "./unirider/shared/components/app-booking-fast-form/app-booking-fast-form.component.vue";


export default {
  components: {
    AppBookingFastForm,
    ProfileUser,
    Confirmation,
    ChatUser,
    ChooseUser,
    LoginUser,
    appConductorFinderCardComponent,
    AppConductorFinderComponent
  }
}
</script>

<template>
  <!--AppConductorFinderComponent></--AppConductorFinderComponent>-->

  <AppBookingFastForm
      :passengerId=1
      :driverId=1
      :destination="SanMiguel"
  />

  <!--ChatUser/>-->

</template>

<style scoped>

</style>
