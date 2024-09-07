<script>
import ChatUserCard from "../components/chat-user-card/chat-user-card.component.vue";
import ToolbarComponent from "../../public/toolbar.component.vue";

export default {
  name: 'ChatUser',
  components: {
    ToolbarComponent,
    ChatUserCard
  },
  data() {
    return {
      mensajes: [
        // Tus mensajes aquí...
      ],
      nuevoMensaje: ''
    }
  },
  methods: {
    enviarMensaje() {
      if (this.nuevoMensaje.trim() !== '') {
        this.mensajes.push({
          nombre: 'Tu nombre', // Reemplaza esto con el nombre del usuario actual
          apellido: 'Tu apellido', // Reemplaza esto con el apellido del usuario actual
          hora: new Date().toLocaleTimeString(), // La hora actual
          texto: this.nuevoMensaje,
          foto: 'ruta/a/la/foto/del/usuario.jpg' // Reemplaza esto con la ruta real a la foto del usuario
        });
        this.nuevoMensaje = '';
      }
    }
  }
}
</script>

<template>
  <toolbarComponent/>
  <div class="chat-container">
    <div class="messages">
      <div v-for="(mensaje, index) in mensajes" :key="index">
        <ChatUserCard
            :nombre="mensaje.nombre"
            :apellido="mensaje.apellido"
            :hora="mensaje.hora"
            :texto="mensaje.texto"
            :foto="mensaje.foto"
        />
      </div>
    </div>
    <div class="input-area">
      <input type="text" v-model="nuevoMensaje" placeholder="Escribe un mensaje..." />
      <button @click="enviarMensaje">Enviar</button>
      <button class="cancel-button" @click="$router.go(-1)">Cancelar</button>
    </div>
  </div>
</template>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
  padding: 10px;
}

.messages {
  flex-grow: 1;
  overflow-y: auto;
  padding: 10px;
}

.input-area {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.input-area input {
  flex-grow: 1;
  margin-right: 10px;
}
</style>