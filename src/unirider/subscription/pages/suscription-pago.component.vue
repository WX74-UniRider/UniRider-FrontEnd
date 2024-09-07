<template>

  <main>
    <div class="container">
      <pv-panel class="payment-panel">
        <template #header>
          <!-- Aplicamos una clase personalizada al encabezado -->
          <span class="header-label">{{ $t('Payment') }}</span>
        </template>
        <form @submit="onSubmit" class="payment-form">

          <div class="p-field">
            <label for="activity-title" class="label">{{ $t('Correo') }}</label>
            <pv-input-text class="input" v-model="correo" id="correo" :placeholder="$t('Enter a Correo')"/>
          </div>

          <div class="p-field">
            <label for="activity-title" class="label">{{ $t('Tarjeta') }}</label>
            <pv-input-text class="input" v-model="tarjeta" id="tarjeta" :placeholder="$t('xxxx - xxxx - xxxx - xxxx')"/>

            <!-- Aquí se agrega margen inferior para separación -->
            <pv-input-text class="input-tarjeta-fecha" v-model="tarjeta_fecha" id="tarjeta_fecha" :placeholder="$t('MM  / YY')"/>

            <!-- Otra opción es agregar un margen superior -->
            <pv-input-text class="input-tarjeta-codigo" v-model="tarjeta_codigo" id="tarjeta_codigo" :placeholder="$t('CVV')"/>
          </div>


          <div class="p-field">
            <label for="activity-title" class="label">{{ $t('Nombre') }}</label>


            <pv-input-text class="input" v-model="nombre" id="nombre" :placeholder="$t('Enter a Nombre')"/>
          </div>

        </form>

        <div class="button-container">
          <router-link to="/home">
            <pv-button class="com-button" severity="primary" :label="$t('Pagar')" />
          </router-link>
          <router-link to="/home">
            <pv-button class="com-button" severity="danger"  :label="$t('Cancel')"/>
          </router-link>
        </div>

      </pv-panel>
    </div>
  </main>
</template>

<script>

export default {
  name: "subscription-pago.vue",
  //components: {Toolbar, Footer},
  data() {
    return {
      correo: "",
      tarjeta: "",
      tarjeta_fecha:"",
      tarjeta_codigo:"",
      nombre: "",
      region: "",
    }
  },
}
</script>

<!-- Styling -->
<style scoped>

main {

  height: 98vh;
  width: 99vw;
  //background: linear-gradient(180deg, rgb(45, 179, 203) 0%, rgb(63.48, 121.68, 164) 100%);
  background:#2DB3CB;
  display: flex;
  justify-content: center;
  align-items: center;


}
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 650px;
  width: 100%;
}
.payment-panel {
  max-width: 450px;

  margin: 0 auto;
  background: linear-gradient(180deg, rgb(65.45, 95.37, 140.25) 0%, rgb(85.78, 183.81, 183.81) 100%);
  border: 0px;
}
.header-label {
  color:#FFFFFF;
  font-family: "Inter-Medium", sans-serif;
  font-size: 24px;
}
.p-field {
  margin-bottom: 16px;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-container .com-button {
  margin: 0 10px;
}

.input {
  width: 100%;
  color:#000000;
  margin-top: 5px;
}
.input-tarjeta-fecha {
  width: 64.5%;
  margin-top: 5px;
  color:#000000;
  font-family: "Inter-Regular", sans-serif;
  font-size: 16px;
}
.input-tarjeta-codigo {
  width: 34%;
  margin-left: 5px;
  color:#000000;
  font-family: "Inter-Regular", sans-serif;
  font-size: 16px;
}
.label{
  color:#FFFFFF;
  font-family: "Inter-Regular", sans-serif;
  font-size: 18px;

}
/* Responsive Styles */
@media screen and (max-width: 768px) {
  .container {
    padding: 0 20px; /* Adjust as needed */
  }
}

@media screen and (max-width: 576px) {
  .p-field {
    width: 100%; /* Make fields take full width */
  }
}

</style>