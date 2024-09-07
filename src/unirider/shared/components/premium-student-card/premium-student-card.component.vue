<script>
export default {
  name: 'PremiumStudentCard',
  methods:{
    onAggregateNewCard() {
      console.log("Login user");
      this.$router.push('/new-card');
    }
  }
}
</script>

<template>
  <div class="card-middle">
    <div class="tittle">
      <h3>PREMIUM ESTUDIANTE</h3>
    </div>
    <div class="price">
      <h3>S/15.00 / Mes</h3>
    </div>
    <div class="content">
      <ul>
        <li>Viajes Ilimitados</li>
        <li>Acumulación De Puntos Por Viaje Realizado</li>
        <li>Puntos(2x)</li>
        <li>Opción De Reservar Mas De Un Asiento</li>
        <li>Llevar Un Acompañante 4 Veces Durante El Mes</li>
        <li>Participación En Sorteos Mensuales</li>
        <li>Calificación De Conductores</li>
        <li>Descuentos Exclusivos En Establecimientos Afiliados</li>
        <li>Acceso A Eventos Especiales Para Miembros Premium</li>
        <li>Atención Al Cliente Prioritaria</li>
      </ul>
      <div class="button-card">
        <button @click.prevent="onAggregateNewCard">Comprar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-middle{
  width: 250px;
  height: 500px;
  padding-left: 0;
}

.tittle{
  background-color: #39BFBF;
  color: white;
  font-family: system-ui, -apple-system,BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  height: 13%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

.tittle h3{
  margin: 0;
  font-size: 18px;
}

.card-middle .price{
  background-color: #308E4E;
  font-family: system-ui, -apple-system,BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  height: 11%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content{
  font-family:  system-ui, -apple-system,BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #F8F9FA;
  height: 50%;
  padding-top: 15px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  font-weight: 700;
  padding-right: 15px;
}

.card-middle .content{
  font-family: system-ui, -apple-system,BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #F8F9FA;
  height: 70%;
  padding-top: 15px;
  font-weight: 700;
}

.content ul{
  margin: 0;
  font-size: 13px;
}

.content ul li{
  margin-bottom: 1px;
}

.button-card{
  margin-top: 30px;
  display: flex;
  justify-content: center;
}

.card-middle .button-card{
  margin-top: 20px;
}

.card-middle .content .button-card button{
  background-color: #39BFBF;
  border-style: none;
  color: white;
  width: 80px;
  height: 35px;
}

.card-middle .content .button-card button:hover{
  background-color: #72e9e9;
}
</style>