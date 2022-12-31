<template>
  <v-container class="text-center">
    <v-row class="d-flex justify-space-around">
      <v-col cols="12" md="6" class="my-auto hidden-sm-and-down">
        <div class="d-flex flex-column align-center ">
          <v-img src="../assets/loginPageSideImg.svg" width="100%"></v-img>
        </div>
      </v-col>

      <v-col cols="12" md="6" sm="9"  class="px-13  mt-8">
        <div class="d-flex flex-column align-center">
                    <v-img src="../assets/logo.png" width="150"></v-img>
                </div>

        <h1 class="mt-6 mb-4 text-h5 ml-3 font-weight-medium">Login</h1>
        <v-form>
          <v-text-field
            v-model="loginData.userID"
            :rules="validation.required"
            label="E-mail or Username"
            required
            @keypress.enter="validate"
          ></v-text-field>

          <v-text-field
            v-model="loginData.password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            :rules="validation.required"
          @click:append="show1 = !show1"
          required
          @keypress.enter="validate"
          ></v-text-field>

          <div class="text-end mb-2">
            <small><router-link to="/forgetPassword"><a>Forgot Password? </a></router-link> </small>
          </div>
          <div class="d-flex flex-column align-center py-3 buttons_padding">
            <v-btn
              rounded
              color="#9f75b4"
              large
              class="sign_btn white--text"
              @click="validate"
            >
              Login
            </v-btn>

            <div class="d-flex flex-column align-center">
              <p><span>or</span></p>
            </div>

            <v-btn rounded color="secondary" large class="sign_btn">
              <v-icon class="mx-2">mdi-google</v-icon> Login with Google
            </v-btn>
          </div>
          <small>Not Register Yet? <router-link to="/signup"><a>Sign Up</a></router-link></small>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script>
import * as validations from '../validations'
export default {
  name: "LoginPage",
  created(){
    this.validation = validations
  },
  methods: {
    validate() {
      if(this.loginData.userID && this.loginData.password){
        this.$store.dispatch('loginValidation', this.loginData)
      }
    },
    
  },
  data: () => ({
    show1: false,
    validation: '',
    loginData: {
      userID: '',
      password: ''
    }
  }),

};
</script>

<style scoped>
p {
  width: 35%;
  text-align: center;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  margin: 20px 0 20px;
}

p span {
  background: #fff;
  padding: 0 10px;
}

.sign_btn {
  width: 18rem;
}

@media only screen and (max-width: 600px) {
  .sign_btn {
    width: 15rem;
  }

  .l_name {
    padding-top: 0px;
  }

  .f_name {
    padding-bottom: 0px;
  }
}
</style>