<template>
  <div class="profile-card">
    <img src="../../../../assets/FotoPerfil.png" alt="perfil" class="profile-picture">
    <h2>{{ firstName }} {{ lastName }}</h2>
    <p>Email: {{ email }}</p>
    <p>Password: {{ password }}</p>
    <form @submit.prevent="updateProfile">
      <div>
        <label for="firstName">First Name:</label>
        <input type="text" v-model="firstName" id="firstName" />
      </div>
      <div>
        <label for="lastName">Last Name:</label>
        <input type="text" v-model="lastName" id="lastName" />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" id="email" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" />
      </div>
      <button type="submit">Update Profile</button>
    </form>
  </div>
</template>

<script>

import {UpdateService} from "../../../../../public/server/update.service.js";

export default {
  name: 'ProfileCard',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      profilePicture: '../../../assets/FotoPerfil.png',
      passengerId: '123', // ID de ejemplo, puedes obtenerlo dinámicamente
      updateService: new UpdateService(), // Instancia de tu servicio
    };
  },
  methods: {
    async updateProfile() {
      try {
        const passengerData = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
        };

        // Llama al servicio para actualizar los datos
        const updatedData = await this.updateService.updatePassenger(this.passengerId, passengerData);

        // Si la actualización es exitosa, podrías mostrar un mensaje de éxito
        console.log('Perfil actualizado:', updatedData);
        alert('Perfil actualizado con éxito');
      } catch (error) {
        console.error('Error actualizando el perfil:', error);
        alert('Hubo un error al actualizar el perfil');
      }
    },
  },
};

</script>

<style scoped>
.profile-card {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
}
.profile-picture {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}
form div {
  margin-bottom: 10px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input {
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
}
button {
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
