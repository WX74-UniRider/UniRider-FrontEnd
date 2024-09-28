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
    <button @click="goToReservations">Crear una  Reserva</button>
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

.Card-destino{
  background-color: white;
  width: 180px;
  height: 185px;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 50px;
  padding-top: 7px;
  padding-left: 8px;
  border-radius: 5px;
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

.Destinos button{
  width: 120px;
  height: 29px;
  background-color: #39BFBF;
  border: none;
  border-radius: 5px;
  margin-left: 90px;
}
.Destinos button:hover{
  background-color: #72e9e9;
}

</style>
