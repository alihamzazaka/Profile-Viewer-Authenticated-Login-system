<template>
  <nav
  >
    <v-list color="#9f75b4" dark height="100vh" style="position:relative" >
      <div class="d-flex flex-column align-center my-3">
        <v-img src="../../assets/logo2.png" width="100"></v-img>
        <h3 class="text-h5 ">Depiction</h3>
        <small>The Profile Viewer</small>
      </div>

      <v-list-item  class="link mb-2">
        <v-list-item-icon>
          <v-icon>mdi-view-dashboard-outline</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item class="link mb-2">
        <v-list-item-icon>
          <v-icon>mdi-view-dashboard-outline</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Account</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item class="link mb-2">
        <v-list-item-icon>
          <v-icon>mdi-shield-crown-outline</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Admin</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item class="link mb-2">
        <v-list-item-icon>
          <v-icon>mdi-shield-crown-outline</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <div class="pb-4  text-center" style="position:absolute; bottom:2rem; left: 2.5rem">
        <v-btn rounded size="large" color="dark" @click="logoutUser">
          <v-icon class="mx-2">mdi-logout-variant</v-icon>
          Logout
        </v-btn>
      </div>
    </v-list>

  </nav>
</template>

<script>

export default {
  name: "NavBar",
  methods: {
    logoutUser(){
      localStorage.removeItem('currentUser')
      sessionStorage.removeItem('token')
      this.$router.push('/')
    }
  }
};
</script>
<style>
.link {
  transition: ease-in-out 1s;
}
.link:hover {
  background-color: rgb(145, 26, 156);
  color: rgb(255, 251, 251) !important;
  border-radius: 15px 50px;
}
</style>