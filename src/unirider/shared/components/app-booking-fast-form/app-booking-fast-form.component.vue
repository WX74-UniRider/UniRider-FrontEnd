<script setup>
import { ref } from 'vue';
import { BooksApiService } from "../../services/User-books.service.js"
import { defineProps } from 'vue';

const props = defineProps({
  passengerId: Number,
  driverId: Number,
  destination: String
});

const tripStartTime = ref('');
const isFormVisible = ref(true);

const closeForm = () => {
  isFormVisible.value = false;
};

const submitForm = async () => {
  const newBook = {
    trip_id: 1,
    passenger_id: props.passengerId,
    driver_id: props.driverId,
    tripStartTime: tripStartTime.value,
    destination: props.destination,
    reservationTime: new Date().toISOString(),
    status: 'pending'

  };

  try {
    await BooksApiService.createBook(newBook);
  } catch (error) {
    console.error('Error creating book:', error);
  }
  closeForm();
};

</script>

<template>

  <div v-if="isFormVisible" class="overlay">
    <div class="form-container">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="tripStartTime">Fecha y hora de inicio del viaje:</label>
          <input type="datetime-local" id="tripStartTime" v-model="tripStartTime" />
        </div>
        <div class="form-actions">
          <button type="submit">Aceptar</button>
          <button type="button" @click="closeForm">Cancelar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-container {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.form-actions {
  display: flex;
  justify-content: space-between;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>