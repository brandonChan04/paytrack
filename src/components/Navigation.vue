<template>
  <header class="flex">
    <div class="branding flex">
      <img src="../assets/paytrack-logo.png" alt="" />
      <button
        class="btn btn-primary"
        @click="handleSignOut">sign out</button>
    </div>
  </header>
</template>
  
<script>
  import { getAuth, signOut } from "firebase/auth";
  import { mapActions, mapMutations, mapState } from "vuex/dist/vuex.cjs.js";

  export default {
    name: "navigation",
    methods: {
      ...mapActions(['RESET_INVOICES']),
      ...mapState(['loggedIn']),
      ...mapMutations(['SET_LOGGED_IN']),
      handleSignOut() {
        signOut(getAuth()).then(() => {
          console.log("User signed out.");
          this.$router.push({ name: "Login" });
          this.SET_LOGGED_IN(false);
          // this.RESET_INVOICES();
        })
      }
    },
  };
</script>
  
<style lang="scss" scoped>
  header {
    z-index: 99;
    flex-direction: row;
    background-color: #1e2139;
    @media (min-width: 900px) {
      min-height: 100%;
      min-width: 90px;
      flex-direction: column;
      border-radius: 0 20px 20px 0;
    }
  
    .branding {
      border-radius: 0 20px 20px 0;
      background-color: #7c5dfa;
      justify-content: center;
      padding: 16px;
      @media (min-width: 900px) {
        width: 100%;
      }
  
      img {
        width: auto;
        height: 50px;
      }
    }
  }
</style>
  