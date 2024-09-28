<script>
import Welcome from '../components/welcoming/welcome.component.vue';
import { AuthService } from '../../../../public/server/auth.service.js';
import {Driver} from "../model/driver.entity.js";
import {Passenger} from "../model/passenger.entity.js";

export default {
  name: 'register-user',
  components: { Welcome },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      vehiclePlate: '',
      rol: '', // This determines whether the user is a driver or a passenger
      authService: new AuthService(),
    };
  },
  methods: {
    async onSubmit() {
      // Validar que se haya seleccionado un rol
      if (!this.rol) {
        alert("Por favor seleccione un plan.");
        return;
      }

      try {
        if (this.rol === 'conductor') {
          // Crear instancia de Driver y enviar la solicitud de registro
          const driver = new Driver({
            username: this.email,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            vehiclePlate: this.vehiclePlate,
          });

          await this.authService.registerDriver(driver);

        } else if (this.rol === 'pasajero') {
          // Crear instancia de Passenger y enviar la solicitud de registro
          const passenger = new Passenger({
            username: this.email,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
          });

          await this.authService.registerPassenger(passenger);
        }

        this.$router.push('/verify');
      } catch (error) {
        console.error("Error durante el registro:", error);
        alert("Error durante el registro. Por favor, inténtelo de nuevo.");
      }
    },
    selectPlan(plan) {
      this.rol = plan;
    }
  }
}
</script>

<template>
  <div class="height-container">
    <div class="register-container">
      <img src="../../../img/logoUniRider.png" class="logo-unirider" alt="Logo UniRider">
      <h1 class="h1-register">Creación de cuenta</h1>
      <form @submit.prevent="onSubmit">
        <div>
          <label class="label-register" for="firstName">Nombre</label>
          <input class="inputs-register" type="text" id="firstName" placeholder="Ingrese su nombre" v-model="firstName" required />
        </div>
        <div>
          <label class="label-register" for="lastName">Apellido</label>
          <input class="inputs-register" type="text" id="lastName" placeholder="Ingrese su apellido" v-model="lastName" required />
        </div>
        <div>
          <label class="label-register" for="email">Correo</label>
          <input class="inputs-register" type="email" id="email" placeholder="Ingrese un correo" v-model="email" required />
        </div>
        <div>
          <label class="label-register" for="password">Contraseña</label>
          <input class="inputs-register" type="password" id="password" placeholder="Ingrese una contraseña" v-model="password" required />
        </div>
        <!-- Mostrar el campo de VehiclePlate solo si el plan seleccionado es 'conductor' -->
        <div v-if="rol === 'conductor'">
          <label class="label-register" for="vehiclePlate">Placa del Vehículo</label>
          <input class="inputs-register" type="text" id="vehiclePlate" placeholder="Ingrese la placa de su vehículo" v-model="vehiclePlate" required />
        </div>
        <div class="plan-selection">
          <button type="button" @click="selectPlan('pasajero')" :class="{ selected: rol === 'pasajero' }">Pasajero</button>
          <button type="button" @click="selectPlan('conductor')" :class="{ selected: rol === 'conductor' }">Conductor</button>
        </div>
        <div class="checkbox-group">
          <input type="checkbox" id="terms" required>
          <label for="terms">Acepto los términos y condiciones</label>
        </div>
        <button class="submit-button-register" type="submit">Registrarse</button>
        <div>
          <label class="label-register">O regístrate con</label>
        </div>
        <!-- Pasar el email como userName a Welcome component -->
        <welcome :userName="email"/>
      </form>
    </div>
  </div>
</template>

<style scoped>
.height-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.register-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background-color: #2DB3CB;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.logo-unirider {
  width: 50%;
  max-width: 300px;
  margin: 1rem auto;
}

.h1-register {
  color: #FFF;
  font-size: 2rem;
  text-align: center;
  margin-top: 0.5rem;
}

.inputs-register, .submit-button-register {
  width: 90%;
  max-width: 360px;
  padding: 1rem;
  margin: 0.5rem 0;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.submit-button-register {
  background-color: #39BFBF;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button-register:hover {
  background-color: #28a3b3;
}

.label-register {
  width: 100%;
  text-align: center;
  margin: 0.5rem 0;
  color: white;
}

.plan-selection {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
}

.plan-selection button {
  margin: 0.5rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
}

.plan-selection button.selected {
  background-color: #39BFBF;
  color: white;
}

.checkbox-group {
  display: flex;
  align-items: center;
  justify-content: start;
}

.checkbox-group label {
  margin-left: 5px;
  color: white;
}

.social-media-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 1rem;
}

@media (max-width: 768px) {
  .logo-unirider {
    width: 70%;
  }

  .h1-register {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .logo-unirider {
    width: 80%;
  }

  .h1-register {
    font-size: 1.2rem;
  }
}
</style>

