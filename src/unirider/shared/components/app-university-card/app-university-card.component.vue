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
.Card-Images {
  width: 400px;
  height: 430px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-up img {
  width: 100%;
  height: auto;
  max-width: 400px;
}

.universidades {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.universidades img {
  width: 50px;
  height: 50px;
  transition: transform 0.3s ease;
  margin: 5px;
}

.universidades img:hover {
  transform: scale(1.1);
}

.first-line, .second-line, .third-line {
  display: flex;
  justify-content: center;
}

.first-line img, .second-line img, .third-line img {
  margin: 5px;
}
</style>