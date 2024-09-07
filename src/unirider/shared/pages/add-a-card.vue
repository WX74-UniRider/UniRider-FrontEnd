<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { UserApiService } from '../services/user-api.service.js';
import { Card } from '../model/card.entity.js';

const router = useRouter();

const cardholder = ref('');
const cardNumber = ref('');
const cardMonth = ref('');
const cardYear = ref('');
const cardCvc = ref('');

const addCard = async () => {
  const userId = localStorage.getItem('userId'); // Obtener el ID del usuario logeado desde localStorage
  if (!userId) {
    console.error("User ID not found in localStorage");
    return;
  }

  const card = new Card(cardholder.value, cardNumber.value, cardMonth.value, cardYear.value, cardCvc.value);
  card.userId = parseInt(userId);

  try {
    await UserApiService.addCard(card);
    router.push('/home');
  } catch (error) {
    console.error("Error adding card:", error);
  }
};
</script>

<template>
  <main class="main-container">
    <section class="main-container__background-section">
      <img class="tarjeta" src="../../../img/tarjeta.png">
    </section>

    <section class="main-container__form-section">
      <form class="form" @submit.prevent="addCard">
        <label class="form__label" for="cardholder">Cardholder Name</label>
        <input class="form__input" type="text" v-model="cardholder" id="cardholder" placeholder="e.g. Jane Appleseed">
        <div class="form__cardholder--error error"></div>

        <label class="form__label" for="cardNumber">Card Number</label>
        <input class="form__input" type="text" v-model="cardNumber" id="cardNumber" maxlength="19" placeholder="e.g. 1234 5678 9123 0000">
        <div class="form__inputnumber--error error"></div>

        <div class="form__date-cvc">
          <label class="form__label" for="cardMonth">Exp. Date (MM/YY)</label>
          <label class="form__label" for="cardCvc">CVC</label>
          <div class="form__date">
            <input class="form__input" type="text" v-model="cardMonth" maxlength="2" id="cardMonth" placeholder="MM">
            <input class="form__input" type="text" v-model="cardYear" maxlength="2" id="cardYear" placeholder="YY">
          </div>
          <input class="form__input" type="text" v-model="cardCvc" maxlength="3" id="cardCvc" placeholder="e.g. 123">
          <div class="form__errors-container">
            <div class="form__input-mm--error error"></div>
            <div class="form__input-yy--error error"></div>
          </div>
          <div class="form__input-cvc--error error"></div>
        </div>
        <button class="form__submit" type="submit">Agregar Tarjeta</button>
      </form>
    </section>
  </main>
</template>

<style scoped>
/* Estilos aquí */
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-size: 18px;
  font-family: "Space Grotesk", sans-serif;
}

.main-container {
  width: 375px;
  margin: auto;
}
.main-container__background-section {
  background-repeat: no-repeat;
  height: 240px;
  position: relative;
}
.main-container__form-section {
  padding: 90px 24px 45px;
}
@media (min-width: 1440px) {
  .main-container {
    width: 1440px;
    display: flex;
  }
  .main-container__background-section {
    width: 900px;
    height: 900px;
  }
}

.tarjeta {
  width: 300px;
  height: 202px;
  color: hsl(0deg, 0%, 100%);
  padding: 20px;
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  top: 126px;
  left: 18px;
  z-index: 1;
  letter-spacing: 2px;
}
@media (min-width: 1440px) {
  .tarjeta {
    width: 600px;
    height: 440px;
    padding: 30px;
  }
}
@media (min-width: 1440px) {
  .tarjeta {
    top: 187px;
    left: 167px;
  }
}

.form__label {
  text-transform: uppercase;
  font-size: 0.65em;
  letter-spacing: 2px;
  display: block;
  margin-bottom: 8px;
  color: hsl(278deg, 68%, 11%);
  font-weight: bold;
}
.form__input {
  width: 100%;
  height: 40px;
  margin-bottom: 18px;
  border-radius: 4px;
  font-family: "Space Grotesk", sans-serif;
  border: 1px solid hsl(270deg, 3%, 87%);
  padding-left: 10px;
  font-size: 1em;
  outline: none;
}
.form__input::placeholder {
  color: hsl(270deg, 3%, 87%);
}
.form__date-cvc {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 16px;
}
.form__date {
  display: flex;
  gap: 10px;
}
.form__submit {
  background-color: hsl(278deg, 68%, 11%);
  color: hsl(270deg, 3%, 87%);
  width: 100%;
  height: 50px;
  border-radius: 8px;
  font-size: 1em;
  letter-spacing: 1px;
  font-family: "Space Grotesk", sans-serif;
}

.form__submit:hover {
  background-color: #28a3b3;
}

@media (min-width: 1440px) {
  .form {
    margin-top: 180px;
    width: 385px;
  }
  .form__input {
    margin-bottom: 40px;
  }
}

.error {
  color: hsl(0deg, 100%, 66%);
  margin: -10px 0 18px;
  font-size: 0.6em;
}

.form__errors-container {
  display: flex;
  gap: 5px;
}

.form__errors-container div {
  width: 100px;
  text-align: center;
}

</style>
