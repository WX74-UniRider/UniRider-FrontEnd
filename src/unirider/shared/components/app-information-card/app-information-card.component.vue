<script>
import LogoUniRiderImage from '../../../../assets/logoUniRider.png';
export default {
  name: 'AppInformationCard' ,
  data(){
    return {
      logoUniRiderImage: LogoUniRiderImage
    }
  }
}
</script>

<template>
  <div class="card">
    <h1>UniRider</h1>
    <div class="infoCard">
      <h3>Ofrecemos La Oportunidad De Viajar De Manera Eficiente A Un Precio Accesible.</h3>
      <h3>Dile Adiós A Las Largas Esperas Y A Los Viajes Estresantes.</h3>
      <pv-button>Contactanos</pv-button>
    </div>
    <img :src="logoUniRiderImage" alt="logoUniRider"/>
  </div>
</template>

<style>

.card {
  height: 450px;
  width: 400px;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra para profundidad */
}

.infoCard button {
  width: 150px;
  height: 35px;
  background-color: #39BFBF;
  border: none;
  margin: 20px auto;
  display: block; /* Centrar */
  border-radius: 8px;
  transition: background-color 0.3s;
}

.infoCard button:hover {
  background-color: #28a3b3;
}

.card h1{
  text-align: center;
  font-size: 40px;
  font-family: system-ui, -apple-system,BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.infoCard{
  margin-top: 50px;
}

.infoCard h3{
  text-align: center;
  padding: 0 6px;
  font-size: 13px ;
  font-family: system-ui, -apple-system,BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.card img {
  width: 50%;
  height: auto;
  display: block;
  margin: 0 auto;
  padding: 40px;
}

</style>
