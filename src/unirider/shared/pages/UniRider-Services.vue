<script setup>
import ToolbarComponent from "../../public/toolbar.component.vue";


</script>


<template>
  <div class="container">
    <toolbar-component class="toolbar"></toolbar-component>
    <div class="content">
      <div class="texto">
        <h1>Carpooling Service</h1>
        <h2>UniRider es una plataforma de carpooling que ofrece a los estudiantes la oportunidad de viajar de manera eficiente Y asequible. </h2>
        <h2>Nuestro servicio eimina las largas esperas y los viajes estresantes, brindándote la tranquilidad que necesitas para concentrarte en tu educación.  </h2>
        <h2>Únete a nuestra comunidad de estudiantes satisfechos y experimenta un viaje sin preocupaciones hacia el exito académico</h2>
      </div>
      <div class="squares">
        <div class="square">
          <img src="/src/assets/precios-bajos.png" alt="" class="floating-image-1">
          <h3>Precios bajos</h3>
        </div>

        <div class="square">
          <img src="/src/assets/TIME.png" alt="" class="floating-image">
          <h3>Eficiencia</h3>
        </div>

        <div class="square">
          <img src="/src/assets/cmodidad.png" alt="" class="floating-image">
          <h3>Comodidas</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.toolbar {
  margin-top: 30px;
}
h1 {
  color: black;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 54px;

}

h2 {
  color: black;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}


.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: #2DB3CB;
  display: flex;
  flex-direction: column; /* Ajuste para alinear verticalmente */
  align-items: center; /* Centra horizontalmente */
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-top:40px;
}


.texto {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;

  margin-left: 100px;
  margin-right: 100px;
}

.squares {
  display: flex;
  justify-content: center;
  margin-top: 70px;
}

.square {
  width: 220px;
  height: 220px;
  background-color: #f0f0f0;
  margin: 0 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.floating-image-1 {
  width: 70%;
  height: 70%;
  object-fit: contain;
}
.floating-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
h3{
  margin-top: 0px;
}
</style>
