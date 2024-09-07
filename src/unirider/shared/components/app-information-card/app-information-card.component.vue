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
      <Button>Contactanos</Button>
    </div>
    <img :src="logoUniRiderImage" alt="logoUniRider"/>
  </div>
</template>

<style>

.card{
  height: 450px;
  width: 400px;
  background-color: white;
  border-radius: 60px;
  padding-top: 30px ;
  margin: 30px 40px;
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

.infoCard button{
  width: 100px;
  height: 30px;
  background-color: #39BFBF;
  border: none;
  margin-left: 18px;
  margin-top: 10px;
  color: white;
}

.infoCard button:hover{
  background-color: #72e9e9;
}

.card img {
  width: 50%;
  height: auto;
  display: block;
  margin: 0 auto;
  padding: 40px;
}

</style>