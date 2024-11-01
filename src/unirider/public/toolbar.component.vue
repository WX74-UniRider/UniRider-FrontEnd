<template>
  <nav class="toolbar">
    <div class="logo">
      <h2 class="start">
        <router-link to="/home">UniRider</router-link>
      </h2>
    </div>
    <div class="nav-links">
      <a>
        <router-link to="/profile" class="nav-link">Perfil</router-link>
      </a>
      <a>
        <router-link to="/services" class="nav-link">Servicio</router-link>
      </a>
      <a>
        <router-link to="/plans" class="nav-link">Planes</router-link>
      </a>
      <a @click.prevent="goToMap" class="nav-link">Mapa</a>
      <a>
        <router-link to="/record" class="nav-link">Historial</router-link>
      </a>
      <a @click.prevent="logout" class="nav-link">Cerrar Sesión</a>
    </div>
    <img :src="userPhoto" alt="Foto de perfil" class="profile-photo" v-if="userPhoto"/>
  </nav>
</template>

<script>
export default {
  name: "toolbar-component",
  data() {
    return {
      userPhoto: 'src/assets/FotoPerfil.png',
      userType: localStorage.getItem('userType')
    };
  },
  methods: {
    goToMap() {
      this.$router.push('/maps');
    },
    logout() {
      localStorage.clear();
      this.$router.push('/');
    }
  }
}
</script>

<style>
/* Estilo de la barra de herramientas */
.toolbar {
  margin-top: 0;
  background-color: #1c2d3f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  font-family: 'Roboto', sans-serif;
}

/* Logo */
.logo h2.start {
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
  color: #f0f0f0;
}

.logo h2.start a {
  color: #f0f0f0;
  text-decoration: none;
}

.nav-links {
  display: flex;
  align-items: center;
}

.nav-links a {
  position: relative;
  margin: 0 15px;
  font-size: 16px;
}

.nav-link {
  font-weight: 500;
  color: #f0f0f0;
  text-decoration: none;
  transition: color 0.3s;
}

/* Efecto de subrayado animado */
.nav-link::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: #f1c40f;
  transition: width 0.3s;
  position: absolute;
  bottom: -5px;
  left: 0;
}

.nav-link:hover {
  color: #f1c40f;
}

.nav-link:hover::after {
  width: 100%;
}

/* Enlace activo */
.nav-link.router-link-exact-active {
  color: #f1c40f;
}

.nav-link.router-link-exact-active::after {
  width: 100%;
}

/* Estilo para la foto de perfil */
.profile-photo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

/* Adaptabilidad para dispositivos móviles */
@media (max-width: 768px) {
  .toolbar {
    flex-direction: column;
    padding: 10px;
  }
  .nav-links {
    flex-direction: column;
  }
  .nav-links a {
    margin: 10px 0;
  }
}
</style>