<template>
  <div class="card">
    <div class="header">
      <h3>PREMIUM ESTUDIANTE</h3>
    </div>
    <div class="price">
      <h3>S/15.00 / Mes</h3>
    </div>
    <div class="content">
      <ul>
        <li>Viajes Ilimitados</li>
        <li>Acumulación De Puntos Por Viaje Realizado</li>
        <li>Puntos (2x)</li>
        <li>Opción De Reservar Más De Un Asiento</li>
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
      <h2>Beneficios Completos - Premium Estudiante</h2>
      <ul>
        <li>Viajes Ilimitados</li>
        <li>Acumulación De Puntos Por Viaje Realizado</li>
        <li>Puntos (2x)</li>
        <li>Opción De Reservar Más De Un Asiento</li>
        <li>Llevar Un Acompañante 4 Veces Durante El Mes</li>
        <li>Participación En Sorteos Mensuales</li>
        <li>Calificación De Conductores</li>
        <li>Descuentos Exclusivos En Establecimientos Afiliados</li>
        <li>Acceso A Eventos Especiales Para Miembros Premium</li>
        <li>Atención Al Cliente Prioritaria</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PremiumStudentCard',
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
  height: 100%; /* Ajusta la altura para que ocupe toda la tarjeta */
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
  flex-grow: 1; /* Asegura que el contenido ocupe el espacio disponible */
}

.content ul {
  list-style-type: disc; /* Agrega viñetas a cada elemento */
  padding-left: 20px; /* Espacio para que las viñetas no se peguen al borde */
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
