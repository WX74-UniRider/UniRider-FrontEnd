<script>
export default {
  name: 'TravelRecordContainer',
  props: {
    nombre: String,
    destino: String,
    origen: String,
    duracion: String,
    estrellas: Number,
    estatus: String,
    fecha: String,
    precio: Number,
    foto: String,
    estrella: String
  }
}
</script>
<template>
  <div>
  </div>
  <div>
    <div class="card-container">
      <div class="travel-record-card">
        <table>
          <tr>
          </tr>
          <tr>
            <td><img src="/FotoPerfil.png" alt="imagen del usuario"  style="max-width: 200px; max-width: 50%; padding: 0px;"></td>
            <td class="background-blue"><strong>Calificacion:</strong>
              <span v-for="i in estrellas">
              <img src="/estrella.png" style="display: flex; justify-content: center; align-items: center; width: 20px; height: 20px; object-fit: contain; padding: 0px;">
              </span>
            </td>
            <td></td>
            <td class="background-gray"><strong> Estatus:</strong>{{ estatus }}</td>
          </tr>
          <tr>
            <td> <strong>Nombre:</strong>{{ nombre }}</td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td><strong>Destino:</strong>{{ destino }}</td>
            <td></td>
            <td></td>
            <td><strong>Fecha: </strong>{{ fecha }}</td>
          </tr>
          <tr>
            <td><strong>Origen: </strong>{{ origen }}</td>
          </tr>
          <tr>
            <td><strong>Duración: </strong>{{ duracion }}</td>
            <td></td>
            <td></td>
            <td class="background-gray shadow-gray"><strong>Precio:</strong>S/{{precio}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<style scoped>

.card-container {
  display: inline-block;
  padding: 10px; /* Espacio alrededor del contenedor */
  background-color: #f0f0f0; /* Color de fondo del contenedor */
  border-radius: 10px; /* Borde redondeado */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra */
  max-width: 550px;
  margin-top: 40px;
  margin-bottom: 10px;
}

table {
  border-collapse: collapse;
}
.travel-record-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.travel-record-card table td {
  text-align: left;
  padding: 5px;

}
.travel-record-card table th {
  padding-bottom: 10px;
}
.background-gray {
  background-color: #FFC736;
}
.background-blue {
  background-color: #2DB3CB;
}
.shadow-gray {
  box-shadow: 5px 8px 1px rgba(0, 0, 0, 0.4); /* Sombra del mismo color */
}
</style>