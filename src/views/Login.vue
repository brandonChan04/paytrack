<template>
    <div class="login-container">
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
            <button type="submit" class="login-button">Login</button>
            <button @click="signUp" class="login-button">Sign Up</button>
        </form>
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
            ...mapState(['loggedIn']),
            ...mapMutations(['SET_LOGGED_IN']),
            handleLogin() {
                if (this.email && this.password) {
                    console.log("Logging in with:", this.email, this.password);
                    signInWithEmailAndPassword(getAuth(), this.email, this.password)
                        .then((userCredential) => {
                            const user = userCredential.user;
                            console.log("User logged in:", user);
                            this.SET_LOGGED_IN(true);
                            this.GET_INVOICES();
                            this.$router.push({ name: "Home" });
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            console.error("Error logging in:", errorCode, errorMessage);
                        });
                } else {
                    alert("Please fill in all fields.");
                }
            },
            signUp() {
                this.$router.push({ name: "Signup" });
            },
        },
    };
</script>

<style scoped>
.login-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
}

h1 {
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 15px;
    text-align: left;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

.login-button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.login-button:hover {
    background-color: #0056b3;
}
</style>