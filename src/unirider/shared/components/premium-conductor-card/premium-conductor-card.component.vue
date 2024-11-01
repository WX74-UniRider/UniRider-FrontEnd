<template>
  <div class="card">
    <div class="header">
      <h3>PREMIUM CONDUCTOR</h3>
    </div>
    <div class="price">
      <h3>S/20.00 / Mes</h3>
    </div>
    <div class="content">
      <ul>
        <li>Acumulación De Puntos Canjeables</li>
        <li>Personalización De Precios En Un Rango Determinado</li>
        <li><a @click="showModal = true" class="more-link">... muchos más</a></li>
      </ul>
    </div>
    <div class="button-card">
      <button @click.prevent="onAggregateNewCard">Comprar</button>
    </div>
  </div>

  <!-- Modal para mostrar todos los beneficios -->
  <div v-if="showModal" class="modal-overlay">
    <div class="modal-content">
      <button @click="showModal = false" class="close-modal">X</button>
      <h2>Beneficios Completos - Premium Conductor</h2>
      <ul>
        <li>Acumulación De Puntos Canjeables</li>
        <li>Personalización De Precios En Un Rango Determinado</li>
        <li>Notificaciones En Tiempo Real Para Mantener A Los Usuarios Informados</li>
        <li>Reservas Anticipadas Para Planificar Viajes Con Anticipación</li>
        <li>Mayor Visibilidad Como Opción Entre Conductores</li>
        <li>Acceso A Eventos Especiales Para Miembros Premium</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PremiumConductorCard',
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    onAggregateNewCard() {
      this.$router.push('/new-card'); // Redirige a la página de compra
    }
  }
}
</script>

<style scoped>
/* Estilos de la tarjeta */
.card {
  width: 250px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  transition: transform 0.3s;
  padding-bottom: 20px;
  margin: 10px;
  height: 100%;
}

.card:hover {
  transform: scale(1.05);
}

.header {
  background-color: #39BFBF;
  color: white;
  padding: 15px;
  text-align: center;
  font-weight: bold;
}

.price {
  background-color: #308E4E;
  color: white;
  padding: 10px;
  text-align: center;
  font-weight: bold;
}

.content {
  padding: 0px 10px;
  flex-grow: 1;
}

.content ul {
  list-style-type: disc;
  padding-left: 20px;
  margin: 0;
}

.more-link {
  color: #39BFBF;
  cursor: pointer;
  font-weight: bold;
  text-decoration: underline;
}

/* Estilos del modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 80%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.close-modal {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.button-card {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.button-card button {
  background-color: #39BFBF;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

.button-card button:hover {
  background-color: #2a9da6;
}
</style>