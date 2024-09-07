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
export default {
  name: 'ProfileCard',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      profilePicture: '../../../assets/FotoPerfil.png'
    };
  },
  methods: {
    updateProfile() {
      // Aquí podrías añadir la lógica para actualizar el perfil
      console.log('Profile updated', this.firstName, this.lastName, this.email, this.password);
    }
  }
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