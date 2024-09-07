<script>
export default {
  name: 'ChooseUser',
  props: {
    nombre: String
  },
  methods: {
    handleFileChange(index) {
      const fileInput = this.$refs[`fileInput${index}`]; // Referencia al input de archivo correspondiente
      const file = fileInput.files[0]; // Archivo seleccionado por el usuario
      if (file) {
        // Aquí puedes procesar el archivo como lo desees (por ejemplo, mostrar una vista previa)
        console.log(`Archivo ${index}:`, file);
      } else {
        console.log(`No se seleccionó ningún archivo para el índice ${index}`);
      }
    },
    onVerifyAccount() {
      console.log("Login user");
      this.$router.push('/home');
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="header">
      <div>
        <img src="../../../img/logoUniRider.png" class="logoo">
        <h1 class="title">Bienvenidos a UniRider nuevo socio: {{nombre}}</h1>
        <h2>Solo falta ingresar sus datos. Siga las indicaciones y podrá comenzar.</h2>
      </div>
    </div>
    <div class="image-container">
      <h3>Licencia de conducir</h3>
      <img src="../../../assets/licencia.png" class="image-preview">
      <input type="file" @change="handleFileChange(1)" accept="image/*">
    </div>
    <div class="image-container">
      <h3>Seguro vehicular</h3>
      <img src="../../../assets/soat.jpg" class="image-preview">
      <input type="file" @change="handleFileChange(2)" accept="image/*"> <!-- Segundo archivo -->
    </div>
    <div class="image-container">
      <h3>Carnet universitario</h3>
      <img src="../../../assets/carnet.png" class="image-preview">
      <input type="file" @change="handleFileChange(3)" accept="image/*"> <!-- Tercer archivo -->
    </div>
    <div>
      <h2 class="content">Seleccionar los archivos indicados</h2>
    </div>
    <div @click.prevent="onVerifyAccount" class="centered">
      <button class="btn-salir">Confirmar</button>
    </div>
  </div>
</template>

<style scoped>
.logoo {
  position: absolute;
  top: 25px; /* Ajusta esta distancia desde la parte superior */
  left: 20px; /* Ajusta esta distancia desde el lado izquierdo */
  width: 120px; /* Ajusta el ancho del logo según sea necesario */
  height: auto; /* Permite que la altura se ajuste automáticamente según el ancho */
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  margin-bottom: auto; /* Empuja hacia abajo desde la parte superior */
}

.centered {
  text-align: center;
}

.content {
  margin-top: 30px; /* Ajusta según sea necesario */
}

.image-container {
  margin-bottom: 20px; /* Ajusta según sea necesario */
}

.image-preview {
  max-width: 300px; /* Ajusta el tamaño de la imagen según sea necesario */
}

.btn-salir {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #2DB3CB;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-salir:hover {
  background-color: #228b9d; /* Color de fondo en hover */
}
.header {
  background-color: #FFC736; /* Color de fondo de la franja */
  width: 100%; /* Ancho completo */
  padding: 20px 0; /* Espacio interno */
  text-align: center; /* Alineación del texto */
  margin-bottom: 20px; /* Espacio entre el encabezado y el resto del contenido */
}

</style>

<style>
body {
  background-color: #2DB3CB; /* Color de fondo */
}
</style>
