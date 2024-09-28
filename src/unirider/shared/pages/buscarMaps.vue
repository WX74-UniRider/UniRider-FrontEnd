<script>
export default {
  name: 'BuscarMaps',
  data() {
    return {
      searchQuery: '',
      drivers: [
        { id: 1, name: 'Driver 1', destination: 'Destination A' },
        { id: 2, name: 'Driver 2', destination: 'Destination B' },
        // Add more driver objects as needed
      ]
    };
  },
  computed: {
    filteredDrivers() {
      return this.drivers.filter(driver =>
          driver.destination.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
};
</script>

<template>
  <div class="container">
    <input
        type="text"
        v-model="searchQuery"
        placeholder="Buscar destino"
        class="search-bar"
    />
    <div v-for="driver in filteredDrivers" :key="driver.id" class="card">
      <p>{{ driver.name }}</p>
      <p>{{ driver.destination }}</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
}

.search-bar {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.card {
  background-color: #f9f9f9;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
