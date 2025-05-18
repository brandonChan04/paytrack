<template>
  <div class="login-container">
    <div class="login-box">
        <div @click="home">
            <img class="logo" src="../assets/paytrack-logo.png" alt="PayTrack Logo"/>
        </div>
        <h1>Login</h1>
        <form @submit.prevent="handleLogin">
        <div class="form-group">
            <label for="email">Email</label>
            <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Enter your email"
            required
            />
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter your password"
            required
            />
        </div>
        <div class="buttons">
            <button type="submit" class="btn">Login</button>
            <h3>or</h3>
            <button type="button" @click="signUp" class="btn">Sign Up</button>
        </div>
        </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex/dist/vuex.cjs.js";
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(['GET_INVOICES']),
    ...mapMutations(['SET_LOGGED_IN']),
    handleLogin() {
      if (this.email && this.password) {
        signInWithEmailAndPassword(getAuth(), this.email, this.password)
          .then((userCredential) => {
            const user = userCredential.user;
            this.SET_LOGGED_IN(true);
            this.GET_INVOICES();
            this.$router.push({ name: "Home" });
          })
          .catch((error) => {
            console.error("Error logging in:", error.code, error.message);
          });
      } else {
        alert("Please fill in all fields.");
      }
    },
    signUp() {
      this.$router.push({ name: "Signup" });
    },
    home() {
      this.$router.push({ name: "Startup" });
    },
  },
};
</script>

<style scoped>
    .logo {
        max-width: 200px;
        cursor: pointer;
    }

    .login-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        padding: 2rem;
    }

    .login-box {
        background-color: #131324;
        padding: 2rem 2.5rem;
        border-radius: 16px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        width: 100%;
        max-width: 400px;
        text-align: center;
        border: 1px solid #2f2f4f;
    }

    h1 {
        color: #ffffff;
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
    }

    .form-group {
        text-align: left;
        margin-bottom: 1.25rem;
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
        color: #bbbbdd;
        font-weight: 600;
    }

    h3 {
        display: block;
        color: #bbbbdd;
        font-weight: 600;
    }

    input {
        width: 100%;
        padding: 0.75rem 1rem;
        border-radius: 8px;
        border: 1px solid #3c3c5c;
        background-color: #1e1e2e;
        color: #ffffff;
        font-size: 1rem;
        outline: none;
    }

    input:focus {
        border-color: #8a84ff;
    }

    .buttons {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        margin-top: 1.5rem;
    }

    .btn {
        background-color: #8a84ff;
        color: #ffffff;
        padding: 0.75rem;
        font-size: 1rem;
        font-weight: 600;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: background 0.3s ease;
    }

    .btn:hover {
        background-color: #6f69d8;
    }
</style>
