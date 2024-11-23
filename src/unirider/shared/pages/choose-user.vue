<script>
import axios from "axios";

export default {
  name: "ChooseUser",
  data() {
    return {
      nombre: this.$route.query.nombre || "Usuario", // Por si no llega el nombre
      rol: null, // Inicializar rol como null
      fileUploaded: false, // Para rastrear si se subió un archivo
      file: null, // Almacenar el archivo cargado
    };
  },
  methods: {
    handleFileChange(index) {
      const fileInput = this.$refs[`fileInput${index}`];
      const file = fileInput.files[0];
      if (file) {
        console.log(`Archivo ${index} seleccionado:`, file);
        this.fileUploaded = true; // Cambiar a true si se seleccionó un archivo
        this.file = file; // Almacenar el archivo
      } else {
        console.log(`No se seleccionó ningún archivo para el índice ${index}`);
        this.fileUploaded = false;
        this.file = null;
      }
    },
    async getPassengerId(userId) {
      try {
        const response = await axios.get(
            `http://localhost:8080/api/v1/profile/passengers/user/${userId}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
        );
        return response.data.id;
      } catch (error) {
        console.error("Error obteniendo el ID del pasajero:", error);
        throw error;
      }
    },
    async onVerifyAccount() {
      if (this.fileUploaded && this.file) {
        try {
          const userId = localStorage.getItem("userId");
          const passengerId = await this.getPassengerId(userId);

          const fileUrl = "URL_DEL_ARCHIVO"; // Reemplazar con la URL del archivo

          // Actualizar la URL en el backend
          await axios.patch(
              `http://localhost:8080/api/v1/profile/${passengerId}/idCardUrl`,
              { url: fileUrl },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
          );

          console.log("URL actualizada, redirigiendo a la página de inicio...");
          this.$router.push("/home"); // Redirigir a la página principal si todo es correcto
        } catch (error) {
          console.error("Error al actualizar la URL:", error);
          alert("Error al actualizar la URL. Revise la consola.");
        }
      } else {
        alert("Por favor, suba el archivo requerido antes de continuar.");
      }
    },
  },

  mounted() {
    this.rol = localStorage.getItem("role"); // Obtener el rol del local storage
    console.log("Rol actual:", this.rol); // Debug para verificar el rol
  },
};
</script>

<template>
  <div class="container">
    <div class="header">
      <img src="../../../img/logoUniRider.png" class="logo" alt="Logo UniRider">
      <h1>Bienvenido a UniRider, {{ nombre }}!</h1>
      <p>Por favor, sube los documentos necesarios para completar tu perfil.</p>
    </div>

    <div class="form-container">
      <!-- Sección para conductor -->
      <div v-if="rol === 'ROLE_CONDUCTOR'">
        <div class="field">
          <label for="license">Licencia de conducir</label>
          <input type="file" id="license" @change="handleFileChange(1)" accept="image/*" ref="fileInput1">
        </div>
        <div class="field">
          <label for="insurance">Seguro vehicular</label>
          <input type="file" id="insurance" @change="handleFileChange(2)" accept="image/*" ref="fileInput2">
        </div>
      </div>

      <!-- Sección para pasajero -->
      <div v-else-if="rol === 'ROLE_PASAJERO'">
        <div class="field">
          <label for="studentCard">Carnet universitario</label>
          <input type="file" id="studentCard" @change="handleFileChange(3)" accept="image/*" ref="fileInput3">
        </div>
      </div>

      <!-- Botón de confirmación -->
      <button @click.prevent="onVerifyAccount" class="btn">Confirmar</button>
    </div>
  </div>
</template>

<style scoped>
/* Estilos generales */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
  color: #333;
}

/* Contenedor principal */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 600px;
  margin: auto;
}

/* Encabezado */
.header {
  text-align: center;
  margin-bottom: 20px;
}

.header .logo {
  width: 120px;
  margin-bottom: 10px;
}

.header h1 {
  font-size: 24px;
  color: #333;
}

.header p {
  font-size: 16px;
  color: #555;
}

/* Formulario */
.form-container {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
}

/* Campos del formulario */
.field {
  margin-bottom: 15px;
}

.field label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
  color: #555;
}

.field input[type="file"] {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
}

/* Botón */
.btn {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #2db3cb;
  color: #fff;
  font-size: 16px;
  text-align: center;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #228b9d;
}
</style>
