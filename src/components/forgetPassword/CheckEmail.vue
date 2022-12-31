<template>
  <v-container class="mt-6">
    <v-row class="text-center ">
      <v-col cols="12">
        <v-avatar size="180">
          <img src="../../assets/checkEmail.svg" />
        </v-avatar>
      </v-col>
      </v-row>
      <v-row class="text-center">
      <v-col class="mb-1" cols="12">
        <h1 class="mt-2 mb-3 text-h5 ml-3 font-weight-medium">
          Check your Email
        </h1>
        <p class="text-body-2">We sent a password reset link to</p>
        <p class="text-body-1">*****email*****</p>
          <v-btn
            class="forget-btn white--text"
            @click="checkComponent"
            large
            rounded
            color="#9f75b4"
            >Open Email App</v-btn
          >
    <div class="d-flex justify-center mt-4 flex-container">
      <p class="mt-1 mr-3">Didn't receive email?</p>
      <v-btn text color="#9f75b4" >Click to resend</v-btn>
    </div>
    <div class="d-flex justify-center mt-4">
      <router-link to="/" class="text-decoration-none">
        <v-btn class="forget-btn white--text" large rounded color="secondary">
          <v-icon>mdi-arrow-left-thin</v-icon> Back to Log In
        </v-btn></router-link
      >
    </div>
  </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ComponentOne",
  data() {
    return {};
  },
  methods: {
    checkComponent(){
      this.$router.push('/setPassword')
    }
  }
};
</script>
<style scoped>
.forget-btn {
  width: 18rem;
}
@media only screen and (max-width: 600px) {
  .forget-btn {
    width: 15rem;
  }
  .flex-container{
    flex-direction: column;
    align-content: center;
  }
  .flex-container >p{
    margin-bottom: 0;
  }
}
</style>
