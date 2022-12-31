<template>
  <v-container class="my-6">
    <v-row class="text-center d-flex">
      <v-col cols="12">
        <v-avatar size="180">
          <img src="../../assets/forget-password-img.svg" />
       </v-avatar>
      </v-col>
    </v-row>

    <div class="text-center">
        <h1 class="mt-2 mb-3 text-h5 ml-3 font-weight-medium">
          Forget Password?
        </h1>

        <p class="text-body-2">
          No worries, we will send you verification email
        </p>
      </div>
    <v-row class="d-flex justify-center">
      <v-col cols="6"  >
        <v-text-field class="mt-1"  label="Verify Email">
        </v-text-field>
        <div class="d-flex justify-center mt-8">
          <v-btn class="forget-btn white--text" large rounded color="#9f75b4" @click="resetPassowrd"
            >Reset Password</v-btn>
        </div>
      </v-col>
    </v-row>
    <div class="d-flex justify-center mt-4">
      <router-link to="/" class="text-decoration-none">
        <v-btn class="forget-btn white--text" large rounded color="secondary" >
          <v-icon>mdi-arrow-left-thin</v-icon> Back to Log In
        </v-btn></router-link
      >
    </div>
  </v-container>
</template>

<script>
export default {
  name: "ComponentOne",
  data(){
    return {

    }
  },
  methods: {
    resetPassowrd(){
      this.$router.push('/emailVerification')
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
    width: 11rem;
  }
}
</style>
