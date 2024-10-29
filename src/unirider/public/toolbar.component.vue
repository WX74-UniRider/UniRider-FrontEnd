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
      <a @click.prevent="logout">Cerrar Sesión</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "toolbar-component",
  data() {
    return {
      userPhoto: 'src/assets/FotoPerfil.png', // Reemplaza esto con la ruta real a la foto del usuario
      userType: localStorage.getItem('userType')
    };
  },
  methods: {
    goToMap() {
      this.$router.push('/maps');
    },
    logout() {
      // Limpiar todas las variables del localStorage
      localStorage.clear();
      // Redirigir a la página de inicio de sesión o a la página de inicio
      this.$router.push('/');
    }
  }
}
</script>

<style>
.toolbar {
  margin-top: 0;
  background-color: #1c2d3f; /* Un color más suave */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); /* Sombra ligera */
}

.nav-links a {
  margin: 0 15px;
  font-size: 16px;
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

.profile-photo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
