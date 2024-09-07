<script>
  export default {
    name: 'AppUniversityCard',
  }
</script>
<template>
  <div class="Card-Images">
    <div class="image-up">
      <img src="/src/assets/taxiMain.png" alt="taxiMain">
    </div>
    <div class="universidades">
      <div class="first-line">
        <img src="/src/assets/universidades/PUCP.png" alt="PUCP">
        <img src="/src/assets/universidades/SANMARCOS.jpg" alt="SANMARCOS">
        <img src="/src/assets/universidades/UCIENTIFICA.png" alt="UCIENTIFICA">
        <img src="/src/assets/universidades/UCV.png" alt="UCV">
        <img src="/src/assets/universidades/ULIMA.jpg" alt="ULIMA">
        <img src="/src/assets/universidades/UNI.png" alt="UNI">
        <img src="/src/assets/universidades/UP.jpg" alt="UP">
      </div>
      <div class="second-line">
        <img src="/src/assets/universidades/UPN.png" alt="UPN">
        <img src="/src/assets/universidades/URICARDOPALMA.jpg" alt="URICARDOPALMA">
        <img src="/src/assets/universidades/USIL.jpg" alt="USIL">
        <img src="/src/assets/universidades/UPC.png" alt="UPC">
      </div>
      <div class="third-line">
        <img src="/src/assets/universidades/CayetanoHeredia.png" alt="CayetanoHeredia">
      </div>
    </div>
  </div>
</template>

<style scoped>
.Card-Images{
  width: 400px;
  height: 430px;
  margin-top: 40px;
}

.image-up img{
  width: 400px;
  height: 200px;
}

.universidades img{
  justify-items: center;
  padding-top: 1rem;
  width: 50px;
  height: 50px;
}

.first-line img{
  padding-right: 0.3rem;
}

.second-line{
  display: flex;
  justify-content: center ;
}

.second-line img{
  margin-left: 0.3rem;
  padding-top: 0;
}

.third-line{
  display: flex;
  justify-content: center;
  padding-top:0.2rem;
}

.third-line img{
  padding-top: 0;
}
</style>