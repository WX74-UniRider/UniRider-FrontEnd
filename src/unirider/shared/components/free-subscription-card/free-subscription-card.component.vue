<script>
  export default {
    name: 'FreeSubscriptionCard',
  }
</script>

<template>
  <div class="card-left">
    <div class="tittleFree">
      <h3>FREEMIUM</h3>
    </div>
    <div class="price">
      <h3>S/0 / Mes</h3>
    </div>
    <div class="content">
      <ul>
        <li>Dos Viajes Por Dia</li>
        <li>Anuncios incluido</li>
        <li>Opciones limitados</li>
      </ul>
      <div class="button-card">
        <button>Ingresar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-left{
  width: 210px;
  height: 300px;
  padding-left: 0;
}

.tittleFree{
  background-color: #FB0A0A;
  color: white;
  font-family: system-ui, -apple-system,BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

.tittleFree h3{
  margin: 0;
}

.price{
  background-color: #308E4E;
  font-family: system-ui, -apple-system,BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
}

.price h3{
  margin: 0px;
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

.button-card button{
  background-color: #FB0A0A;
  border-style: none;
  color: white;
  width: 80px;
  height: 35px;
}

.button-card button:hover{
  background-color: #c44a4a;
}

</style>