<script>
import { useRouter } from 'vue-router';

export default {
  name: 'AppDestinosCard',
  setup() {
    const router = useRouter();

    const goToReservations = () => {
      router.push('/reservations');
    };

    return {
      goToReservations,
    };
  },
};
</script>

<template>
  <div class="Destinos">
    <h1>Destinos más visitados</h1>
    <div class="Card-destino">
      <img src="/src/assets/upcSM.jpeg" alt="upcSM">
      <h3>San Miguel - UPC</h3>
      <p>Miraflores</p>
      <div class="rating">
        <p>4.5</p>
        <img src="/src/assets/estrella.png" alt="estrella">
      </div>
    </div>
    <div class="Card-destino">
      <img src="/src/assets/upcMo.jpg" alt="upcMo">
      <h3>Monterrico - UPC</h3>
      <p>San Isidro</p>
      <div class="rating">
        <p>4.5</p>
        <img src="/src/assets/estrella.png" alt="estrella">
      </div>
    </div>
    <pv-button @click="goToReservations">Crear una  Reserva</pv-button>
  </div>
</template>

<style>

.Destinos{
  width: 300px;
  height: 515px;
}

.Destinos h1{
  font-size: 25px;
}

.Destinos button {
  width: 140px;
  height: 35px;
  background-color: #39BFBF;
  border: none;
  border-radius: 8px;
  margin: 20px auto;
  display: block; /* Centrar */
}

.Card-destino {
  background-color: white;
  width: 220px; /* Ancho uniforme */
  height: 200px;
  margin: 15px auto;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra ligera */
}

.Card-destino h3{
  margin-top: 3px;
  margin-bottom: 7px;
  margin-left: 0px;
  margin-right: 0px;
}

.Card-destino img{
  width: 90%;
  height: 53%;
  margin-left: 5px;
}

.Card-destino p{
  color: #ABABAB;
  margin: 0;
}

.rating{
  display: flex;
}

img[alt="estrella"] {
  width: 10%;
  height: 10%;
}

.Destinos button:hover{
  background-color: #72e9e9;
}

</style>
