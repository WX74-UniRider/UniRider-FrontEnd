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
body{
  background-color: #3F7AA4;
}
.toolbar {
  width: 100%;
  background-color: #2C3E50; /* Darker background for a professional look */
  padding: 15px 0; /* Padding for vertical space */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}


.toolbar-component a {
  color: #FFFFFF; /* White text for contrast */
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  text-decoration: none;
  padding: 0 15px; /* Spacing between links */
  transition: color 0.3s ease;
}

.toolbar-component a:hover {
  color: #1ABC9C; /* Hover color for links */
}

h1 {
  color: #333333;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 48px;
  text-align: center;
  margin-bottom: 20px;
}

h2 {
  color: #444444;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.6;
  padding: 0 20px;
  text-align: center;
}

h3 {
  margin-top: 15px;
  color: #333;
  font-weight: 600;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #2DB3CB;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 1200px;
  margin-top: 40px;
}

.texto {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  text-align: center;
}

.squares {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 50px;
  gap: 20px;
}

.square {
  width: 200px;
  height: 200px;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.square:hover {
  transform: scale(1.05);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
}

.floating-image-1, .floating-image {
  width: 70%;
  height: auto;
  object-fit: contain;
}

@media (max-width: 768px) {
  .squares {
    flex-direction: column;
    align-items: center;
  }

  .square {
    margin: 10px 0;
    width: 180px;
    height: 180px;
  }
}
</style>