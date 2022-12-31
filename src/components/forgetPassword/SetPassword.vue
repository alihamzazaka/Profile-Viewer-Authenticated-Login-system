<template>
  <v-container class="mt-10">
    <v-row class="text-center">
      <v-col cols="12">
        <v-avatar size="180">
          <img src="../../assets/setPassword.svg" />
        </v-avatar>
      </v-col>
    </v-row>

    <div class="text-center">
        <h1 class="mt-2 mb-3 text-h5 ml-3 font-weight-medium">
          Set new password
        </h1>
        <p class="text-body-2">
          Your new password must be different to previously used passwords
        </p>
      </div>
      <v-row class="d-flex justify-center">
        <v-col cols="6">
          <v-text-field
        class="pt-0"
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="validation.passwordValidation"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Password"
          @click:append="show1 = !show1"
        ></v-text-field>
        <v-text-field
        class="pt-0"
          v-model="verify"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[passwordMatch]"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Confirm Password"
          @click:append="show1 = !show1"
          required
        ></v-text-field>
      </v-col>
      </v-row>
      <div class="d-flex justify-center">
        <v-btn class="forget-btn white--text" large rounded color="#9f75b4" @click="setPassword">
          Reset Password
        </v-btn>
      </div>
        <div class="d-flex justify-center mt-4">
          <router-link to="/" class="text-decoration-none">
            <v-btn
              class="forget-btn white--text"
              large
              rounded
              color="secondary"
            >
              <v-icon>mdi-arrow-left-thin</v-icon> Back to Log In
            </v-btn></router-link
          >
        </div>
      
  </v-container>
</template>
<script>
import * as validations from '../../validations'
export default {
  name: "SetPass",
  created(){
    this.validation = validations
  },
  data(){
    return {
      validation: '',
      show1: false,
      password: '',
      verify: ''
    }
  },
  methods: {
    setPassword(){
      this.$router.push('/passwordReset')
    }
  },
  computed: {
    passwordMatch() {
      return () => this.password === this.verify || "Password must match";
    },
  },
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