<script>
import  {User} from "../../model/user.entity.js";

export default {
  name: "welcome",
  props: {
    userName: String,
  },

  methods: {
    uniDriverUser() {
      let user = new User(this.userName);
      return user.usernameUniDriver;
    }
  }
}
</script>

<template>
  <p class="Label-Hello">Hello {{ uniDriverUser() }}. Now You are a UniDriver user!.</p>
</template>

<style scoped>
.Label-Hello {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.87);
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 20px auto;
  width: auto;
  padding: 10px;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .Label-Hello {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .Label-Hello {
    font-size: 14px;
  }
}
</style>