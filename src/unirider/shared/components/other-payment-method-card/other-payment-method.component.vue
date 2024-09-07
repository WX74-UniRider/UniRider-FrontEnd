<script>
export default {
  name: 'OtherPaymentMethodCard',
  methods: {
    formatCardNumber(event) {
      let value = event.target.value.replace(/\D/g, ""); // Remove non-digits
      let formattedValue = "";

      // Ignore any input after the 16th digit
      if (value.length > 16) {
        value = value.slice(0, 16);
      }

      for (let i = 0; i < value.length; i++) {
        if (i !== 0 && i % 4 === 0) {
          formattedValue += " ";
        }
        formattedValue += value[i];
      }

      event.target.value = formattedValue;
    },
    sumbitForm() {
      this.$router.push('/confirm');
    }
  }
}
</script>

<template>
  <div class="payment-form">
    <h2>Pago con Tarjeta</h2>
    <form @submit.prevent="sumbitForm" method="POST">
      <div class="form-group">
        <label for="card-number">Número de Tarjeta</label>
        <input type="text" id="card-number" name="card-number" required @input="formatCardNumber">
      </div>
      <div class="form-group">
        <label for="card-name">Nombre en la Tarjeta</label>
        <input type="text" id="card-name" name="card-name" required>
      </div>
      <div class="form-group">
        <label for="expiry-date">Fecha de Expiración (MM/AA)</label>
        <input type="month" id="expiry-date" name="expiry-date" min="2025-01" required>
      </div>
      <div class="form-group">
        <label for="cvv">CVV</label>
        <input type="password" id="cvv" name="cvv" required maxlength="3">
      </div>
      <button type="submit" class="btn">Pagar</button>
    </form>
  </div>
</template>

<style>

.payment-form {
  position: absolute;
  top: 70%;
  left: 30%;
  border: 5px black solid;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 30rem;
  height: 30rem;
  margin: auto;
  z-index: 1000;
}


.payment-form h2 {
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-group input:focus {
  border-color: #007bff;
  outline: none;
}

.btn {
  background-color: #007bff;
  color: #ffffff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
  font-size: 16px;
}

.btn:hover {
  background-color: #0056b3;
}
</style>