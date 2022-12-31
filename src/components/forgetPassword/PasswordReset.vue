<template>
  <v-container class="my-6">
    <v-row class="text-center d-flex justify-center">
      <v-col cols="12">
        <v-avatar size="180">
          <img src="../../assets/setPassword.svg" />
        </v-avatar>
      </v-col>
    </v-row >
        <div class="text-center"> 
      <h1 class="mt-10 mb-3 text-h5 ml-3 font-weight-medium">Password reset</h1>
      <p class="text-body-2">
        Your password has been successfully reset. Click below to log in
        magically
      </p>
    </div>
      <div class="d-flex justify-center">
      <router-link to="/" class="text-decoration-none">
            <v-btn
              class="forget-btn white--text"
              large
              rounded
              color="#9f75b4"
            >
              <v-icon>mdi-arrow-left-thin</v-icon> Back to Log In
            </v-btn></router-link>
          </div>
          
  </v-container>
</template>
 <script>
export default {
  name: "PassReset",
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