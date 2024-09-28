<script>
export default {
  name: "toolbar-component",
  data() {
    return {
      userPhoto: 'ruta/a/la/foto/del/usuario.jpg', // Reemplaza esto con la ruta real a la foto del usuario
      userType: localStorage.getItem('userType')
    };
  },
  methods: {
    goToMap() {
      // if (this.userType === 'conductor') {
      //   this.$router.push('/mapsDriver');
      // } else if (this.userType === 'pasajero') {
      //   this.$router.push('/maps');
      // } else {
      //   alert("Tipo de usuario no reconocido.");
      // }
      this.$router.push('/maps');
    }
  }
}
</script>

<template>
  <nav class="toolbar">
    <div class="logo">
      <h2 class="start">
        <router-link to="/home">UniRider</router-link>
      </h2>
    </div>
    <div class="nav-links">
      <a>
        <router-link to="/profile">Perfil</router-link>
      </a>
      <a>
        <router-link to="/services">Servicio</router-link>
      </a>
      <a>
        <router-link to="/plans">Planes</router-link>
      </a>
      <a @click.prevent="goToMap">Mapa</a>
      <a>
        <router-link to="/record">Historial</router-link>
      </a>
      <a>
        <router-link to="/">Cerrar Sesion</router-link>
      </a>
      <a><i class="fa fa-bell"></i></a> <!-- Icono de campana (notificaciones) -->
      <a><img :src="userPhoto" alt=" "></a>
    </div>
  </nav>
</template>

<style>
.toolbar {
  margin-top: 0;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  background-color: #0c2232;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.nav-links a {
  text-decoration: none;
  margin: 0 10px;
  font-size: 15px;
}

.nav-links a:hover {
  text-decoration: underline;
}

.toolbar h2.start {
  font-size: 2em; /* Ajusta el tamaño de la fuente al tamaño que desees */
  margin: 0;
  padding: 0;
  margin-right: auto;
}

a {
  font-weight: 500;
  color: #f0f0f0;
  text-decoration: inherit;
}
</style>
