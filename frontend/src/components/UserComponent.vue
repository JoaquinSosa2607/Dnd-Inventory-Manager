<template>
    <div class="main">
      <h2>{{ isLogin ? "Iniciar sesión" : "Registrar" }}</h2>
  
      <form @submit.prevent="handleSubmit" name="login-form">
        <label for="email" > Email: </label>
        <input v-model="email" id="email" type="email" placeholder="Ingresa tu email" required />
  
        <label for="password" > Contraseña: </label>
        <input v-model="password" id="password" type="password" placeholder="Ingresa tu contraseña" required />
  
        <div v-if="!isLogin">
          <label for="name"> Nombre: </label>
          <input v-model="firstname" id="name" type="text" placeholder="Ingresa tu nombre" required />
  
          <label for="lastname"> Apellido: </label>
          <input v-model="lastname" id="lastame" type="text" placeholder="Ingresa tu apellido" required />
        </div>
  
        <div class="wrap">
          <button type="submit">{{ isLogin ? "Entrar" : "Registrarse" }}</button>
        </div>
      </form>
  
      <p>
        <a href="#" @click.prevent="toggleMode">
          {{ isLogin ? "No tienes cuenta? Regístrate" : "Ya tienes cuenta? Inicia sesión" }}
        </a>
      </p>
    </div>
</template>
  
<script>
  import axios from "axios";
  import { useUserStore } from "@/stores/userStore";
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        isLogin: true,
      };
    },
    methods: {
      async handleSubmit() {
        try {
          const url = this.isLogin ? "http://localhost:4040/auth/sign-in" : "http://localhost:4040/auth/sign-up";
          const payload = this.isLogin
            ? { email: this.email, password: this.password }
            : { email: this.email, password: this.password, firstname: this.firstname, lastname: this.lastname };
  
          const response = await axios.post(url, payload);
  
          if (this.isLogin) {
            this.userStore.login(response.data.Tokens.authToken); 
            this.$router.push('home');
          } else {
            alert("Usuario registrado exitosamente. Ahora puedes iniciar sesión.");
            this.isLogin = true;
          }
        } catch (error) {
          alert(error.response?.data.message || "Ocurrió un error.");
        }
      },
      toggleMode() {
        this.isLogin = !this.isLogin;
      }
    },
    setup() {
      const userStore = useUserStore();
      return { userStore };
    }
  };
</script>
  
<style scoped>
    .main {
        margin: 100px;
        background-color: rgba(255, 255, 255, 0.733);
        border-radius: 15px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        padding: 10px 20px;
        transition: transform 0.2s;
        width: 500px;
        text-align: center;
        align-self: center;
        justify-self: center;
    }
    
    h2 {
        color: rgb(145, 24, 24);
    }
    
    label {
        display: block;
        width: 100%;
        margin-top: 10px;
        margin-bottom: 5px;
        text-align: center;
        color: rgb(145, 24, 24);
        font-weight: bold;
    }
    
    input {
        display: block;
        width: 80%;
        margin-bottom: 15px;
        padding: 10px;
        box-sizing: border-box;
        border: 1px solid #ddd;
        border-radius: 5px;
        justify-self: center;
        align-self: center;
    }
    
    button {
        padding: 15px;
        border-radius: 10px;
        margin-top: 15px;
        margin-bottom: 15px;
        border: none;
        color: white;
        cursor: pointer;
        background-color: rgb(145, 24, 24);
        width: 25%;
        font-size: 16px;
    }
    
    .wrap {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>