<script>
import ToolbarComponent from "../../../public/toolbar.component.vue";
import { UserApiService } from '../../services/user-api.service.js';

export default {
  name: "qualify-card",
  components: { ToolbarComponent },
  data() {
    return {
      selectedButtonSection1: null,
      selectedButtonSection2: null,
      comment: '',
      showThankYouMessage: false,
      rating: 0, // Inicializa la calificación actual
      stars: [1, 2, 3, 4, 5], // Inicializa las estrellas
    };
  },
  methods: {
    selectButtonSection1(button) {
      this.selectedButtonSection1 = button;
    },
    selectButtonSection2(button) {
      this.selectedButtonSection2 = button;
    },
    limitWords() {
      const words = this.comment.split(' ');
      if (words.length > 250) {
        this.comment = words.slice(0, 250).join(' ');
      }
    },
    async submitComment() {
      const userId = localStorage.getItem('userId'); // Obtener el ID del usuario logeado desde localStorage
      if (!userId) {
        console.error("User ID not found in localStorage");
        return;
      }

      const qualify = {
        stars: this.rating,
        punctuality: this.selectedButtonSection1,
        drive: this.selectedButtonSection2,
        comments: this.comment,
        userId: parseInt(userId)
      };

      try {
        await UserApiService.addQualify(qualify);
        this.showThankYouMessage = true;
        setTimeout(() => {
          this.showThankYouMessage = false;
          this.$router.push('/home');
        }, 3000);
      } catch (error) {
        console.error("Error adding qualify:", error);
      }
    },
    setRating(starIndex) {
      this.rating = starIndex;
    }
  }
}
</script>

<template>
  <toolbarComponent/>
  <main class="main-container">
    <div class="qualify-card">
      <h2>Califica a tu conductor</h2>
      <div class="star-rating-container">
        <span
            v-for="starIndex in stars"
            :key="starIndex"
            class="star"
            @click="setRating(starIndex)"
            :class="{ 'active': starIndex <= rating }"
        >★</span>
      </div>
      <div class="section">
        <div class="block">
          <h3>Puntualidad</h3>
          <button
              v-for="button in ['A tiempo', 'Retrasado', 'Tarde']"
              :key="button"
              :class="{ selected: selectedButtonSection1 === button }"
              @click="selectButtonSection1(button)"
          >{{ button }}
          </button>
        </div>
        <div class="block">
          <h3>Conducción</h3>
          <button
              v-for="button in ['Segura', 'Regular', 'Peligrosa']"
              :key="button"
              :class="{ selected: selectedButtonSection2 === button }"
              @click="selectButtonSection2(button)"
          >{{ button }}
          </button>
        </div>
      </div>
      <div class="comments-section">
        <h3>Comentarios</h3>
        <textarea v-model="comment" @input="limitWords"></textarea>
      </div>
      <div class="submit-section">
        <button @click="submitComment">Enviar comentario</button>
        <div v-if="showThankYouMessage" class="thank-you-message">Gracias por tu comentario</div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.qualify-card {
  margin-top: 70px;
  background-color: black;
  color: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  text-align: center;
}

h2 {
  margin: 10px 0;
  color: white;
}

.star-rating-container {
  margin: 10px 0;
}

.star {
  cursor: pointer;
  color: grey;
  font-size: 2.5em;
  transition: color 0.3s ease;
}

.star.active {
  color: #FEC200;
}

.section {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}

.block {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.comments-section {
  margin: 10px 0;
}

textarea {
  resize: none;
  width: 100%;
  height: 80px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;
}

button {
  margin: 5px;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: white;
  color: black;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #39BFBF;
}

button.selected {
  background-color: #39BFBF;
  color: white;
}

.submit-section {
  margin: 10px 0;
}

.thank-you-message {
  margin-top: 10px;
  color: white;
}
</style>
