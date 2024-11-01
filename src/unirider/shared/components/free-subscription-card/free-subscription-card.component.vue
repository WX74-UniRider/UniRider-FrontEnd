<template>
  <div class="card">
    <div class="header">
      <h3>FREEMIUM</h3>
    </div>
    <div class="price">
      <h3>S/0 / Mes</h3>
    </div>
    <div class="content">
      <ul>
        <li>Dos Viajes Por Día</li>
        <li>Anuncios incluidos</li>
        <li>Opciones limitadas</li>
      </ul>
      <div class="button-card">
        <button>Ingresar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 220px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); /* Sombra suave */
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  margin: 15px; /* Separación entre tarjetas */
}

.card:hover {
  transform: translateY(-5px); /* Efecto de elevación */
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25); /* Sombra más fuerte al hacer hover */
}

.header {
  background-color: #f44336; /* Rojo suave */
  color: white;
  font-family: 'Roboto', sans-serif;
  padding: 15px;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.price {
  background-color: #4caf50; /* Verde más suave */
  color: white;
  font-family: 'Roboto', sans-serif;
  padding: 10px;
  text-align: center;
  font-size: 1.1rem;
  font-weight: bold;
}

.content {
  padding: 20px;
  font-family: 'Roboto', sans-serif;
  background-color: #fafafa;
  color: #555;
}

.content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.content ul li {
  margin-bottom: 8px;
  font-size: 0.9rem;
  font-weight: 500;
}

.button-card {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}

.button-card button {
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 20px;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9rem;
  transition: background-color 0.3s, transform 0.3s;
}

.button-card button:hover {
  background-color: #d32f2f;
  transform: scale(1.05);
}
</style>