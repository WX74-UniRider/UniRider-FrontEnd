<script>
import axios from "axios";

export default {
  name: "ChooseUser",
  data() {
    return {
      nombre: this.$route.query.nombre || "Usuario",
      rol: null,
      fileUploaded: false,
      file: null,
      url: "", // Para almacenar la URL proporcionada
    };
  },
  methods: {
    handleFileChange(index) {
      const fileInput = this.$refs[`fileInput${index}`];
      const file = fileInput.files[0];
      if (file) {
        console.log(`Archivo ${index} seleccionado:`, file);
        this.fileUploaded = true;
        this.file = file;
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
    async checkExistingUrl(passengerId) {
      try {
        const response = await axios.get(
            `http://localhost:8080/api/v1/profile/${passengerId}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
        );
        // Verificar si existe la URL del carnet
        if (response.data.idCardUrl) {
          console.log("El pasajero ya tiene una URL configurada.");
          this.$router.push("/home"); // Redirigir al home
        }
      } catch (error) {
        console.error("Error al verificar la URL existente:", error);
      }
    },
    async onVerifyAccount() {
      if (this.fileUploaded && this.file) {
        try {
          const userId = localStorage.getItem("userId");
          const passengerId = await this.getPassengerId(userId);

          // Subir archivo al servidor
          const formData = new FormData();
          formData.append("file", this.file);
          const uploadResponse = await axios.post(
              "http://localhost:8080/api/v1/files/upload",
              formData,
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                  "Content-Type": "multipart/form-data",
                },
              }
          );

          // Actualizar URL en el perfil del pasajero
          await axios.patch(
              `http://localhost:8080/api/v1/profile/${passengerId}/idCardUrl`,
              { url: uploadResponse.data.fileUrl },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
          );

          console.log("Archivo subido y URL actualizada.");
          this.$router.push("/home");
        } catch (error) {
          console.error("Error al procesar la actualización:", error);
          alert("Error al subir el archivo. Verifique la consola.");
        }
      } else if (this.url.trim()) {
        try {
          const userId = localStorage.getItem("userId");
          const passengerId = await this.getPassengerId(userId);

          // Actualizar la URL directamente en el perfil
          await axios.patch(
              `http://localhost:8080/api/v1/profile/${passengerId}/idCardUrl`,
              { url: this.url },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
          );

          console.log("URL proporcionada actualizada.");
          this.$router.push("/home");
        } catch (error) {
          console.error("Error al actualizar la URL proporcionada:", error);
          alert("Error al procesar la URL proporcionada.");
        }
      } else {
        alert("Por favor, suba un archivo o proporcione una URL antes de continuar.");
      }
    },
  },
  async mounted() {
    this.rol = localStorage.getItem("role");
    console.log("Rol actual:", this.rol);

    const userId = localStorage.getItem("userId");
    if (this.rol === "ROLE_PASAJERO") {
      try {
        const passengerId = await this.getPassengerId(userId);
        await this.checkExistingUrl(passengerId);
      } catch (error) {
        console.error("Error al verificar el perfil del pasajero:", error);
      }
    } else if (this.rol === "ROLE_CONDUCTOR") {
      this.$router.push("/home");
    }
  },
};
</script>
<template>
  <div class="container">
    <div class="header">
      <img src="../../../img/logoUniRider.png" class="logo" alt="Logo UniRider" />
      <h1>Bienvenido a UniRider, {{ nombre }}!</h1>
      <p>Por favor, sube los documentos necesarios para completar tu perfil.</p>
    </div>

    <div class="form-container">
      <!-- Sección para pasajero -->
      <div v-if="rol === 'ROLE_PASAJERO'">
        <div class="field">
          <label for="studentCard">Carnet universitario</label>
          <input type="file" id="studentCard" @change="handleFileChange(3)" accept="image/*" ref="fileInput3" />
        </div>
        <div class="field">
          <label for="urlInput">O proporcione un enlace directo al documento:</label>
          <input type="text" id="urlInput" v-model="url" placeholder="Ingrese el enlace aquí" />
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
