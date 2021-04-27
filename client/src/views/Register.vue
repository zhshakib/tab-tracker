<template>
  <section class="register">
        <div>
          <label for="email">Email: </label>
          <input v-model="email" type="email" name="email" id="email">
        </div>
        <div>
          <label for="password">Password:</label>
          <input v-model="password" type="password" name="password" id="password">
        </div>
        <button type="submit" @click="register">Register</button>
  </section>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data(){
    return{
      email: "",
      password: ""
    }
  },
  methods:{
    async register() {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data);
      this.email = "",
      this.password = ""
    }
  }
}
</script>




<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

form div{
  padding: 5px;
}

label, input, button{ 
  font-size: 1.5rem;
}

button{
  padding: 10px 2rem;
}
</style>>