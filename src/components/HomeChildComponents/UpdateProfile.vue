<template>
  <div>
    <v-container>
      <div>
        <v-img
          max-height="250"
          class="round"
          src="https://picsum.photos/id/11/500/300"
        ></v-img>
        <div>
          <v-row>
            <v-col md="8">
              <v-row>
                <v-col class="d-flex justify-start mt-n10">
                  <MainUpload />
                </v-col>
              </v-row>
            </v-col>
            <v-col md="4" class="d-flex justify-end">
              <router-link to="/home" class="text-decoration-none">
                <v-btn class="mx-2 my-2 mt-4" depressed> Cancel </v-btn>
              </router-link>
              <v-btn
                depressed
                dark
                class="mx-2 my-2 mr-4 mt-4"
                @click="updateUserData"
              >
                Save Data
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </div>

      <div>
        <h1 class="mt-6 mb-4 text-h5 ml-3 font-weight-medium text-center">
          Profile Update
        </h1>
        <v-row class="d-flex justify-around flex-container">
          <v-col md="3" sm="3" class="d-flex justify-center py-0">
            <h4 class="mt-4 text-center">Full Name</h4>
          </v-col>
          <v-col md="8" sm="9" class="d-flex justify-start py-0">
            <v-text-field
              required
              :rules="validation.nameValidation"
              label="First Name"
              color="indigo"
              v-model="updateData.firstName"
            ></v-text-field>
            <v-text-field
              required
              :rules="validation.nameValidation"
              label="Last Name "
              color="indigo"
              class="ml-4 mr-4"
              v-model="updateData.lastName"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="d-flex justify-around flex-container">
          <v-col md="3" sm="3" class="d-flex justify-center py-0">
            <h4 class="mt-4 text-center">Email</h4>
          </v-col>
          <v-col md="8" sm="9" class="d-flex justify-start py-0">
            <v-text-field
              :rules="validation.emailValidation"
              color="indigo"
              label="Email"
              class="mr-4"
              v-model="updateData.email"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="d-flex justify-around flex-container">
          <v-col md="3" sm="3" class="d-flex justify-center py-0">
            <h4 class="mt-4 text-center">Password</h4>
          </v-col>
          <v-col md="8" sm="9" class="d-flex justify-start py-0">
            <v-text-field
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="validation.passwordValidation"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              color="indigo"
              @click:append="show1 = !show1"
              label="Password"
              class="mr-4"
              v-model="updateData.password"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="flex-container">
          <v-col md="3" sm="3" class="d-flex justify-center py-0">
            <h4 class="mt-4 text-center">Age</h4>
          </v-col>
          <v-col md="8" sm="9" class="d-flex justify-start py-0">
            <v-slider
              class="mr-4 mt-4"
              color="indigo"
              label="Age"
              min="1"
              max="100"
              thumb-label
              v-model="updateData.age"
            ></v-slider>
          </v-col>
        </v-row>

        <v-row class="flex-container">
          <v-col md="3" sm="3" class="d-flex justify-center py-0">
            <h4 class="mt-4 text-center">Gender</h4>
          </v-col>
          <v-col md="8" sm="9" class="d-flex justify-start py-0">
            <v-select
              class="mr-4"
              :items="gender"
              label="Gender"
              color="indigo"
              v-model="updateData.gender"
            ></v-select>
          </v-col>
        </v-row>
        <v-row class="flex-container">
          <v-col md="3" sm="3" class="d-flex justify-center py-0">
            <h4 class="mt-4 text-center">Job Title</h4>
          </v-col>
          <v-col md="8" m="9" class="d-flex justify-start py-0">
            <v-text-field
              label="Name"
              color="indigo"
              class="mr-4"
              v-model="updateData.job"
            ></v-text-field>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>
   
   <script>
import MainUpload from "./sub-components/MainUpload.vue";
import * as validations from "../../validations";
import * as userDataHandling from "../../userDataHandling";
export default {
  name: "MainProfile",
  components: {
    MainUpload,
  },
  created() {
    this.validation = validations;
    this.userMethods = userDataHandling;
  },
  mounted() {
    this.updateData = {...this.oldData}
  },
 
  data() {
    return {
      validation: "",
      userMethods: null,
      show1: false,
      oldData: this.$store.state.userData,
      gender: ["Male", "Female", "Other"],
      updateData: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        age: "21",
        gender: "",
        job: "",
        image: ''
      },
    };
  },

  methods: {
    updateUserData() {
      this.updateData = {...this.oldData, image: this.$store.state.img}
      this.$store.commit("alertOn")
      this.userMethods.updateUser(this.oldData, this.updateData);
      localStorage.setItem("currentUser", JSON.stringify(this.updateData));
      this.$store.dispatch("getUserData");
      this.$router.push('/home')
    },
  },
};
</script>
   

   <style>
.round {
  border-top-left-radius: 75px;
}
@media screen and (max-width: 600px) {
  .flex-container {
    flex-direction: column;
    width: 80%;
    margin: auto;
  }
}
</style>