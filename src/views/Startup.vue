<template>
    <div class="startup">
      <div>
        <img src="../assets/paytrack.png" alt="" />
        <div class="buttons">
          <button @click="logIn">
            <div class="inner-button">
                <img src="../assets/plus.svg" alt="" />
            </div>
            <span>Log In</span>
          </button>
          <button @click="signUp">
            <div class="inner-button">
                <img src="../assets/plus.svg" alt="" />
            </div>
            <span>Sign Up</span>
          </button>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "Startup",
    methods: {
      logIn() {
        console.log("Log In clicked");
        this.$router.push({ name: "Login" });
      },
      signUp() {
        console
        this.$router.push({ name: "Signup" });
      },
    }
  }
</script>

<style lang="scss" scoped>
.startup {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 2rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    img {
      max-width: 300px;
    }

    .buttons {
      display: flex;
      gap: 1.5rem;

      button {
        background-color: #eae6f6;
        color: #1e1e2f;
        border: none;
        border-radius: 1.5rem;
        padding: 0.75rem 1.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: bold;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s ease;

        .inner-button {
          background-color: #fff;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            width: 14px;
            height: 14px;
          }
        }

        &:hover {
          background-color: #d2ccf2;
          transform: translateY(-2px);
        }
      }
    }
  }
}
</style>
