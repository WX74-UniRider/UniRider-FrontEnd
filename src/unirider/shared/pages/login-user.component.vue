<template>
  <div class="full-height-container">
    <div class="container">
      <img src="../../../img/logoUniRider.png" class="logo-UniRider" alt="LogoUniRider">
      <h1 class="h1-login">Bienvenido a UniRider</h1>
      <form @submit.prevent="onSubmitLogin">
        <div>
          <label class="label-login" for="email">Correo</label>
          <input class="inputs-login" type="email" id="email" placeholder="Ingrese un correo" v-model="email" required/>
        </div>
        <div>
          <label class="label-login" for="password">Contraseña</label>
          <input class="inputs-login" type="password" id="password" placeholder="Ingrese una contraseña" v-model="password" required/>
        </div>
        <div class="label-login">
          <label>¿Has olvidado tu contraseña?</label>
        </div>
        <div>
          <button class="submit-button-login" type="submit">Iniciar Sesión</button>
        </div>
        <div>
          <button @click.prevent="onCreateAccount" class="submit-button-login" type="submit">Crear cuenta</button>
        </div>
        <label class="other-login">O inicie con</label>
        <div class="other-app-login">
          <svg xmlns="http://www.w3.org/2000/svg" height="30" width="25" viewBox="0 0 488 512" style="margin-right: 15px">
            <path fill="#ff0f0f" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" height="30" width="25" viewBox="0 0 512 512" style="margin-right: 15px">
            <path fill="#007cdb" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" height="30" width="25" viewBox="0 0 384 512">
            <path fill="#000000" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
          </svg>
        </div>
      </form>
      <!-- Código de AlertLogin en login-user.vue -->
      <AlertLogin :visible="alertVisible" :message="alertMessage" @close="alertVisible = false" />
    </div>
  </div>
</template>

<script>
import { UserApiService } from '../services/user-api.service.js';
import { AuthService } from "../../../../public/server/auth.service.js";
import AlertLogin from './alerts/alert-login.vue';

export default {
  name: "login-user",
  components: {
    AlertLogin
  },
  data() {
    return {
      email: '',
      password: '',
      authService: new AuthService(),
      alertVisible: false,
      alertMessage: ''
    };
  },
  methods: {
    async onSubmitLogin() {
      console.log("Intentando iniciar sesión...");
      try {
        const user = await this.authService.authenticate(this.email, this.password);
        console.log("Respuesta de autenticación:", user);

        if (user && user.token) {
          localStorage.setItem('userId', user.id);
          localStorage.setItem('token', user.token);
          localStorage.setItem('role', user.roles[0]);
          this.$router.push('/verify');
        } else {
          this.alertMessage = "Credenciales incorrectas.";
          this.alertVisible = true;
          console.log("Mostrando alerta de credenciales incorrectas");
        }
      } catch (error) {
        console.error("Error durante el inicio de sesión:", error);
        this.alertMessage = "Credenciales incorrectas.";
        this.alertVisible = true;
        console.log("Mostrando alerta de error");
      }
    },
    onCreateAccount() {
      this.$router.push('/create');
    }
  }
}
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.full-height-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2DB3CB;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  background-color: #2DB3CB;
}

.logo-UniRider {
  width: 50%;
  max-width: 300px;
  margin: 1rem auto;
}

.h1-login {
  color: white;
  font-size: 2.5rem;
  text-align: center;
  margin-top: 0.5rem;
}

.inputs-login, .submit-button-login {
  width: 90%;
  max-width: 360px;
  padding: 1rem;
  margin: 0.5rem 0;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.inputs-login:focus {
  border-color: #39BFBF;
  box-shadow: 0 0 5px rgba(57, 191, 191, 0.5);
}

.submit-button-login {
  background-color: #39BFBF;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  border-radius: 5px;
}

.submit-button-login:hover {
  background-color: #28a3b3;
  transform: scale(1.05);
}

.label-login, .other-login {
  width: 100%;
  text-align: center;
  margin: 0.5rem 0;
  color: #333;
}

.other-app-login {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
  padding: 0.5rem; /* Ajuste en padding para reducir espacio */
}

@media (max-width: 768px) {
  .logo-UniRider {
    width: 70%;
  }

  .h1-login {
    font-size: 1.8rem;
  }
}

@media (max-width: 480px) {
  .logo-UniRider {
    width: 80%;
  }

  .h1-login {
    font-size: 1.5rem;
  }
}
</style>
