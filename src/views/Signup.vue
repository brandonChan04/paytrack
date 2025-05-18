<template>
    <div class="signup">
        <h1>Signup</h1>
        <form @submit.prevent="handleSignup">
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" required />
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" required />
            </div>
            <button type="submit">Sign Up</button>
        </form>
        <button @click="login">Log In</button>
    </div>
</template>

<script>
    import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
    export default {
        name: "Signup",
        data() {
            return {
                email: "",
                password: "",
            };
        },
        methods: {
            handleSignup() {
                console.log("Signup form submitted", {
                    email: this.email,
                    password: this.password,
                });
                createUserWithEmailAndPassword(getAuth(), this.email, this.password)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        alert("Account created successfully:", user);
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.error("Error logging in:", errorCode, errorMessage);
                    });
            },
            login() {
                this.$router.push({ name: "Login" });
            },
        },
    };
</script>

<style scoped>
.signup {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
}

.signup h1 {
    text-align: center;
}

.signup form div {
    margin-bottom: 15px;
}

.signup label {
    display: block;
    margin-bottom: 5px;
}

.signup input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}

.signup button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.signup button:hover {
    background-color: #0056b3;
}
</style>