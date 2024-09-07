<script>
export default {
  name:'PremiumConductorCard',
  methods:{
    onAggregateNewCard() {
      console.log("Login user");
      this.$router.push('/new-card');
    }
  }

}
</script>

<template>
  <div class="card-right">
    <div class="tittle">
      <h3>PREMIUM CONDUCTOR</h3>
    </div>
    <div class="price">
      <h3>S/20.00 / Mes</h3>
    </div>
    <div class="content">
      <ul>
        <li>Acumulación De Puntos Canjeables</li>
        <li>Personalización De Precios En Un Rango Determinado</li>
        <li>Notificaciones En Tiempo Real Para Mantener A Los Usuarios Informados</li>
        <li>Reservas Anticipadas Para Planificar Viajes Con Anticipación</li>
        <li>Mayor Visibilidad Como Opción Entre Conductores</li>
        <li>Acceso A Eventos Especiales Para Miembros Premium</li>
      </ul>
      <div class="button-card">
        <button @click.prevent="onAggregateNewCard">Comprar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-right{
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


.price{
  background-color: #308E4E;
  font-family: var(--font-family-principal);
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
}

.price h3{
  margin: 0;
}

.content{
  font-family: system-ui, -apple-system,BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #F8F9FA;
  height: 50%;
  padding-top: 15px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  font-weight: 700;
  padding-right: 15px;
}

.card-right .price{
  background-color: #308E4E;
  font-family: system-ui, -apple-system,BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  height: 11%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-right .content{
  font-family: system-ui, -apple-system,BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #F8F9FA;
  height: 63%;
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

.card-right .button-card{
  margin-top: 20px;
}

.card-right .content .button-card button{
  background-color: #39BFBF;
  border-style: none;
  color: white;
  width: 80px;
  height: 35px;
}

.card-right .content .button-card button:hover{
  background-color: #72e9e9;
}

</style>